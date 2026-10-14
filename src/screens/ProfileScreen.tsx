// Generated from project/Gym Tracker.dc.html (#profile). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';
import { AppearanceCard } from '../components/AppearanceCard';

export function ProfileScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="profile"
      style={{ background: 'radial-gradient(140% 30% at 50% 0%, rgba(64,219,168,0.08), rgba(64,219,168,0) 60%), var(--bg)' }}
    >
      <main style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '16px 20px 124px' }}>
        <header style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: '0',
              width: '64px',
              height: '64px',
              borderRadius: '32px',
              border: '1px solid rgba(64,219,168,0.4)',
              background: 'rgba(64,219,168,0.08)',
              boxShadow: '0 0 30px -6px rgba(64,219,168,0.45)',
              fontSize: '24px',
              fontWeight: '300',
              color: 'var(--accT)',
            }}
          >
            N
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h1 style={{ margin: '0', fontSize: '34px', fontWeight: '300', lineHeight: '1.05', letterSpacing: '-0.035em' }}>Profile</h1>
            <p style={{ margin: '0', fontSize: '15px', color: 'var(--ink2)' }}>Goals and body metrics.</p>
          </div>
        </header>
        <section
          aria-label="Goals"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
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
            Goals
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="profile-name" style={{ fontSize: '13px', color: 'var(--ink2)' }}>
              Name
            </label>
            <input
              className="focus-2"
              id="profile-name"
              type="text"
              value={v.prof?.name ?? ''}
              onChange={v.prof?.setName}
              style={{
                width: '100%',
                height: '52px',
                padding: '0 16px',
                borderRadius: '14px',
                border: '1px solid var(--line)',
                background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                fontSize: '16px',
                outline: 'none',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '14px 14px 14px 16px',
              borderRadius: '18px',
              border: '1px solid rgba(64,219,168,0.3)',
              background: 'rgba(64,219,168,0.06)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accT)',
                }}
              >
                Nutrition goal
              </span>
              <span style={{ fontSize: '16px', fontWeight: '500' }}>{v.prof?.nGoal}</span>
              <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>{v.prof?.nTargets}</span>
            </div>
            <button
              type="button"
              onClick={v.prof?.changeGoals}
              style={{
                flexShrink: '0',
                minHeight: '36px',
                padding: '0 14px',
                border: '1px solid var(--line)',
                borderRadius: '18px',
                background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                fontSize: '13px',
                fontWeight: '500',
                color: 'var(--ink)',
                cursor: 'pointer',
              }}
            >
              Change
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="profile-weekly" style={{ fontSize: '13px', color: 'var(--ink2)' }}>
              Weekly workout goal
            </label>
            <input
              className="focus-2"
              id="profile-weekly"
              type="number"
              value={v.prof?.weekly ?? ''}
              onChange={v.prof?.setWeekly}
              style={{
                width: '100%',
                height: '52px',
                padding: '0 16px',
                borderRadius: '14px',
                border: '1px solid var(--line)',
                background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                fontSize: '16px',
                outline: 'none',
              }}
            />
          </div>
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '56px',
              marginTop: '4px',
              border: '0',
              borderRadius: '18px',
              background: 'var(--acc)',
              color: 'var(--accInk)',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 10px 36px -10px rgba(64,219,168,0.6)',
              cursor: 'pointer',
            }}
          >
            Save
          </button>
        </section>
        <section
          aria-label="Log body weight"
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
          <label
            htmlFor="profile-weight"
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink3)',
            }}
          >
            Log body weight (kg)
          </label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              className="focus-2"
              id="profile-weight"
              type="number"
              value={v.prof?.weight ?? ''}
              onChange={v.prof?.setWeight}
              style={{
                flexGrow: '1',
                minWidth: '0',
                height: '52px',
                padding: '0 16px',
                borderRadius: '14px',
                border: '1px solid var(--line)',
                background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                fontSize: '16px',
                outline: 'none',
              }}
            />
            <button
              type="button"
              disabled={v.prof?.noWeight}
              style={css(
                `${v.prof?.weightStyle ?? ''} flex-shrink: 0; width: 120px; height: 52px; border: 0; border-radius: 14px; background: var(--acc); color: var(--accInk); font-size: 15px; font-weight: 600; cursor: pointer;`,
              )}
            >
              Log weight
            </button>
          </div>
        </section>
        <section
          aria-label="Weight history"
          style={{
            padding: '20px 20px 6px',
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
            Weight history
          </div>{' '}
          <ul style={{ listStyle: 'none', margin: '10px 0 0', padding: '0' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '52px', borderTop: '1px solid var(--line)' }}>
              <span style={{ flexGrow: '1', fontSize: '15px', color: 'var(--ink2)' }}>Thu 1 Oct</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px' }}>77.8 kg</span>
              <button
                type="button"
                aria-label="Delete Thu 1 Oct weight entry"
                style={{
                  minWidth: '44px',
                  minHeight: '44px',
                  padding: '0 6px',
                  border: '0',
                  background: 'none',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'var(--danger)',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>{' '}
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '52px', borderTop: '1px solid var(--line)' }}>
              <span style={{ flexGrow: '1', fontSize: '15px', color: 'var(--ink2)' }}>Sun 27 Sep</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px' }}>77.9 kg</span>
              <button
                type="button"
                aria-label="Delete Sun 27 Sep weight entry"
                style={{
                  minWidth: '44px',
                  minHeight: '44px',
                  padding: '0 6px',
                  border: '0',
                  background: 'none',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'var(--danger)',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>{' '}
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '52px', borderTop: '1px solid var(--line)' }}>
              <span style={{ flexGrow: '1', fontSize: '15px', color: 'var(--ink2)' }}>Wed 23 Sep</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px' }}>78.1 kg</span>
              <button
                type="button"
                aria-label="Delete Wed 23 Sep weight entry"
                style={{
                  minWidth: '44px',
                  minHeight: '44px',
                  padding: '0 6px',
                  border: '0',
                  background: 'none',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'var(--danger)',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>{' '}
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '52px', borderTop: '1px solid var(--line)' }}>
              <span style={{ flexGrow: '1', fontSize: '15px', color: 'var(--ink2)' }}>Sat 19 Sep</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px' }}>78.5 kg</span>
              <button
                type="button"
                aria-label="Delete Sat 19 Sep weight entry"
                style={{
                  minWidth: '44px',
                  minHeight: '44px',
                  padding: '0 6px',
                  border: '0',
                  background: 'none',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'var(--danger)',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>{' '}
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '52px', borderTop: '1px solid var(--line)' }}>
              <span style={{ flexGrow: '1', fontSize: '15px', color: 'var(--ink2)' }}>Wed 16 Sep</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px' }}>78.4 kg</span>
              <button
                type="button"
                aria-label="Delete Wed 16 Sep weight entry"
                style={{
                  minWidth: '44px',
                  minHeight: '44px',
                  padding: '0 6px',
                  border: '0',
                  background: 'none',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'var(--danger)',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        </section>
        <AppearanceCard />
        <a
          href="#login"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '52px',
            borderRadius: '18px',
            border: '1px solid rgba(255,138,122,0.3)',
            fontSize: '15px',
            fontWeight: '500',
            color: 'var(--danger)',
          }}
        >
          Log out
        </a>
      </main>
      <nav
        aria-label="Main"
        style={{
          position: 'fixed',
          left: '16px',
          right: '16px',
          bottom: '22px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '68px',
          padding: '0 8px',
          borderRadius: '34px',
          border: '1px solid var(--line)',
          background: 'var(--nav)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 20px 40px -12px rgba(var(--k), calc(0.7 * var(--ka)))',
        }}
      >
        {(v.nav?.prof ?? []).map((i: any, $index: number) => (
          <Fragment key={$index}>
            <a
              href={i?.href}
              aria-label={i?.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '52px',
                height: '52px',
                borderRadius: '26px',
              }}
            >
              {i?.on ? (
                <>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      height: '52px',
                      padding: '0 18px 0 14px',
                      borderRadius: '26px',
                      background: 'var(--acc)',
                      color: 'var(--accInk)',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={i?.d} />
                    </svg>
                    {i?.label}
                  </span>
                </>
              ) : null}
              {i?.off ? (
                <>
                  <span style={{ display: 'flex', color: 'var(--ink3)' }}>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={i?.d} />
                    </svg>
                  </span>
                </>
              ) : null}
            </a>
          </Fragment>
        ))}
      </nav>
    </div>
  );
}
