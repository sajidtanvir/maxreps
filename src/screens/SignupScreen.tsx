// Generated from project/Gym Tracker.dc.html (#signup). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';

export function SignupScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="signup"
      style={{ background: 'radial-gradient(140% 55% at 50% 0%, rgba(64,219,168,0.10), rgba(64,219,168,0) 60%), var(--bg)' }}
    >
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '32px',
          minHeight: 'var(--screen-h)',
          padding: '8px 24px 40px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <a
            href="#welcome"
            aria-label="Back"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '22px',
              border: '1px solid var(--line)',
              background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </a>
          <header style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h1 style={{ margin: '0', fontSize: '42px', fontWeight: '300', lineHeight: '1.02', letterSpacing: '-0.04em' }}>
              Create your account
            </h1>
            <p style={{ margin: '0', fontSize: '16px', color: 'var(--ink2)' }}>Start tracking workouts and protein today.</p>
          </header>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                htmlFor="su-name"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink3)',
                }}
              >
                Name
              </label>
              <input
                className="focus-1"
                id="su-name"
                type="text"
                placeholder="Your name"
                value={v.su?.name ?? ''}
                onChange={v.su?.setName}
                style={{
                  width: '100%',
                  height: '56px',
                  padding: '0 18px',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                  background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                  fontSize: '16px',
                  outline: 'none',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                htmlFor="su-email"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink3)',
                }}
              >
                Email
              </label>
              <input
                className="focus-1"
                id="su-email"
                type="email"
                placeholder="you@example.com"
                value={v.su?.email ?? ''}
                onChange={v.su?.setEmail}
                style={{
                  width: '100%',
                  height: '56px',
                  padding: '0 18px',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                  background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                  fontSize: '16px',
                  outline: 'none',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                htmlFor="su-password"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink3)',
                }}
              >
                Password
              </label>
              <input
                className="focus-1"
                id="su-password"
                type="password"
                placeholder="At least 8 characters"
                value={v.su?.password ?? ''}
                onChange={v.su?.setPassword}
                style={{
                  width: '100%',
                  height: '56px',
                  padding: '0 18px',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                  background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                  fontSize: '16px',
                  outline: 'none',
                }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '4px', marginTop: '4px' }}>
                {(v.su?.bars ?? []).map((b: any, $index: number) => (
                  <Fragment key={$index}>
                    <span style={css(`${b?.style ?? ''} height: 3px; border-radius: 2px;`)} />
                  </Fragment>
                ))}
              </div>
              <span style={{ fontSize: '13px', color: 'var(--ink3)' }}>{v.su?.strength}</span>
            </div>
            <button
              type="button"
              onClick={v.su?.toggleTerms}
              aria-pressed={v.su?.terms}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minHeight: '44px',
                padding: '0',
                border: '0',
                background: 'none',
                textAlign: 'left',
                fontSize: '14px',
                color: 'var(--ink2)',
                cursor: 'pointer',
              }}
            >
              <span
                style={css(
                  `${v.su?.boxStyle ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 22px; height: 22px; border-radius: 7px; border-width: 1.5px; border-style: solid; color: #02120C;`,
                )}
              >
                {v.su?.terms ? (
                  <>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </>
                ) : null}
              </span>
              <span>I agree to the Terms and Privacy Policy</span>
            </button>
          </form>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <a
            href="#dashboard"
            style={css(
              `${v.su?.ctaStyle ?? ''} display: flex; align-items: center; justify-content: center; height: 56px; border-radius: 18px; background: var(--acc); color: var(--accInk); font-size: 16px; font-weight: 600; box-shadow: 0 10px 36px -10px rgba(64,219,168,0.6);`,
            )}
          >
            Create account
          </a>
          <a
            href="#login"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '44px',
              fontSize: '15px',
              fontWeight: '500',
              color: 'var(--ink2)',
            }}
          >
            Already have an account? <span style={{ marginLeft: '5px', color: 'var(--accT)' }}>Log in</span>
          </a>
        </div>
      </main>
    </div>
  );
}
