import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:\\Users\\vp124\\.gemini\\antigravity\\brain\\2fb3dfc3-bf90-4349-b158-8b6168e9eb07';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://realitypulse.vercel.app';

async function capture(width, height, outputPath) {
  const port = 9222;
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    `--remote-debugging-port=${port}`,
    `--window-size=${width},${height}`,
    'about:blank'
  ]);

  // Wait for Chrome remote debugging port to open
  let wsUrl = '';
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) {
        const data = await res.json();
        wsUrl = data.webSocketDebuggerUrl;
        break;
      }
    } catch {}
  }

  if (!wsUrl) {
    chrome.kill();
    throw new Error('Failed to connect to Chrome CDP');
  }

  const ws = new WebSocket(wsUrl);
  let id = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    }
  };

  await new Promise((resolve) => (ws.onopen = resolve));

  const send = (method, params = {}) => {
    return new Promise((resolve, reject) => {
      const reqId = id++;
      pending.set(reqId, { resolve, reject });
      ws.send(JSON.stringify({ id: reqId, method, params }));
    });
  };

  // Create new target with viewport
  const { targetId } = await send('Target.createTarget', {
    url: TARGET_URL,
    width,
    height
  });

  const { sessionId } = await send('Target.attachToTarget', {
    targetId,
    flatten: true
  });

  const sendSession = (method, params = {}) => {
    return new Promise((resolve, reject) => {
      const reqId = id++;
      pending.set(reqId, { resolve, reject });
      ws.send(JSON.stringify({ id: reqId, sessionId, method, params }));
    });
  };

  await sendSession('Page.enable');
  await sendSession('Page.navigate', { url: TARGET_URL });

  // Wait for React to mount, fetch data from /api/contestants, and render the complete dashboard
  console.log(`Waiting for ${TARGET_URL} to load completely at ${width}x${height}...`);
  await new Promise((r) => setTimeout(r, 4000));

  // Set device emulation
  await sendSession('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600
  });

  await new Promise((r) => setTimeout(r, 1000));

  const { data } = await sendSession('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false
  });

  fs.writeFileSync(outputPath, Buffer.from(data, 'base64'));
  console.log(`Saved screenshot (${Buffer.byteLength(data, 'base64')} bytes) to ${outputPath}`);

  ws.close();
  chrome.kill();
}

async function main() {
  const desktopOut = path.join(ARTIFACT_DIR, 'desktop_1280x800.png');
  const mobileOut = path.join(ARTIFACT_DIR, 'mobile_390x844.png');

  console.log('Capturing Desktop 1280x900...');
  await capture(1280, 900, desktopOut);

  await new Promise((r) => setTimeout(r, 1000));

  console.log('Capturing Mobile 390x844...');
  await capture(390, 844, mobileOut);

  console.log('Done capturing both desktop and mobile screenshots!');
}

main().catch((err) => {
  console.error('Capture error:', err);
  process.exit(1);
});

