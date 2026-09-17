// api/sync.js - Vercel Serverless Edge/Node Function
// Keeps the confidential Google Sheet location completely hidden on the server.
// The browser only calls /api/sync and never sees Google Sheets or Sheet IDs.

export default async function handler(req, res) {
  // 1. Read Sheet ID from Vercel Environment Variables, with encrypted fallback
  const sheetId = process.env.SHEET_ID || (() => {
    const cipher = "ciUPI0RZA1YMNTw6VwQ2JwcxOjYgNgtQUV55LgMxPQ8bNgsTVTsLNQQgCSQ=";
    const key = [67,97,117,116,105,111,82,97,100,97,114,84,101,108,101,109,101,116,114,121,75,101,121,50,48,50,54].map(c => String.fromCharCode(c)).join('');
    const buf = Buffer.from(cipher, 'base64');
    const out = [];
    for (let i = 0; i < buf.length; i++) {
      out.push(String.fromCharCode(buf[i] ^ key.charCodeAt(i % key.length)));
    }
    return out.join('');
  })();

  const gid = process.env.SHEET_GID || '0';
  const targetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${gid}`;

  try {
    const response = await fetch(targetUrl);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Upstream telemetry error' });
    }

    const text = await response.text();

    // Set secure cache headers
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    res.setHeader('Content-Type', 'application/json');

    // Parse Google's /*O_o*/ google.visualization.Query.setResponse(...) wrapper
    const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);/);
    if (match && match[1]) {
      return res.status(200).send(match[1]);
    }
    return res.status(200).send(text);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to synchronize live telemetry' });
  }
}
