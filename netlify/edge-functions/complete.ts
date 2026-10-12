import { complete, type CompleteBody } from '../../server/complete.ts';

// Netlify Edge Function serving POST /api/complete.
// Edge functions must start responding within ~40s, and AI replies (diet
// plans, photo imports) can take longer, so the response starts at once and
// sends a space every few seconds until the JSON is ready. Leading whitespace
// is valid JSON, and errors travel in the body as { error }.

declare const Netlify: { env: { get(name: string): string | undefined } };

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  let body: CompleteBody;
  try {
    body = (await req.json()) as CompleteBody;
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const apiKey = Netlify.env.get('ANTHROPIC_API_KEY');
  const enc = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(ctrl) {
      ctrl.enqueue(enc.encode(' '));
      const ping = setInterval(() => ctrl.enqueue(enc.encode(' ')), 5000);
      try {
        const r = await complete(body, apiKey);
        ctrl.enqueue(enc.encode(JSON.stringify(r.body)));
      } catch {
        ctrl.enqueue(enc.encode(JSON.stringify({ error: 'AI request failed' })));
      } finally {
        clearInterval(ping);
        ctrl.close();
      }
    },
  });
  return new Response(stream, { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
};

export const config = { path: '/api/complete' };
