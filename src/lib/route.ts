import { useEffect, useSyncExternalStore } from 'react';

// Hash routing: the design links screens with #ids (href="#dashboard",
// location.hash = '#session'), so the URL hash is the current screen.
export const SCREENS = [
  'welcome', 'login', 'signup', 'dashboard', 'session', 'summary',
  'log-workout', 'progress', 'nutrition', 'diet', 'profile',
] as const;
export type ScreenId = (typeof SCREENS)[number];
export const AUTH_SCREENS: readonly ScreenId[] = ['welcome', 'login', 'signup'];

const read = () => location.hash.replace(/^#/, '');

export function useHash(): string {
  return useSyncExternalStore(
    (l) => (window.addEventListener('hashchange', l), () => window.removeEventListener('hashchange', l)),
    read,
  );
}

export function isScreen(id: string): id is ScreenId {
  return (SCREENS as readonly string[]).includes(id);
}

/** Jump to the top whenever the screen changes, like a native push. */
export function useScrollReset(id: string) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
}
