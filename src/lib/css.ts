import type { CSSProperties } from 'react';

// Converts the design's inline CSS strings (built by the logic layer) into
// React style objects. Memoized because the same strings repeat every render.
const cache = new Map<string, CSSProperties>();

export function css(text: string): CSSProperties {
  let hit = cache.get(text);
  if (hit) return hit;
  const out: Record<string, string> = {};
  for (const decl of text.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    if (!prop) continue;
    const key = prop.startsWith('--')
      ? prop
      : prop.startsWith('-')
        ? prop.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase())
        : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = decl.slice(i + 1).trim();
  }
  hit = out as CSSProperties;
  if (cache.size > 5000) cache.clear();
  cache.set(text, hit);
  return hit;
}
