// Client side of the AI proxy. Installs window.claude.complete(), the API the
// design prototype's logic was written against, backed by POST /api/complete.

type Content = string | Array<Record<string, unknown>>;
type CompleteArg = string | { messages: Array<{ role: string; content: Content }>; max_tokens?: number };

async function complete(arg: CompleteArg): Promise<string> {
  const body = typeof arg === 'string' ? { prompt: arg } : arg;
  const res = await fetch('/api/complete', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => ({}))) as { text?: string; error?: string };
  if (!res.ok || typeof data.text !== 'string') throw new Error(data.error || `AI request failed (${res.status})`);
  return data.text;
}

declare global {
  interface Window {
    claude?: { complete: (arg: CompleteArg) => Promise<string> };
  }
}

export function installAI() {
  window.claude = { complete };
}
