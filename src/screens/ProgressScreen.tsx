// Generated from project/Gym Tracker.dc.html (#progress). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';

export function ProgressScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="progress"
      style={{ background: 'radial-gradient(140% 30% at 50% 0%, rgba(64,219,168,0.08), rgba(64,219,168,0) 60%), var(--bg)' }}
    >
      <main style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '16px 20px 124px' }}>
        <header style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
            <h1 style={{ margin: '0', fontSize: '34px', fontWeight: '300', lineHeight: '1.05', letterSpacing: '-0.035em' }}>Progress</h1>
            <p style={{ margin: '0', fontSize: '14px', color: 'var(--ink2)' }}>Tap a day to see or change it.</p>
          </div>
          <div style={{ position: 'relative', flexShrink: '0' }}>
            <button
              type="button"
              onClick={v.prog?.ddToggle}
              aria-haspopup="listbox"
              aria-expanded={v.prog?.ddOpen}
              aria-label={`Date range: ${v.prog?.ddLabel ?? ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                height: '32px',
                padding: '0 10px 0 12px',
                borderRadius: '16px',
                border: '1px solid var(--line)',
                background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                fontSize: '13px',
                fontWeight: '500',
                color: 'var(--ink)',
                cursor: 'pointer',
              }}
            >
              {v.prog?.ddLabel}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={css(`${v.prog?.ddChev ?? ''} color: var(--ink3); transition: transform 0.2s;`)}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>{' '}
            {v.prog?.ddOpen ? (
              <>
                <div
                  role="listbox"
                  aria-label="Date range"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 6px)',
                    right: '0',
                    zIndex: '30',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    minWidth: '150px',
                    padding: '5px',
                    borderRadius: '14px',
                    border: '1px solid var(--line)',
                    background: 'var(--pop)',
                    boxShadow: '0 16px 36px -12px rgba(var(--k), calc(0.7 * var(--ka)))',
                  }}
                >
                  {(v.prog?.ranges ?? []).map((r: any, $index: number) => (
                    <Fragment key={$index}>
                      <button
                        className="hover-9"
                        type="button"
                        role="option"
                        aria-selected={r?.on}
                        onClick={r?.pick}
                        style={css(
                          `${r?.style ?? ''} display: flex; align-items: center; justify-content: space-between; gap: 10px; height: 38px; padding: 0 10px 0 12px; border: 0; border-radius: 10px; font-size: 14px; text-align: left; cursor: pointer;`,
                        )}
                      >
                        {r?.label}
                        <span style={css(`${r?.tick ?? ''} display: flex; color: var(--accT);`)}>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12.5l4.5 4.5L19 7.5" />
                          </svg>
                        </span>
                      </button>
                    </Fragment>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </header>
        <section
          aria-label="Overview"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '16px 16px 18px',
            borderRadius: '28px',
            border: '1px solid var(--line)',
            background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <button
              type="button"
              onClick={v.prog?.prev}
              aria-label="Previous period"
              style={css(
                `${v.prog?.prevStyle ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; padding: 0; border: 1px solid var(--line); border-radius: 18px; background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); cursor: pointer;`,
              )}
            >
              <svg
                width="16"
                height="16"
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
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', textAlign: 'center' }}>
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink3)',
                }}
              >
                {v.prog?.periodName}
              </span>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>{v.prog?.rangeLabel}</span>
            </div>
            <button
              type="button"
              onClick={v.prog?.next}
              aria-label="Next period"
              style={css(
                `${v.prog?.nextStyle ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; padding: 0; border: 1px solid var(--line); border-radius: 18px; background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); cursor: pointer;`,
              )}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {v.prog?.isWeek ? (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '2px' }}>
                {(v.prog?.week ?? []).map((d: any, $index: number) => (
                  <Fragment key={$index}>
                    <button
                      type="button"
                      onClick={d?.pick}
                      aria-label={d?.aria}
                      aria-pressed={d?.on}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        minWidth: '0',
                        padding: '4px 0',
                        border: '0',
                        background: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <span
                        style={css(
                          `${d?.wdStyle ?? ''} font-family: 'Geist Mono', monospace; font-size: 10.5px; letter-spacing: 0.06em; text-transform: uppercase;`,
                        )}
                      >
                        {d?.wd}
                      </span>
                      <span
                        style={css(
                          `${d?.style ?? ''} display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 19px; font-size: 14px; font-weight: 600; font-variant-numeric: tabular-nums; transition: box-shadow 0.2s;`,
                        )}
                      >
                        {d?.num}
                      </span>
                      <span style={{ fontSize: '10.5px', color: 'var(--ink3)' }}>{d?.tag}</span>
                    </button>
                  </Fragment>
                ))}
              </div>
            </>
          ) : null}
          {v.prog?.isGrid ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div
                  aria-hidden="true"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                    gap: '6px',
                    textAlign: 'center',
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: '10.5px',
                    color: 'var(--ink3)',
                  }}
                >
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '6px' }}>
                  {(v.prog?.cells ?? []).map((c: any, $index: number) => (
                    <Fragment key={$index}>
                      {c?.blank ? (
                        <>
                          <span aria-hidden="true" />
                        </>
                      ) : null}{' '}
                      {c?.real ? (
                        <>
                          <button
                            type="button"
                            onClick={c?.pick}
                            aria-label={c?.aria}
                            aria-pressed={c?.on}
                            style={css(
                              `${c?.style ?? ''} display: flex; align-items: center; justify-content: center; width: 100%; padding: 0; border-radius: 10px; font-weight: 500; font-variant-numeric: tabular-nums; cursor: pointer; transition: box-shadow 0.2s;`,
                            )}
                          >
                            {c?.num}
                          </button>
                        </>
                      ) : null}
                    </Fragment>
                  ))}
                </div>
              </div>
            </>
          ) : null}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', fontSize: '12px', color: 'var(--ink2)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '5px', background: '#40DBA8' }} />
              Workout
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '5px', border: '1.5px dashed var(--ink3)' }} />
              Rest day
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '5px', background: '#FF6B57' }} />
              Missed
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
            {(v.prog?.stats ?? []).map((k: any, $index: number) => (
              <Fragment key={$index}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    minWidth: '0',
                    padding: '12px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF08',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#FFFFFF14',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: '10px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--ink3)',
                    }}
                  >
                    {k?.label}
                  </span>
                  <span
                    style={css(
                      `${k?.style ?? ''} font-size: 22px; font-weight: 300; line-height: 1.1; letter-spacing: -0.03em; font-variant-numeric: tabular-nums;`,
                    )}
                  >
                    {k?.value}
                  </span>
                  <span style={{ fontSize: '11.5px', lineHeight: '1.3', color: 'var(--ink3)' }}>{k?.sub}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section
          aria-label="Day details"
          aria-live="polite"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            padding: '18px',
            borderRadius: '28px',
            border: '1px solid rgba(64,219,168,0.25)',
            background: 'linear-gradient(160deg, rgba(64,219,168,0.10), rgba(64,219,168,0.01) 70%)',
            borderColor: '#40DBA840',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accT)',
                }}
              >
                {v.prog?.d?.rel}
              </span>
              <span style={{ fontSize: '22px', fontWeight: '400', letterSpacing: '-0.02em' }}>{v.prog?.d?.title}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {v.prog?.d?.view ? (
                <>
                  <button
                    type="button"
                    onClick={v.prog?.d?.edit}
                    style={{
                      minHeight: '36px',
                      padding: '0 14px',
                      borderRadius: '18px',
                      border: '1px solid var(--line)',
                      background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: 'var(--ink)',
                      cursor: 'pointer',
                    }}
                  >
                    Edit
                  </button>
                </>
              ) : null}
              <button
                type="button"
                onClick={v.prog?.d?.prev}
                aria-label="Previous day"
                style={css(
                  `${v.prog?.d?.prevStyle ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; padding: 0; border: 1px solid var(--line); border-radius: 18px; background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); cursor: pointer;`,
                )}
              >
                <svg
                  width="16"
                  height="16"
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
              </button>
              <button
                type="button"
                onClick={v.prog?.d?.next}
                aria-label="Next day"
                style={css(
                  `${v.prog?.d?.nextStyle ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; padding: 0; border: 1px solid var(--line); border-radius: 18px; background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); cursor: pointer;`,
                )}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          {v.prog?.d?.view ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '15px', fontWeight: '500' }}>{v.prog?.d?.splitName}</span>
                  <span
                    style={css(
                      `${v.prog?.d?.chipstyle ?? ''} padding: 4px 10px; border-radius: 10px; font-family: 'Geist Mono', monospace; font-size: 11px; letter-spacing: 0em; text-transform: uppercase; color: #DCCC2B; line-height: 10.95px; border-width: 1px; border-style: solid; border-color: #F0ECBE38; text-align: center`,
                    )}
                  >
                    {v.prog?.d?.chip}
                  </span>
                  {v.prog?.d?.edited ? (
                    <>
                      <span
                        style={{
                          marginLeft: 'auto',
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: '10.5px',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--ink3)',
                        }}
                      >
                        Edited
                      </span>
                    </>
                  ) : null}
                </div>
                {v.prog?.d?.hasEx ? (
                  <>
                    <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', margin: '0', padding: '0' }}>
                      {(v.prog?.d?.exercises ?? []).map((e: any, $index: number) => (
                        <Fragment key={$index}>
                          <li
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                              padding: '12px 0',
                              borderTop: '1px solid var(--line)',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--ink3)' }}>{e?.n}</span>
                              <span style={{ flexGrow: '1', minWidth: '0', fontSize: '15px', fontWeight: '500' }}>{e?.name}</span>
                              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11.5px', color: 'var(--ink2)' }}>
                                {e?.vol}
                              </span>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', paddingLeft: '26px' }}>
                              {(e?.sets ?? []).map((s: any, $index: number) => (
                                <Fragment key={$index}>
                                  <span
                                    style={css(
                                      `${s?.style ?? ''} padding: 3px 8px; border-radius: 8px; font-family: 'Geist Mono', monospace; font-size: 12px; font-variant-numeric: tabular-nums;`,
                                    )}
                                  >
                                    {s?.t}
                                  </span>
                                </Fragment>
                              ))}
                            </div>
                          </li>
                        </Fragment>
                      ))}
                    </ul>
                  </>
                ) : null}
                {v.prog?.d?.isCardio ? (
                  <>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '14px 0 2px',
                        borderTop: '1px solid var(--line)',
                      }}
                    >
                      <span style={{ fontSize: '15px', fontWeight: '500' }}>{v.prog?.d?.cardioName}</span>
                      <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '13px', color: 'var(--ink2)' }}>
                        {v.prog?.d?.cardioText}
                      </span>
                    </div>
                  </>
                ) : null}
                {v.prog?.d?.isRest ? (
                  <>
                    <p
                      style={{
                        margin: '0',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--line)',
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: 'var(--ink2)',
                      }}
                    >
                      Rest day. Recovery is part of the plan.
                    </p>
                  </>
                ) : null}
                {v.prog?.d?.isMissed ? (
                  <>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--line)',
                      }}
                    >
                      <span style={{ fontSize: '14px', color: 'var(--ink2)' }}>No workout logged for this day.</span>
                      <a href="#log-workout" style={{ flexShrink: '0', fontSize: '14px', fontWeight: '500', color: 'var(--accT)' }}>
                        Log it
                      </a>
                    </div>
                  </>
                ) : null}
                {v.prog?.d?.isToday ? (
                  <>
                    <a
                      href="#session"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '48px',
                        borderRadius: '16px',
                        background: 'var(--acc)',
                        color: 'var(--accInk)',
                        fontSize: '15px',
                        fontWeight: '600',
                      }}
                    >
                      {v.prog?.d?.todayCta}
                    </a>
                  </>
                ) : null}
              </div>
            </>
          ) : null}
          {v.prog?.d?.editing ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: '10.5px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--ink3)',
                    }}
                  >
                    Workout type
                  </span>
                  <div
                    role="group"
                    aria-label="Workout type"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
                      gap: '3px',
                      padding: '4px',
                      borderRadius: '16px',
                      border: '1px solid var(--line)',
                      background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                    }}
                  >
                    {(v.prog?.e?.types ?? []).map((ty: any, $index: number) => (
                      <Fragment key={$index}>
                        <button
                          type="button"
                          aria-pressed={ty?.on}
                          onClick={ty?.pick}
                          style={css(
                            `${ty?.style ?? ''} min-height: 40px; padding: 0; border: 0; border-radius: 12px; font-size: 13px; font-weight: 500; cursor: pointer;`,
                          )}
                        >
                          {ty?.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
                {v.prog?.e?.notRest ? (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <span
                        style={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: '10.5px',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'var(--ink3)',
                        }}
                      >
                        Did you work out?
                      </span>
                      <div
                        role="group"
                        aria-label="Status"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                          gap: '4px',
                          padding: '4px',
                          borderRadius: '16px',
                          border: '1px solid var(--line)',
                          background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                        }}
                      >
                        {(v.prog?.e?.statuses ?? []).map((sv: any, $index: number) => (
                          <Fragment key={$index}>
                            <button
                              type="button"
                              aria-pressed={sv?.on}
                              onClick={sv?.pick}
                              style={css(
                                `${sv?.style ?? ''} min-height: 40px; padding: 0; border: 0; border-radius: 12px; font-size: 13px; font-weight: 500; cursor: pointer;`,
                              )}
                            >
                              {sv?.label}
                            </button>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </>
                ) : null}
                {v.prog?.e?.showEx ? (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '10px' }}>
                        <span
                          style={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: '10.5px',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'var(--ink3)',
                          }}
                        >
                          Exercises done
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--ink3)' }}>From your {v.prog?.e?.planName} plan</span>
                      </div>
                      {(v.prog?.e?.exs ?? []).map((x: any, $index: number) => (
                        <Fragment key={$index}>
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked={x?.on}
                            onClick={x?.pick}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              minHeight: '46px',
                              padding: '0',
                              border: '0',
                              borderBottom: '1px solid var(--line)',
                              background: 'none',
                              textAlign: 'left',
                              cursor: 'pointer',
                            }}
                          >
                            <span
                              style={css(
                                `${x?.box ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 22px; height: 22px; border-radius: 7px; border-width: 1.5px; border-style: solid;`,
                              )}
                            >
                              {x?.on ? (
                                <>
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#02120C"
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
                            <span style={{ flexGrow: '1', minWidth: '0', fontSize: '15px' }}>{x?.name}</span>
                            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '12px', color: 'var(--ink3)' }}>{x?.sets}</span>
                          </button>
                        </Fragment>
                      ))}
                    </div>
                  </>
                ) : null}
                {v.prog?.e?.noPlan ? (
                  <>
                    <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5', color: 'var(--ink2)' }}>
                      Your {v.prog?.e?.planName} plan has no exercises yet. Add them on{' '}
                      <a href="#log-workout" style={{ color: 'var(--accT)' }}>
                        Log workout
                      </a>
                      .
                    </p>
                  </>
                ) : null}
                {v.prog?.e?.showDur ? (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                      <span
                        style={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: '10.5px',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'var(--ink3)',
                        }}
                      >
                        Duration
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          height: '40px',
                          borderRadius: '12px',
                          border: '1px solid var(--line)',
                          background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                        }}
                      >
                        <button
                          type="button"
                          onClick={v.prog?.e?.durDec}
                          aria-label="5 minutes less"
                          style={{
                            width: '40px',
                            height: '100%',
                            padding: '0',
                            border: '0',
                            background: 'none',
                            fontSize: '18px',
                            color: 'var(--ink2)',
                            cursor: 'pointer',
                          }}
                        >
                          −
                        </button>
                        <span style={{ minWidth: '64px', textAlign: 'center', fontSize: '15px', fontVariantNumeric: 'tabular-nums' }}>
                          {v.prog?.e?.dur} min
                        </span>
                        <button
                          type="button"
                          onClick={v.prog?.e?.durInc}
                          aria-label="5 minutes more"
                          style={{
                            width: '40px',
                            height: '100%',
                            padding: '0',
                            border: '0',
                            background: 'none',
                            fontSize: '18px',
                            color: 'var(--ink2)',
                            cursor: 'pointer',
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={v.prog?.e?.cancel}
                    style={{
                      flex: '1 1 0',
                      height: '48px',
                      border: '1px solid var(--line)',
                      borderRadius: '16px',
                      background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                      fontSize: '15px',
                      fontWeight: '500',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={v.prog?.e?.save}
                    style={{
                      flex: '1.4 1 0',
                      height: '48px',
                      border: '0',
                      borderRadius: '16px',
                      background: 'var(--acc)',
                      color: 'var(--accInk)',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    Save day
                  </button>
                </div>
                {v.prog?.e?.canReset ? (
                  <>
                    <button
                      type="button"
                      onClick={v.prog?.e?.reset}
                      style={{
                        alignSelf: 'center',
                        minHeight: '36px',
                        padding: '0 8px',
                        border: '0',
                        background: 'none',
                        fontSize: '13px',
                        fontWeight: '500',
                        color: 'var(--ink2)',
                        cursor: 'pointer',
                      }}
                    >
                      Undo my changes for this day
                    </button>
                  </>
                ) : null}
              </div>
            </>
          ) : null}
        </section>
        <section
          aria-label="Training volume"
          style={{
            padding: '18px 18px 14px',
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
            Training volume
          </div>{' '}
          <div style={{ marginTop: '2px', fontSize: '12px', color: 'var(--ink3)' }}>Reps × weight, per day. Tap a bar for details.</div>{' '}
          <div
            style={{
              marginTop: '10px',
              fontSize: '34px',
              fontWeight: '300',
              lineHeight: '1',
              letterSpacing: '-0.04em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {v.prog?.volTotal}
            <span style={{ fontSize: '14px', color: 'var(--ink2)' }}>kg total</span>
          </div>{' '}
          <div style={{ minHeight: '186px' }}>{v.prog?.volChart}</div>
        </section>
        <section
          aria-label="Daily protein"
          style={{
            padding: '18px 18px 14px',
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
            Daily protein
          </div>{' '}
          <div style={{ marginTop: '2px', fontSize: '12px', color: 'var(--ink3)' }}>Dashed line is your {v.prog?.target}g target.</div>{' '}
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px', marginTop: '10px' }}>
            <span
              style={{ fontSize: '34px', fontWeight: '300', lineHeight: '1', letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}
            >
              {v.prog?.avgP}
              <span style={{ fontSize: '14px', color: 'var(--ink2)' }}>g avg</span>
            </span>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '12px', color: 'var(--cyanT)' }}>{v.prog?.hitText}</span>
          </div>{' '}
          <div style={{ minHeight: '186px' }}>{v.prog?.protChart}</div>
        </section>
        <section
          aria-label="Body weight"
          style={{
            padding: '18px 18px 14px',
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
            Body weight
          </div>{' '}
          <div style={{ marginTop: '2px', fontSize: '12px', color: 'var(--ink3)' }}>Each point is a weigh-in.</div>{' '}
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px', marginTop: '10px' }}>
            <span
              style={{ fontSize: '34px', fontWeight: '300', lineHeight: '1', letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}
            >
              {v.prog?.wLatest}
              <span style={{ fontSize: '14px', color: 'var(--ink2)' }}>kg</span>
            </span>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '12px', color: 'var(--ink2)' }}>{v.prog?.wChange}</span>
          </div>{' '}
          <div style={{ minHeight: '186px' }}>{v.prog?.wtChart}</div>
        </section>
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
        {(v.nav?.prog ?? []).map((i: any, $index: number) => (
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
