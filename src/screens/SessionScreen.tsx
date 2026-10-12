// Generated from project/Gym Tracker.dc.html (#session). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';

export function SessionScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="session"
      style={{ background: 'radial-gradient(120% 45% at 50% 38%, rgba(64,219,168,0.12), rgba(64,219,168,0) 60%), var(--bg)' }}
    >
      <main style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '8px 20px 40px' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <a
            href="#dashboard"
            aria-label="Back to dashboard"
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: "'Geist Mono', monospace",
              fontSize: '12px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--accT)',
            }}
          >
            <span
              style={{ width: '7px', height: '7px', borderRadius: '4px', background: 'var(--acc)', boxShadow: '0 0 10px var(--acc)' }}
            />
            {v.ses?.tag}
          </div>
          <a
            href="#summary"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '44px',
              padding: '0 16px',
              borderRadius: '22px',
              border: '1px solid var(--line)',
              background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Finish
          </a>
        </header>
        <section
          aria-label="Current exercise"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '12px', textAlign: 'center' }}
        >
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '12px', color: 'var(--ink3)' }}>{v.ses?.pos}</span>
          <span style={{ fontSize: '28px', fontWeight: '400', letterSpacing: '-0.03em' }}>{v.ses?.exName}</span>
          {v.ses?.wasSkipped ? (
            <>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 9px',
                  borderRadius: '9px',
                  background: 'rgba(255,107,87,0.14)',
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--danger)',
                }}
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M7 7l10 10M17 7L7 17" />
                </svg>
                Skipped earlier
              </span>
            </>
          ) : null}
          <span style={{ fontSize: '15px', color: 'var(--ink2)' }}>{v.ses?.setLabel}</span>
        </section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
          <button
            type="button"
            onClick={v.ses?.openTimer}
            aria-label="Open rest timer"
            style={css(
              `${v.ses?.tmPillStyle ?? ''} display: flex; align-items: center; gap: 10px; min-width: 0; height: 58px; padding: 0 12px 0 14px; border-radius: 18px; border-width: 1.5px; border-style: solid; text-align: left; cursor: pointer; transition: background 0.2s, border-color 0.2s;`,
            )}
          >
            <span style={{ display: 'flex', flexShrink: '0' }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 8v5l3 2M9 2h6M12 2v3M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />
              </svg>
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: '1px', minWidth: '0' }}>
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  opacity: '0.75',
                  whiteSpace: 'nowrap',
                }}
              >
                {v.ses?.tmPillLabel}
              </span>
              <span style={{ fontSize: '17px', fontWeight: '500', letterSpacing: '-0.01em', color: 'var(--ink)' }}>{v.ses?.tmMini}</span>
            </span>
            {v.ses?.tmIdleCue ? (
              <>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0',
                    width: '26px',
                    height: '26px',
                    marginLeft: 'auto',
                    borderRadius: '13px',
                    border: '1.5px solid #40DBA8',
                    background: 'rgba(64,219,168,0.05)',
                    color: 'var(--accT)',
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 4.5v15l12.5-7.5z" />
                  </svg>
                </span>
              </>
            ) : null}
            {v.ses?.tmIdleCueOff ? (
              <>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0',
                    width: '30px',
                    height: '30px',
                    marginLeft: 'auto',
                    borderRadius: '15px',
                    background: 'rgba(var(--w), calc(0.08 * var(--wa)))',
                    color: 'var(--ink)',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 15l6-6 6 6" />
                  </svg>
                </span>
              </>
            ) : null}
          </button>
          <button
            type="button"
            onClick={v.ses?.openSW}
            aria-label="Open stopwatch"
            style={css(
              `${v.ses?.swPillStyle ?? ''} display: flex; align-items: center; gap: 10px; min-width: 0; height: 58px; padding: 0 12px 0 14px; border-radius: 18px; border-width: 1.5px; border-style: solid; text-align: left; cursor: pointer; transition: background 0.2s, border-color 0.2s;`,
            )}
          >
            <span style={{ display: 'flex', flexShrink: '0' }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 7v6M9 2h6M19 6l-1.5 1.5M20 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />
              </svg>
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: '1px', minWidth: '0' }}>
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  opacity: '0.75',
                  whiteSpace: 'nowrap',
                }}
              >
                {v.ses?.swPillLabel}
              </span>
              <span style={{ fontSize: '17px', fontWeight: '500', letterSpacing: '-0.01em', color: 'var(--ink)' }}>{v.ses?.swMini}</span>
            </span>
            {v.ses?.swIdleCue ? (
              <>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0',
                    width: '26px',
                    height: '26px',
                    marginLeft: 'auto',
                    borderRadius: '13px',
                    border: '1.5px solid #40DBA8',
                    background: 'rgba(64,219,168,0.05)',
                    color: 'var(--accT)',
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 4.5v15l12.5-7.5z" />
                  </svg>
                </span>
              </>
            ) : null}
            {v.ses?.swIdleCueOff ? (
              <>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0',
                    width: '30px',
                    height: '30px',
                    marginLeft: 'auto',
                    borderRadius: '15px',
                    background: 'rgba(var(--w), calc(0.08 * var(--wa)))',
                    color: 'var(--ink)',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 15l6-6 6 6" />
                  </svg>
                </span>
              </>
            ) : null}
          </button>
        </div>
        {v.ses?.isDone ? (
          <>
            <section
              aria-label="Exercise complete"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '18px',
                padding: '24px 20px 20px',
                borderRadius: '28px',
                border: '1px solid rgba(64,219,168,0.3)',
                background: 'linear-gradient(160deg, rgba(64,219,168,0.14), rgba(64,219,168,0.02) 70%)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '72px',
                  height: '72px',
                  borderRadius: '36px',
                  background: 'var(--acc)',
                  color: 'var(--accInk)',
                  boxShadow: '0 0 44px -6px rgba(64,219,168,0.7)',
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <div
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--accT)',
                  }}
                >
                  Exercise complete
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px', alignSelf: 'stretch' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: '10.5px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ink3)',
                    }}
                  >
                    Sets
                  </span>
                  <span style={{ fontSize: '24px', fontWeight: '300', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>
                    {v.ses?.setsDone}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: '10.5px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ink3)',
                    }}
                  >
                    Reps
                  </span>
                  <span style={{ fontSize: '24px', fontWeight: '300', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>
                    {v.ses?.repsDone}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: '10.5px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ink3)',
                    }}
                  >
                    Volume
                  </span>
                  <span style={{ fontSize: '24px', fontWeight: '300', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>
                    {v.ses?.volume}
                  </span>
                </div>
              </div>
            </section>
          </>
        ) : null}
        <section aria-label="Sets" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {(v.ses?.sets ?? []).map((s: any, $index: number) => (
            <Fragment key={$index}>
              <div
                style={css(
                  `display: flex; align-items: center; gap: 12px; min-height: 60px; transition: all 0.25s ease; ${s?.rowStyle ?? ''} padding: 0 8px 0 18px; border-radius: 18px; border-width: 1px; border-style: solid;`,
                )}
              >
                <span
                  style={{
                    flexShrink: '0',
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: '12px',
                    color: 'var(--ink3)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Set {s?.n}
                </span>
                <span
                  style={css(
                    `${s?.labelStyle ?? ''} flex-grow: 1; min-width: 0; font-size: 16px; font-variant-numeric: tabular-nums; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,
                  )}
                >
                  {s?.label}
                </span>
                {s?.current ? (
                  <>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 9px',
                        borderRadius: '10px',
                        background: 'rgba(64,219,168,0.16)',
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: '10.5px',
                        letterSpacing: '0.12em',
                        color: 'var(--accT)',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '3px',
                          background: 'var(--acc)',
                          boxShadow: '0 0 8px var(--acc)',
                        }}
                      />
                      {s?.badge}
                    </span>
                  </>
                ) : null}
                {s?.showRestart ? (
                  <>
                    <button
                      className="hover-4"
                      type="button"
                      onClick={s?.restart}
                      aria-label={`Restart set ${s?.n ?? ''}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        height: '40px',
                        padding: '0 12px',
                        border: '1px solid var(--line)',
                        borderRadius: '20px',
                        background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                        fontSize: '13px',
                        fontWeight: '500',
                        color: 'var(--ink)',
                        cursor: 'pointer',
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4" />
                      </svg>
                      Restart
                    </button>
                  </>
                ) : null}
                {s?.showCheck ? (
                  <>
                    <button
                      type="button"
                      onClick={s?.toggle}
                      aria-label={`Toggle set ${s?.n ?? ''}`}
                      aria-pressed={s?.done}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        border: '0',
                        background: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {s?.done ? (
                        <>
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '30px',
                              height: '30px',
                              borderRadius: '15px',
                              background: 'var(--acc)',
                              color: 'var(--accInk)',
                              boxShadow: '0 0 16px -2px rgba(64,219,168,0.6)',
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M5 12.5l4.5 4.5L19 7.5" />
                            </svg>
                          </span>
                        </>
                      ) : null}
                      {s?.todo ? (
                        <>
                          <span
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '15px',
                              border: '1.5px solid rgba(var(--w), calc(0.22 * var(--wa)))',
                            }}
                          />
                        </>
                      ) : null}
                    </button>
                  </>
                ) : null}
              </div>
            </Fragment>
          ))}
        </section>
        <button
          type="button"
          onClick={v.ses?.cta}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '56px',
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
          {v.ses?.ctaLabel}
        </button>
        {v.ses?.canSkip ? (
          <>
            <button
              className="hover-5"
              type="button"
              onClick={v.ses?.skip}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                minHeight: '44px',
                marginTop: '-6px',
                border: '0',
                background: 'none',
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--ink2)',
                cursor: 'pointer',
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 5l9 7-9 7zM18 5v14" />
              </svg>
              {v.ses?.skipLabel}
            </button>
          </>
        ) : null}
        {v.ses?.hasNext ? (
          <>
            <section
              aria-label="Up next"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '16px 18px',
                borderRadius: '20px',
                border: '1px dashed rgba(var(--w), calc(0.12 * var(--wa)))',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--ink3)',
                  }}
                >
                  Up next
                </span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{v.ses?.nextName}</span>
              </div>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '13px', color: 'var(--ink2)' }}>{v.ses?.nextDetail}</span>
            </section>
          </>
        ) : null}
      </main>
      <div style={css(`${v.ses?.layerStyle ?? ''} position: fixed; inset: 0; z-index: 20; overflow: hidden;`)}>
        <button
          type="button"
          onClick={v.ses?.closeClock}
          aria-label="Close"
          tabIndex={-1}
          style={css(
            `${v.ses?.scrimStyle ?? ''} position: absolute; inset: 0; padding: 0; border: 0; background: var(--scrim); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); cursor: default; transition: opacity 0.3s;`,
          )}
        />{' '}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Clock"
          style={css(
            `${v.ses?.sheetStyle ?? ''} position: absolute; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; border-radius: 32px 32px 0 0; border: 1px solid var(--line); border-bottom: 0; background: var(--pop); box-shadow: 0 -24px 60px -20px rgba(var(--k), calc(0.7 * var(--ka)));`,
          )}
        >
          <div
            onPointerDown={v.ses?.sheetDown}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              flexShrink: '0',
              padding: '10px 20px 6px',
              touchAction: 'none',
              cursor: 'grab',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                alignSelf: 'center',
                width: '40px',
                height: '5px',
                borderRadius: '3px',
                background: 'rgba(var(--w), calc(0.2 * var(--wa)))',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ fontSize: '20px', fontWeight: '400', letterSpacing: '-0.02em' }}>{v.ses?.sheetTitle}</span>
              <button
                type="button"
                onClick={v.ses?.closeClock}
                aria-label="Close"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  padding: '0',
                  border: '0',
                  borderRadius: '18px',
                  background: 'rgba(var(--w), calc(0.07 * var(--wa)))',
                  color: 'var(--ink2)',
                  cursor: 'pointer',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </div>
          <div style={{ padding: '4px 20px 34px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div
                role="tablist"
                aria-label="Clock mode"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: '4px',
                  padding: '4px',
                  borderRadius: '14px',
                  background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                }}
              >
                {(v.ses?.tabs ?? []).map((tb: any, $index: number) => (
                  <Fragment key={$index}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={tb?.on}
                      onClick={tb?.pick}
                      style={css(
                        `${tb?.style ?? ''} display: flex; align-items: center; justify-content: center; gap: 7px; min-height: 38px; border: 0; border-radius: 10px; font-size: 14px; font-weight: 500; cursor: pointer;`,
                      )}
                    >
                      {tb?.label}
                      <span
                        style={css(
                          `${tb?.dot ?? ''} width: 6px; height: 6px; border-radius: 3px; background: var(--acc); box-shadow: 0 0 8px var(--acc);`,
                        )}
                      />
                    </button>
                  </Fragment>
                ))}
              </div>
              {v.ses?.isSW ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '18px 0 4px' }}>{v.ses?.swDigits}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px' }}>
                      <button
                        type="button"
                        onClick={v.ses?.swLeft}
                        style={css(
                          `${v.ses?.swLeftStyle ?? ''} display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border: 0; border-radius: 40px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background 0.2s;`,
                        )}
                      >
                        {v.ses?.swLeftLabel}
                      </button>
                      <button
                        type="button"
                        onClick={v.ses?.swRight}
                        style={css(
                          `${v.ses?.swRightStyle ?? ''} display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border: 0; border-radius: 40px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background 0.2s;`,
                        )}
                      >
                        {v.ses?.swRightLabel}
                      </button>
                    </div>
                    {v.ses?.hasLaps ? (
                      <>
                        <ul aria-label="Laps" style={{ listStyle: 'none', margin: '0', padding: '0 4px' }}>
                          {(v.ses?.laps ?? []).map((lp: any, $index: number) => (
                            <Fragment key={$index}>
                              <li
                                style={css(
                                  `${lp?.style ?? ''} display: flex; align-items: center; justify-content: space-between; min-height: 40px; border-top: 1px solid var(--line); font-size: 14px;`,
                                )}
                              >
                                <span>Lap {lp?.n}</span>
                                <span style={{ fontFamily: "'Geist Mono', monospace", fontVariantNumeric: 'tabular-nums' }}>
                                  {lp?.time}
                                </span>
                              </li>
                            </Fragment>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}
              {v.ses?.isTM ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {v.ses?.tmIdle ? (
                      <>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '10px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                            <button
                              type="button"
                              onClick={v.ses?.tmMinus}
                              aria-label="15 seconds less"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '44px',
                                height: '44px',
                                border: '1px solid var(--line)',
                                borderRadius: '22px',
                                background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                fontSize: '13px',
                                fontWeight: '500',
                                color: 'var(--ink2)',
                                cursor: 'pointer',
                              }}
                            >
                              −15
                            </button>
                            <span
                              style={{
                                minWidth: '150px',
                                textAlign: 'center',
                                fontSize: '64px',
                                fontWeight: '200',
                                lineHeight: '1',
                                letterSpacing: '-0.04em',
                                fontVariantNumeric: 'tabular-nums',
                              }}
                            >
                              {v.ses?.tmSet}
                            </span>
                            <button
                              type="button"
                              onClick={v.ses?.tmPlus}
                              aria-label="15 seconds more"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '44px',
                                height: '44px',
                                border: '1px solid var(--line)',
                                borderRadius: '22px',
                                background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                fontSize: '13px',
                                fontWeight: '500',
                                color: 'var(--ink2)',
                                cursor: 'pointer',
                              }}
                            >
                              +15
                            </button>
                          </div>
                          <div role="group" aria-label="Presets" style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                            {(v.ses?.presets ?? []).map((pr: any, $index: number) => (
                              <Fragment key={$index}>
                                <button
                                  type="button"
                                  aria-pressed={pr?.on}
                                  onClick={pr?.pick}
                                  style={css(
                                    `${pr?.style ?? ''} min-width: 52px; min-height: 36px; padding: 0 10px; border-radius: 18px; border-width: 1px; border-style: solid; font-family: 'Geist Mono', monospace; font-size: 12px; cursor: pointer;`,
                                  )}
                                >
                                  {pr?.label}
                                </button>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : null}
                    {v.ses?.tmActive ? (
                      <>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>{v.ses?.tmFace}</div>
                      </>
                    ) : null}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px' }}>
                      <button
                        type="button"
                        onClick={v.ses?.tmLeft}
                        style={css(
                          `${v.ses?.tmLeftStyle ?? ''} display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border: 0; border-radius: 40px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background 0.2s;`,
                        )}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={v.ses?.tmRight}
                        style={css(
                          `${v.ses?.tmRightStyle ?? ''} display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border: 0; border-radius: 40px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background 0.2s;`,
                        )}
                      >
                        {v.ses?.tmRightLabel}
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
