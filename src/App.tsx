import { useEffect, useMemo, type ComponentType } from 'react';
import { AppLogic } from './logic/app.js';
import { useLogic } from './logic/runtime';
import { autosave, restore } from './lib/persist';
import { AUTH_SCREENS, isScreen, useHash, useScrollReset, type ScreenId } from './lib/route';
import { setSettings, useResolvedTheme, useSettings } from './lib/settings';
import type { ScreenProps } from './screens/types';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignupScreen } from './screens/SignupScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { SessionScreen } from './screens/SessionScreen';
import { SummaryScreen } from './screens/SummaryScreen';
import { LogWorkoutScreen } from './screens/LogWorkoutScreen';
import { ProgressScreen } from './screens/ProgressScreen';
import { NutritionScreen } from './screens/NutritionScreen';
import { DietScreen } from './screens/DietScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const SCREENS: Record<ScreenId, ComponentType<ScreenProps>> = {
  welcome: WelcomeScreen,
  login: LoginScreen,
  signup: SignupScreen,
  dashboard: DashboardScreen,
  session: SessionScreen,
  summary: SummaryScreen,
  'log-workout': LogWorkoutScreen,
  progress: ProgressScreen,
  nutrition: NutritionScreen,
  diet: DietScreen,
  profile: ProfileScreen,
};

const REST_SECONDS = 90;

export function App() {
  const theme = useResolvedTheme();
  const props = useMemo(
    () => ({ theme: theme === 'light' ? 'Light' : 'Dark', sessionState: 'Interactive', restSeconds: REST_SECONDS }),
    [theme],
  );
  const logic = useLogic(() => {
    const l = new AppLogic(props);
    restore(l);
    return l;
  }, props);
  useEffect(() => autosave(logic), [logic]);

  const { onboarded } = useSettings();
  const hash = useHash();
  const id: ScreenId = isScreen(hash) ? hash : onboarded ? 'dashboard' : 'welcome';

  useEffect(() => {
    if (hash !== id) history.replaceState(null, '', '#' + id);
    // Reaching the app past Welcome/Login counts as signed in (local-only
    // account); landing back on them, e.g. via "Log out", signs out.
    const auth = AUTH_SCREENS.includes(id);
    if (auth === onboarded) setSettings({ onboarded: !auth });
  }, [hash, id, onboarded]);

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#F5F7F6' : '#07090A');
  }, [theme]);

  useScrollReset(id);

  const Screen = SCREENS[id];
  return <Screen v={logic.renderVals()} />;
}
