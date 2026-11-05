import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:\\Users\\vp124\\.gemini\\antigravity\\brain\\2fb3dfc3-bf90-4349-b158-8b6168e9eb07';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://realitypulse.vercel.app';

async function run() {
  const port = 9229;
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
  await new Promise((r) => setTimeout(r, 5000));

  // Scroll down to fan poll benchmark card on Tonight view
  await sendSession('Runtime.evaluate', {
    expression: `window.scrollTo(0, 520);`
  });
  await new Promise((r) => setTimeout(r, 1000));

  const { data: pollData } = await sendSession('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACT_DIR, 'fan_poll_benchmark.png'), Buffer.from(pollData, 'base64'));
  console.log('Saved fan_poll_benchmark.png');

  // Switch to Prediction Scoreboard and scroll to table
  await sendSession('Runtime.evaluate', {
    expression: `(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const scoreboardBtn = buttons.find(b => b.textContent && b.textContent.includes('Prediction Scoreboard'));
      if (scoreboardBtn) scoreboardBtn.click();
    })()`
  });
  await new Promise((r) => setTimeout(r, 1500));

  await sendSession('Runtime.evaluate', {
    expression: `window.scrollTo(0, 480);`
  });
  await new Promise((r) => setTimeout(r, 1000));

  const { data: scoreboardTableData } = await sendSession('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACT_DIR, 'prediction_scoreboard_table.png'), Buffer.from(scoreboardTableData, 'base64'));
  console.log('Saved prediction_scoreboard_table.png');

  ws.close();
  chrome.kill();
  console.log('Done!');
}

run().catch(console.error);

