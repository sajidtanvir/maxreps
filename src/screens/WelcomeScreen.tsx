// Generated from project/Gym Tracker.dc.html (#welcome). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';

export function WelcomeScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="welcome"
      style={{ background: 'radial-gradient(140% 55% at 50% 0%, rgba(64,219,168,0.14), rgba(64,219,168,0) 62%), var(--bg)' }}
    >
      <main style={{ display: 'flex', flexDirection: 'column', minHeight: 'var(--screen-h)', padding: '12px 24px 40px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: "'Geist Mono', monospace",
            fontSize: '12px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--ink2)',
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '4px', background: 'var(--acc)', boxShadow: '0 0 12px var(--acc)' }} />
          Gym Progress
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', margin: '44px 0 36px' }}>
          <svg width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
            <circle cx="140" cy="140" r="120" stroke="rgba(var(--w), calc(0.06 * var(--wa)))" strokeWidth="12" />{' '}
            <circle cx="140" cy="140" r="100" stroke="rgba(var(--w), calc(0.06 * var(--wa)))" strokeWidth="12" />{' '}
            <circle cx="140" cy="140" r="80" stroke="rgba(var(--w), calc(0.06 * var(--wa)))" strokeWidth="12" />{' '}
            <circle
              cx="140"
              cy="140"
              r="120"
              stroke="#40DBA8"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="754 754"
              transform="rotate(-90 140 140)"
            />{' '}
            <circle
              cx="140"
              cy="140"
              r="100"
              stroke="#6CCBF5"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="333 628"
              transform="rotate(-90 140 140)"
            />{' '}
            <circle
              cx="140"
              cy="140"
              r="80"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="287 503"
              transform="rotate(-90 140 140)"
              style={{ stroke: 'var(--ink)' }}
            />
          </svg>
          <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '44px', fontWeight: '200', letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}>5/5</span>
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink3)',
              }}
            >
              This week
            </span>
          </div>
        </div>
        <h1 style={{ margin: '0', fontSize: '46px', fontWeight: '300', lineHeight: '1.02', letterSpacing: '-0.04em', textWrap: 'balance' }}>
          Every rep, measured.
        </h1>
        <p style={{ margin: '14px 0 0', fontSize: '16px', color: 'var(--ink2)', textWrap: 'pretty' }}>
          Log workouts, hit your daily protein target and keep your streak alive.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto', paddingTop: '32px' }}>
          <a
            href="#signup"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '56px',
              borderRadius: '18px',
              background: 'var(--acc)',
              color: 'var(--accInk)',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 10px 36px -10px rgba(64,219,168,0.6)',
            }}
          >
            Get started
          </a>
          <a
            href="#login"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '56px',
              borderRadius: '18px',
              border: '1px solid var(--line)',
              background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            I already have an account
          </a>
        </div>
      </main>
    </div>
  );
}
