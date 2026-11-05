export interface TrackerResult {
  source: string;
  url: string;
  fetchedAt: string;
  status: 'ok' | 'error';
  week: number;
  nominees: string[];
  safeList?: string[];
  pollResults?: Array<{ name: string; votes: number; percentage: number }>;
  taskDetails?: string;
  votingDeadline?: string;
}

export async function fetchBigBoss20Tracker(): Promise<TrackerResult> {
  const url = 'https://bigboss20.in/nominations';
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    const cleanText = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

    const nominees: string[] = [];
    const candidates = [
      { id: 'c1', name: 'Tanmay Singh', match: /Tanmay|Scout/i },
      { id: 'c2', name: 'Kanika Mann', match: /Kanika/i },
      { id: 'c3', name: 'Arshifa Khan', match: /Arshifa|Arishfa/i },
      { id: 'c4', name: 'Aamrapali Dubey', match: /Aamrapali|Amrapali/i },
      { id: 'c5', name: 'Manish Goel', match: /Manish/i },
      { id: 'c7', name: 'Love Gill', match: /Love Gill/i },
      { id: 'c8', name: 'Harsh Machare', match: /Harsh|Yung DSA/i },
      { id: 'c9', name: 'Kushal Tanwar', match: /Kushal|Gullu/i },
      { id: 'c10', name: 'Mahhi Vij', match: /Mahhi/i },
      { id: 'c11', name: 'Uditi Singh', match: /Uditi/i },
      { id: 'c12', name: 'Qazi Touqeer', match: /Qazi/i }
    ];

    // Check task sentence
    let taskDetails = '';
    const taskMatch = cleanText.match(/In the Week 9 chain-reaction task.*?who chose to stop the chain\./i);
    if (taskMatch) {
      taskDetails = taskMatch[0];
    }

    // Nominated section on bigboss20.in
    const nomSection = cleanText.slice(cleanText.indexOf('NOMINATED Week 9'), cleanText.indexOf('SAFE'));
    for (const cand of candidates) {
      if (cand.match.test(nomSection)) {
        nominees.push(cand.name);
      }
    }

    return {
      source: 'bigboss20.in',
      url,
      fetchedAt: new Date().toISOString(),
      status: 'ok',
      week: 9,
      nominees,
      taskDetails,
      votingDeadline: 'Friday 6 November 2026, 10:00 AM IST'
    };
  } catch (err: any) {
    return {
      source: 'bigboss20.in',
      url,
      fetchedAt: new Date().toISOString(),
      status: 'error',
      week: 9,
      nominees: []
    };
  }
}

export async function fetchBbVoteTracker(): Promise<TrackerResult> {
  const url = 'https://bbvote.in/';
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    const tables = html.match(/<table[^>]*>[\s\S]*?<\/table>/gi) || [];
    const pollResults: Array<{ name: string; votes: number; percentage: number }> = [];
    const nominees: string[] = [];

    const firstTable = tables[0];
    if (firstTable) {
      const rows = firstTable.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
      for (const row of rows.slice(1)) {
        const cols = (row.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || []).map(c => c.replace(/<[^>]+>/g, '').trim());
        if (cols.length >= 3 && !cols[0].toLowerCase().includes('total')) {
          const name = cols[0];
          const votes = parseInt(cols[1].replace(/,/g, ''), 10) || 0;
          const percentage = parseInt(cols[2].replace(/%/g, ''), 10) || 0;
          pollResults.push({ name, votes, percentage });
          nominees.push(name);
        }
      }
    }

    return {
      source: 'bbvote.in',
      url,
      fetchedAt: new Date().toISOString(),
      status: 'ok',
      week: 9,
      nominees,
      pollResults
    };
  } catch (err: any) {
    return {
      source: 'bbvote.in',
      url,
      fetchedAt: new Date().toISOString(),
      status: 'error',
      week: 9,
      nominees: []
    };
  }
}

export async function runTrackerConsensus() {
  const [bb20, bbVote] = await Promise.all([
    fetchBigBoss20Tracker(),
    fetchBbVoteTracker()
  ]);

  console.log('--- Tracker 1: bigboss20.in ---');
  console.log('Status:', bb20.status);
  console.log('Nominees:', bb20.nominees);
  console.log('Task Details:', bb20.taskDetails);

  console.log('\n--- Tracker 2: bbvote.in ---');
  console.log('Status:', bbVote.status);
  console.log('Nominees:', bbVote.nominees);
  console.log('Live Poll Count:', bbVote.pollResults?.reduce((a, b) => a + b.votes, 0));
  console.log('Poll Results:', bbVote.pollResults);
}

// Execute directly if run via node
if (import.meta.url.endsWith(process.argv[1]) || process.argv[1]?.includes('fetch-trackers')) {
  runTrackerConsensus();
}

