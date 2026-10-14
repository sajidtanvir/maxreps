// Generated from project/Gym Tracker.dc.html (#login). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';

export function LoginScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="login"
      style={{ background: 'radial-gradient(140% 55% at 50% 0%, rgba(64,219,168,0.10), rgba(64,219,168,0) 60%), var(--bg)' }}
    >
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '40px',
          minHeight: 'var(--screen-h)',
          padding: '12px 24px 40px',
        }}
      >
        <header style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '64px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '20px',
              border: '1px solid rgba(64,219,168,0.3)',
              background: 'rgba(64,219,168,0.08)',
              boxShadow: '0 0 40px -6px rgba(64,219,168,0.45)',
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#40DBA8"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9.5v5M20.5 9.5v5M6.5 12h11" />
            </svg>
          </div>
          <h1 style={{ margin: '12px 0 0', fontSize: '42px', fontWeight: '300', lineHeight: '1.02', letterSpacing: '-0.04em' }}>
            Gym Progress
          </h1>
          <p style={{ margin: '0', fontSize: '16px', color: 'var(--ink2)' }}>{v.login?.subtitle}</p>
        </header>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              htmlFor="login-email"
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
              id="login-email"
              type="email"
              placeholder="you@example.com"
              value={v.login?.email ?? ''}
              onChange={v.login?.setEmail}
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
              htmlFor="login-password"
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
              id="login-password"
              type="password"
              placeholder="••••••••"
              value={v.login?.password ?? ''}
              onChange={v.login?.setPassword}
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
          <a
            href="#dashboard"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '56px',
              marginTop: '8px',
              borderRadius: '18px',
              background: 'var(--acc)',
              color: 'var(--accInk)',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 10px 36px -10px rgba(64,219,168,0.6)',
            }}
          >
            {v.login?.cta}
          </a>
          <a
            href="#signup"
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
            Don't have an account? <span style={{ marginLeft: '5px', color: 'var(--accT)' }}>Sign up</span>
          </a>
        </form>
      </main>
    </div>
  );
}
