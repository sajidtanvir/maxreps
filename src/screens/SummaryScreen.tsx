// Generated from project/Gym Tracker.dc.html (#summary). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';

export function SummaryScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="summary"
      style={{ background: 'radial-gradient(120% 45% at 50% 12%, rgba(64,219,168,0.18), rgba(64,219,168,0) 60%), var(--bg)' }}
    >
      <main style={{ display: 'flex', flexDirection: 'column', gap: '16px', minHeight: 'var(--screen-h)', padding: '24px 20px 40px' }}>
        <header
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textAlign: 'center', paddingTop: '24px' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '96px',
              height: '96px',
              borderRadius: '48px',
              border: '1px solid rgba(64,219,168,0.4)',
              background: 'rgba(64,219,168,0.1)',
              boxShadow: '0 0 60px -6px rgba(64,219,168,0.55)',
              color: 'var(--accT)',
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </div>
          <span
            style={{
              marginTop: '14px',
              fontFamily: "'Geist Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--accT)',
            }}
          >
            Session complete
          </span>
          <h1 style={{ margin: '0', fontSize: '44px', fontWeight: '300', lineHeight: '1', letterSpacing: '-0.045em' }}>Leg Day</h1>
          <p style={{ margin: '0', fontSize: '15px', color: 'var(--ink2)' }}>Fri 2 Oct · 4 exercises</p>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px', marginTop: '12px' }}>
          <div
            style={{
              padding: '18px',
              borderRadius: '22px',
              border: '1px solid var(--line)',
              background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
            }}
          >
            <div
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '10.5px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink3)',
              }}
            >
              Duration
            </div>
            <div
              style={{
                marginTop: '8px',
                fontSize: '30px',
                fontWeight: '300',
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              52:10
            </div>
          </div>
          <div style={{ padding: '18px', borderRadius: '22px', border: '1px solid var(--line)', backgroundColor: '#FFFFFF08' }}>
            <div
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '10.5px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink3)',
              }}
            >
              Volume
            </div>
            <div
              style={{
                marginTop: '8px',
                fontSize: '30px',
                fontWeight: '300',
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              2,990
              <span style={{ fontSize: '14px', color: 'var(--ink2)' }}>kg</span>
            </div>
          </div>
          <div
            style={{
              padding: '18px',
              borderRadius: '22px',
              border: '1px solid var(--line)',
              background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
            }}
          >
            <div
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '10.5px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink3)',
              }}
            >
              Sets
            </div>
            <div
              style={{
                marginTop: '8px',
                fontSize: '30px',
                fontWeight: '300',
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              11
            </div>
          </div>
          <div
            style={{
              padding: '18px',
              borderRadius: '22px',
              border: '1px solid var(--line)',
              background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
            }}
          >
            <div
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '10.5px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink3)',
              }}
            >
              Streak
            </div>
            <div
              style={{
                marginTop: '8px',
                fontSize: '30px',
                fontWeight: '300',
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              5<span style={{ fontSize: '14px', color: 'var(--ink2)' }}>days</span>
            </div>
          </div>
        </div>
        <section
          aria-label="Personal record"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '18px 20px',
            borderRadius: '22px',
            border: '1px solid rgba(64,219,168,0.3)',
            background: 'linear-gradient(120deg, rgba(64,219,168,0.14), rgba(64,219,168,0.02))',
            borderColor: '#40DBA84D',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '10.5px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accT)',
              }}
            >
              New personal record
            </span>
            <span style={{ fontSize: '18px', fontWeight: '500' }}>Back Squat</span>
          </div>
          <span style={{ fontSize: '24px', fontWeight: '300', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>
            85 kg × 6
          </span>
        </section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
          <a
            href="#dashboard"
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
            Done
          </a>
          <a
            href="#progress"
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
            View progress
          </a>
        </div>
      </main>
    </div>
  );
}
