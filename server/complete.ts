import Anthropic from '@anthropic-ai/sdk';

// Shared handler behind POST /api/complete. The client sends either
// { prompt: string } or { messages: MessageParam[], max_tokens?: number }
// and gets back { text } — the same contract the design prototype's
// window.claude.complete() had.

const MODEL = 'claude-opus-5-5';
const MAX_TOKENS_CAP = 16000;

export interface CompleteBody {
  prompt?: string;
  messages?: Anthropic.MessageParam[];
  max_tokens?: number;
}

export interface CompleteResult {
  status: number;
  body: { text: string } | { error: string };
}

let client: Anthropic | null = null;

export async function complete(body: CompleteBody): Promise<CompleteResult> {
  const messages: Anthropic.MessageParam[] | null = Array.isArray(body.messages)
    ? body.messages
    : typeof body.prompt === 'string' && body.prompt.trim()
      ? [{ role: 'user', content: body.prompt }]
      : null;
  if (!messages || messages.length === 0) return { status: 400, body: { error: 'Missing prompt or messages' } };
  if (!process.env.ANTHROPIC_API_KEY) return { status: 503, body: { error: 'AI is not configured on the server' } };

  client ??= new Anthropic();
  const max_tokens = Math.min(Math.max(Number(body.max_tokens) || 4000, 256), MAX_TOKENS_CAP);
  try {
    const message = await client.beta.messages
      .stream({
        model: MODEL,
        max_tokens,
        output_config: { effort: 'low' },
        betas: ['server-side-fallback-2026-07-01'],
        fallbacks: 'default',
        messages,
      } as Anthropic.Beta.Messages.MessageCreateParamsStreaming)
      .finalMessage();
    if (message.stop_reason === 'refusal') return { status: 422, body: { error: 'The AI declined this request' } };
    const text = message.content.map((b) => (b.type === 'text' ? b.text : '')).join('');
    return { status: 200, body: { text } };
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) return { status: 429, body: { error: 'AI is busy, try again shortly' } };
    if (err instanceof Anthropic.BadRequestError) return { status: 400, body: { error: err.message } };
    if (err instanceof Anthropic.APIError) return { status: 502, body: { error: 'AI request failed' } };
    return { status: 502, body: { error: 'Could not reach the AI' } };
  }
}
