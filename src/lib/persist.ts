import type { AppLogic as AppLogicClass } from '../logic/app.js';

// The ported logic is untyped JS; treat its state as a loose record here.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Loose = { state: Record<string, any>; nextId: number; screens: { nx: { nid: number } }; __listeners: Set<() => void> };
const loose = (l: AppLogicClass) => l as unknown as Loose;

// Saves the durable parts of the app state to localStorage so workouts, plans,
// meals and goals survive closing the app. UI-only state (open sheets, drafts,
// in-flight AI requests) is left out and starts fresh each launch.

const KEY = 'gym-tracker:v1';

const ROOT_KEYS = [
  'dashLists', 'dashSplit', 'planSplit', 'weekPlan', 'weekOver', 'skipMemo', 'memoHide', 'missedSkip',
  'recovered', 'recPrev', 'recClosed', 'sesExId', 'sesQueue', 'guides', 'illus',
];
const SUB_KEYS: Record<string, string[]> = {
  prog: ['edits', 'range'],
  nx: ['profile', 'log', 'ov'],
  diet: ['plan'],
  prof: ['name', 'weekly', 'weight'],
  ses: ['mode', 'swAcc', 'swStart', 'laps', 'tmDur', 'tmLeft', 'tmEnd', 'tmState'],
};

// Async lookups that were mid-flight when the app closed must be retried.
const settled = (m: Record<string, { status?: string }> = {}) =>
  Object.fromEntries(Object.entries(m).filter(([, g]) => g && g.status !== 'loading' && g.status !== 'error'));

interface Saved {
  root: Record<string, unknown>;
  sub: Record<string, Record<string, unknown>>;
  nextId: number;
  nid: number;
}

export function restore(app: AppLogicClass) {
  const logic = loose(app);
  let saved: Saved | null = null;
  try {
    const raw = localStorage.getItem(KEY);
    saved = raw ? (JSON.parse(raw) as Saved) : null;
  } catch {
    saved = null;
  }
  if (!saved) return;
  const st = { ...logic.state, ...saved.root };
  for (const [k, part] of Object.entries(saved.sub || {})) st[k] = { ...logic.state[k], ...part };
  logic.state = st;
  logic.nextId = Math.max(logic.nextId, saved.nextId || 0);
  logic.screens.nx.nid = Math.max(logic.screens.nx.nid, saved.nid || 0);
}

function snapshot(logic: Loose): Saved {
  const st = logic.state;
  const root: Record<string, unknown> = {};
  for (const k of ROOT_KEYS) if (st[k] !== undefined) root[k] = st[k];
  root.guides = settled(st.guides);
  root.illus = settled(st.illus);
  const sub: Saved['sub'] = {};
  for (const [k, keys] of Object.entries(SUB_KEYS)) {
    sub[k] = {};
    for (const f of keys) if (st[k]?.[f] !== undefined) sub[k][f] = st[k][f];
  }
  return { root, sub, nextId: logic.nextId, nid: logic.screens.nx.nid };
}

export function autosave(app: AppLogicClass) {
  const logic = loose(app);
  let t: ReturnType<typeof setTimeout> | undefined;
  const save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(snapshot(logic)));
    } catch {
      /* storage full or unavailable: keep running without saving */
    }
  };
  const listener = () => {
    clearTimeout(t);
    t = setTimeout(save, 400);
  };
  logic.__listeners.add(listener);
  const flush = () => {
    if (document.visibilityState === 'hidden') save();
  };
  document.addEventListener('visibilitychange', flush);
  return () => {
    logic.__listeners.delete(listener);
    document.removeEventListener('visibilitychange', flush);
  };
}

export function clearSaved() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
