import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:\\Users\\vp124\\.gemini\\antigravity\\brain\\2fb3dfc3-bf90-4349-b158-8b6168e9eb07';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://realitypulse.vercel.app';

async function runCapture() {
  const port = 9223;
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    `--remote-debugging-port=${port}`,
    '--window-size=1280,1000',
    'about:blank'
  ]);

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

  // 1. Capture Nominations Panel & Full Desktop
  console.log('Navigating to target for desktop & nominations panel...');
  const { targetId } = await send('Target.createTarget', {
    url: TARGET_URL,
    width: 1280,
    height: 1000
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

  // Wait for React and DB data to render
  console.log('Waiting for content to render...');
  await new Promise((r) => setTimeout(r, 4500));

  // Get bounding box of #nominations-panel
  const evalResult = await sendSession('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('nominations-panel');
      if (!el) return null;
      el.scrollIntoView({ behavior: 'instant', block: 'center' });
      const rect = el.getBoundingClientRect();
      return {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height
      };
    })()`,
    returnByValue: true
  });

  console.log('Nominations panel rect:', evalResult.result.value);

  if (evalResult.result.value) {
    const rect = evalResult.result.value;
    // Capture clip of nominations panel
    const { data: panelData } = await sendSession('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: Math.max(0, rect.x - 10),
        y: Math.max(0, rect.y - 10),
        width: rect.width + 20,
        height: rect.height + 20,
        scale: 1
      }
    });

    const panelPath = path.join(ARTIFACT_DIR, 'nominations_panel.png');
    fs.writeFileSync(panelPath, Buffer.from(panelData, 'base64'));
    console.log(`Saved nominations panel screenshot to ${panelPath}`);
  }

  // Also capture full desktop viewport
  await sendSession('Runtime.evaluate', {
    expression: 'window.scrollTo(0, 0);'
  });
  await new Promise((r) => setTimeout(r, 500));

  const { data: desktopData } = await sendSession('Page.captureScreenshot', {
    format: 'png'
  });
  const desktopPath = path.join(ARTIFACT_DIR, 'desktop_1280x800.png');
  fs.writeFileSync(desktopPath, Buffer.from(desktopData, 'base64'));
  console.log(`Saved updated desktop screenshot to ${desktopPath}`);

  // 2. Capture Mobile 390x844
  console.log('Capturing mobile 390x844...');
  await sendSession('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise((r) => setTimeout(r, 1000));

  const { data: mobileData } = await sendSession('Page.captureScreenshot', {
    format: 'png'
  });
  const mobilePath = path.join(ARTIFACT_DIR, 'mobile_390x844.png');
  fs.writeFileSync(mobilePath, Buffer.from(mobileData, 'base64'));
  console.log(`Saved updated mobile screenshot to ${mobilePath}`);

  ws.close();
  chrome.kill();
  console.log('Capture successfully completed!');
}

runCapture().catch((err) => {
  console.error('Error in runCapture:', err);
  process.exit(1);
});

