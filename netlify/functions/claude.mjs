// MaxReps AI proxy. Set ANTHROPIC_API_KEY in Netlify > Site configuration > Environment variables.
export default async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return Response.json({ error: 'ANTHROPIC_API_KEY is not set' }, { status: 500 });
  let body;
  try { body = await req.json(); } catch (e) { return Response.json({ error: 'Bad request' }, { status: 400 }); }
  const messages = Array.isArray(body.messages) && body.messages.length
    ? body.messages
    : [{ role: 'user', content: String(body.prompt || '').slice(0, 20000) }];
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5', max_tokens: Math.min(Math.max(Number(body.max_tokens) || 2048, 256), 8000), messages })
  });
  const j = await r.json();
  if (!r.ok) return Response.json({ error: (j.error && j.error.message) || 'AI request failed' }, { status: 502 });
  const text = (j.content || []).filter((c) => c.type === 'text').map((c) => c.text).join('');
  return Response.json({ text });
};
