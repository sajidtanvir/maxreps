import { complete, type CompleteBody } from '../server/complete';

// Vercel serverless function (Web Request/Response signature).
export const config = { maxDuration: 60 };

export async function POST(req: Request): Promise<Response> {
  let body: CompleteBody;
  try {
    body = (await req.json()) as CompleteBody;
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const r = await complete(body);
  return Response.json(r.body, { status: r.status });
}
