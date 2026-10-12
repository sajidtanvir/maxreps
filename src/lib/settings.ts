import { useEffect, useState, useSyncExternalStore } from 'react';

// Device-level preferences, kept apart from workout data.
export type ThemePref = 'system' | 'dark' | 'light';

const KEY = 'gym-tracker:settings';
type Settings = { theme: ThemePref; onboarded: boolean };
const DEFAULTS: Settings = { theme: 'system', onboarded: false };

let current: Settings = (() => {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') };
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
