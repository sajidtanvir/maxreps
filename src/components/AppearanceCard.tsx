import { setSettings, useSettings, type ThemePref } from '../lib/settings';

// Theme picker on Profile. Replaces the design's Dark/Light tweak, adding a
// "System" option that follows the phone's appearance setting.
const OPTIONS: Array<[ThemePref, string]> = [
  ['system', 'System'],
  ['dark', 'Dark'],
  ['light', 'Light'],
];

export function AppearanceCard() {
  const { theme } = useSettings();
  return (
    <section
      aria-label="Appearance"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '20px',
        borderRadius: '28px',
        border: '1px solid var(--line)',
        background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
      }}
    >
      <div
        style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: '11px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--ink3)',
        }}
      >
        Appearance
      </div>
      <div
        role="radiogroup"
        aria-label="Theme"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '4px',
          padding: '4px',
          borderRadius: '18px',
          border: '1px solid var(--line)',
          background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
        }}
      >
        {OPTIONS.map(([value, label]) => {
          const on = theme === value;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setSettings({ theme: value })}
              style={{
                height: '40px',
                border: '0',
                borderRadius: '14px',
                background: on ? '#40DBA8' : 'transparent',
                color: on ? '#02120C' : 'var(--ink2)',
                fontSize: '14px',
                fontWeight: on ? 600 : 500,
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
      <p style={{ margin: 0, fontSize: '13px', color: 'var(--ink3)' }}>
        System matches your phone&apos;s light or dark mode.
      </p>
    </section>
  );
}
