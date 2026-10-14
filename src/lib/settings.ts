import { useEffect, useState, useSyncExternalStore } from 'react';

// Device-level preferences, kept apart from workout data.
export type ThemePref = 'system' | 'dark' | 'light';

const KEY = 'gym-tracker:settings';
// themeV marks settings saved since Dark became the default. Earlier installs
// stored 'system' without the user choosing it, so they start on Dark once.
const THEME_V = 2;
type Settings = { theme: ThemePref; onboarded: boolean; themeV: number };
const DEFAULTS: Settings = { theme: 'dark', onboarded: false, themeV: THEME_V };

let current: Settings = (() => {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    if (saved.themeV !== THEME_V) delete saved.theme;
    return { ...DEFAULTS, ...saved, themeV: THEME_V };
  } catch {
    return DEFAULTS;
  }
})();
const listeners = new Set<() => void>();

export function setSettings(patch: Partial<Settings>) {
  current = { ...current, ...patch };
  try {
    localStorage.setItem(KEY, JSON.stringify(current));
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export function getSettings() {
  return current;
}

export function useSettings(): Settings {
  return useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => current,
  );
}

const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)');

/** The theme actually shown: the user's pick, or the phone's setting. */
export function useResolvedTheme(): 'dark' | 'light' {
  const { theme } = useSettings();
  const [systemDark, setSystemDark] = useState(() => darkQuery().matches);
  useEffect(() => {
    const q = darkQuery();
    const on = () => setSystemDark(q.matches);
    q.addEventListener('change', on);
    return () => q.removeEventListener('change', on);
  }, []);
  return theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;
}
