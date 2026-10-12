// Generated from project/Gym Tracker.dc.html (#nutrition). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';

export function NutritionScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="nutrition"
      style={{ background: 'radial-gradient(140% 35% at 50% 0%, rgba(108,203,245,0.10), rgba(108,203,245,0) 60%), var(--bg)' }}
    >
      <main style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '16px 20px 124px' }}>
        <header style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
            <h1 style={{ margin: '0', fontSize: '34px', fontWeight: '300', lineHeight: '1.05', letterSpacing: '-0.035em' }}>Nutrition</h1>
            <p style={{ margin: '0', fontSize: '14px', color: 'var(--ink2)' }}>{v.nx?.headSub}</p>
          </div>
          <button
            type="button"
            onClick={v.nx?.openQuiz}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexShrink: '0',
              minHeight: '40px',
              padding: '0 14px',
              border: '1px solid rgba(64,219,168,0.35)',
              borderRadius: '20px',
              background: 'rgba(64,219,168,0.08)',
              fontSize: '13px',
              fontWeight: '500',
              color: 'var(--accT)',
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
              aria-hidden="true"
            >
              <path d="M4 7h10M18 7h2M4 17h4M12 17h8M16 5v4M10 15v4" />
            </svg>
            {v.nx?.quizBtn}
          </button>
        </header>
        <a
          href="#diet"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '16px 16px 16px 18px',
            borderRadius: '24px',
            border: '1px solid rgba(64,219,168,0.3)',
            background: 'linear-gradient(120deg, rgba(64,219,168,0.14), rgba(64,219,168,0.02))',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: '0',
              width: '44px',
              height: '44px',
              borderRadius: '22px',
              background: 'rgba(64,219,168,0.16)',
              color: 'var(--accT)',
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 3.5h8a2 2 0 0 1 2 2v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-14a2 2 0 0 1 2-2zM9.5 8.5h5M9.5 12h5M9.5 15.5h3" />
            </svg>
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '10.5px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accT)',
              }}
            >
              Diet plan
            </span>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>{v.diet?.entryTitle}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
              <span
                style={{
                  flexGrow: '1',
                  height: '6px',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  background: 'rgba(var(--w), calc(0.08 * var(--wa)))',
                }}
              >
                <span
                  style={css(
                    `${v.nx?.dpBar ?? ''} display: block; height: 100%; border-radius: 3px; background: #40DBA8; box-shadow: 0 0 10px -2px rgba(64,219,168,0.7); transition: width 0.8s cubic-bezier(.2,.8,.2,1);`,
                  )}
                />
              </span>
              <span style={{ flexShrink: '0', fontFamily: "'Geist Mono', monospace", fontSize: '12px', color: 'var(--accT)' }}>
                {v.nx?.dpPct}
              </span>
            </span>
            <span style={{ fontSize: '12.5px', color: 'var(--ink2)', whiteSpace: 'nowrap' }}>{v.nx?.dpText}</span>
          </span>
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
            style={{ flexShrink: '0', color: 'var(--ink3)' }}
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </a>
        {v.nx?.noProfile ? (
          <>
            <section
              aria-label="Set up nutrition"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '30px 20px 22px',
                borderRadius: '28px',
                border: '1px dashed rgba(64,219,168,0.35)',
                background: 'rgba(64,219,168,0.05)',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '30px',
                  border: '1px solid rgba(64,219,168,0.35)',
                  background: 'rgba(64,219,168,0.1)',
                  color: 'var(--accT)',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l1.8 4.9L18.5 9.7l-4.7 1.8L12 16.4l-1.8-4.9L5.5 9.7l4.7-1.8zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
                </svg>
              </span>
              <span style={{ marginTop: '4px', fontSize: '20px', fontWeight: '400', letterSpacing: '-0.02em' }}>
                Get your daily targets
              </span>
              <span style={{ maxWidth: '270px', fontSize: '14px', lineHeight: '1.5', color: 'var(--ink2)', textWrap: 'pretty' }}>
                Answer 5 quick questions. We'll work out your calories, protein, carbs and fat, then suggest local foods to hit them.
              </span>
              <button
                type="button"
                onClick={v.nx?.openQuiz}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  height: '54px',
                  border: '0',
                  borderRadius: '18px',
                  background: 'var(--acc)',
                  color: 'var(--accInk)',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: '0 10px 36px -10px rgba(64,219,168,0.6)',
                  cursor: 'pointer',
                  alignSelf: 'stretch',
                  marginTop: '10px',
                }}
              >
                Start
              </button>
            </section>
          </>
        ) : null}
        {v.nx?.hasProfile ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <section
                aria-label="Today's nutrition"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  padding: '20px',
                  borderRadius: '28px',
                  border: '1px solid var(--line)',
                  background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: '10.5px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--ink3)',
                    }}
                  >
                    {v.nx?.dayLbl}
                  </span>
                  <span
                    style={css(
                      `${v.nx?.todayPillStyle ?? ''} padding: 4px 10px; border-radius: 10px; font-family: 'Geist Mono', monospace; font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; white-space: nowrap;`,
                    )}
                  >
                    {v.nx?.todayPill}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span
                          style={{
                            fontSize: '44px',
                            fontWeight: '200',
                            lineHeight: '1',
                            letterSpacing: '-0.045em',
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        >
                          {v.nx?.kcal}
                        </span>
                        <span style={{ fontSize: '14px', color: 'var(--ink2)' }}>kcal eaten</span>
                      </div>
                      <span style={{ fontSize: '12.5px', color: 'var(--ink3)' }}>Daily goal: eat {v.nx?.kcalT} kcal</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <span style={{ fontSize: '18px', fontWeight: '400', fontVariantNumeric: 'tabular-nums' }}>{v.nx?.kcalLeft}</span>
                      <span style={{ fontSize: '12px', color: 'var(--ink3)' }}>{v.nx?.kcalLeftLbl}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      height: '10px',
                      borderRadius: '5px',
                      overflow: 'hidden',
                      background: 'rgba(var(--w), calc(0.07 * var(--wa)))',
                    }}
                  >
                    <div
                      style={css(
                        `${v.nx?.kcalBar ?? ''} height: 100%; border-radius: 5px; background: linear-gradient(90deg, #2FBF8E, #40DBA8); box-shadow: 0 0 14px -2px rgba(64,219,168,0.7); transition: width 0.8s cubic-bezier(.2,.8,.2,1);`,
                      )}
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
                  {(v.nx?.macros ?? []).map((m: any, $index: number) => (
                    <Fragment key={$index}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          minWidth: '0',
                          padding: '12px 10px',
                          borderRadius: '16px',
                          background: 'rgba(var(--k), calc(0.22 * var(--ka)))',
                          border: '1px solid var(--line)',
                        }}
                      >
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: '10px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--ink3)',
                          }}
                        >
                          <span style={css(`${m?.dot ?? ''} width: 7px; height: 7px; border-radius: 4px;`)} />
                          {m?.label}
                        </span>
                        <span
                          style={{
                            fontSize: '18px',
                            fontWeight: '400',
                            letterSpacing: '-0.02em',
                            fontVariantNumeric: 'tabular-nums',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {m?.val}
                          <span style={{ fontSize: '11px', color: 'var(--ink3)' }}>/{m?.tgt}g</span>
                        </span>
                        <div
                          style={{
                            height: '5px',
                            borderRadius: '3px',
                            overflow: 'hidden',
                            background: 'rgba(var(--w), calc(0.07 * var(--wa)))',
                          }}
                        >
                          <div
                            style={css(
                              `${m?.bar ?? ''} height: 100%; border-radius: 3px; transition: width 0.8s cubic-bezier(.2,.8,.2,1);`,
                            )}
                          />
                        </div>
                        <span style={{ fontSize: '12px', color: 'var(--ink2)' }}>{m?.left}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </section>
              <section
                aria-label="Daily meal plan"
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
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                    <span
                      style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: '14px',
                        letterSpacing: '0em',
                        textTransform: 'uppercase',
                        color: 'var(--ink3)',
                        textAlign: 'left',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {v.nx?.mealsTitle}
                    </span>
                    <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--ink3)', whiteSpace: 'nowrap' }}>
                      {v.nx?.planSum}
                    </span>
                  </div>
                  <a
                    href="#diet"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexShrink: '0',
                      minHeight: '34px',
                      padding: '0 12px',
                      borderRadius: '17px',
                      border: '1px solid var(--line)',
                      background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: 'var(--ink)',
                    }}
                  >
                    {v.nx?.editPlanLabel}
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
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                {v.nx?.noPlan ? (
                  <>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '24px 16px 18px',
                        borderRadius: '20px',
                        border: '1px dashed rgba(64,219,168,0.32)',
                        background: 'rgba(64,219,168,0.04)',
                        textAlign: 'center',
                      }}
                    >
                      <span style={{ fontSize: '17px', fontWeight: '500' }}>No meal plan yet</span>
                      <span style={{ maxWidth: '250px', fontSize: '13px', lineHeight: '1.5', color: 'var(--ink2)', textWrap: 'pretty' }}>
                        Make a plan once and your meals show up here every day.
                      </span>
                      <a
                        href="#diet"
                        onClick={v.nx?.createPlan}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          alignSelf: 'stretch',
                          height: '50px',
                          marginTop: '8px',
                          borderRadius: '16px',
                          background: 'var(--acc)',
                          color: 'var(--accInk)',
                          fontSize: '15px',
                          fontWeight: '600',
                          boxShadow: '0 10px 30px -10px rgba(64,219,168,0.6)',
                        }}
                      >
                        Create plan
                      </a>
                      <button
                        type="button"
                        onClick={v.nx?.emptyPlan}
                        style={{
                          minHeight: '40px',
                          padding: '0 12px',
                          border: '0',
                          background: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: 'var(--ink2)',
                          cursor: 'pointer',
                        }}
                      >
                        or just log what you eat
                      </button>
                    </div>
                  </>
                ) : null}
                <div
                  role="tablist"
                  aria-label="Choose a day"
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '4px' }}
                >
                  {(v.nx?.dates ?? []).map((d: any, $index: number) => (
                    <Fragment key={$index}>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={d?.on}
                        onClick={d?.pick}
                        style={css(
                          `${d?.style ?? ''} display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 8px 0 7px; border-radius: 14px; border-width: 1px; border-style: solid; cursor: pointer; transition: all 0.15s;`,
                        )}
                      >
                        <span
                          style={css(
                            `${d?.wdStyle ?? ''} font-family: 'Geist Mono', monospace; font-size: 9.5px; letter-spacing: 0.04em; text-transform: uppercase;`,
                          )}
                        >
                          {d?.wd}
                        </span>
                        <span style={{ fontSize: '16px', fontWeight: '500', fontVariantNumeric: 'tabular-nums' }}>{d?.num}</span>
                        <span style={css(`${d?.dot ?? ''} width: 5px; height: 5px; border-radius: 3px;`)} />
                      </button>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {(v.nx?.mealList ?? []).map((ml: any, $index: number) => (
                    <Fragment key={$index}>
                      <div
                        style={{
                          position: 'relative',
                          borderRadius: '20px',
                          border: '1px solid var(--line)',
                          background: 'rgba(var(--k), calc(0.18 * var(--ka)))',
                        }}
                      >
                        <button
                          type="button"
                          onClick={ml?.toggle}
                          aria-expanded={ml?.open}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            width: '100%',
                            minHeight: '62px',
                            padding: '10px 14px',
                            border: '0',
                            background: 'none',
                            textAlign: 'left',
                            cursor: 'pointer',
                          }}
                        >
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '7px', flexGrow: '1', minWidth: '0' }}>
                            <span style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px' }}>
                              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '10.5px', color: 'var(--ink3)' }}>
                                  {ml?.time}
                                </span>
                                <span
                                  style={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                  }}
                                >
                                  {ml?.name}
                                </span>
                              </span>
                              <span
                                style={{
                                  fontFamily: "'Geist Mono', monospace",
                                  fontSize: '11px',
                                  color: 'var(--ink2)',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {ml?.kcal}
                              </span>
                            </span>
                            <span
                              style={{
                                display: 'block',
                                height: '4px',
                                borderRadius: '2px',
                                overflow: 'hidden',
                                background: 'rgba(var(--w), calc(0.07 * var(--wa)))',
                              }}
                            >
                              <span
                                style={css(
                                  `${ml?.bar ?? ''} display: block; height: 100%; border-radius: 2px; background: #40DBA8; transition: width 0.6s cubic-bezier(.2,.8,.2,1);`,
                                )}
                              />
                            </span>
                          </span>
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: '0',
                              width: '30px',
                              height: '30px',
                              borderRadius: '15px',
                              background: 'rgba(var(--w), calc(0.05 * var(--wa)))',
                              color: 'var(--ink2)',
                            }}
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
                              style={css(`${ml?.chev ?? ''} transition: transform 0.2s;`)}
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                        </button>{' '}
                        {ml?.open ? (
                          <>
                            <div style={{ display: 'flex', flexDirection: 'column', padding: '0 14px 14px' }}>
                              {ml?.empty ? (
                                <>
                                  <p style={{ margin: '0 0 10px', fontSize: '13px', color: 'var(--ink3)' }}>No foods in this meal yet.</p>
                                </>
                              ) : null}
                              {(ml?.items ?? []).map((li: any, $index: number) => (
                                <Fragment key={$index}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '8px',
                                      minHeight: '56px',
                                      borderTop: '1px solid var(--line)',
                                    }}
                                  >
                                    <button
                                      type="button"
                                      role="checkbox"
                                      aria-checked={li?.eaten}
                                      aria-label={`Mark ${li?.name ?? ''} as eaten`}
                                      onClick={li?.toggle}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: '0',
                                        width: '36px',
                                        height: '44px',
                                        marginLeft: '-8px',
                                        padding: '0',
                                        border: '0',
                                        background: 'none',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <span
                                        style={css(
                                          `${li?.box ?? ''} display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 7px; border-width: 1.5px; border-style: solid; transition: all 0.15s;`,
                                        )}
                                      >
                                        {li?.eaten ? (
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
                                    </button>
                                    <div
                                      style={css(
                                        `${li?.textStyle ?? ''} display: flex; flex-direction: column; gap: 2px; flex-grow: 1; min-width: 0;`,
                                      )}
                                    >
                                      <span
                                        style={{ fontSize: '14.5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                      >
                                        {li?.name}
                                      </span>
                                      <span
                                        style={{
                                          fontFamily: "'Geist Mono', monospace",
                                          fontSize: '10.5px',
                                          color: 'var(--ink3)',
                                          whiteSpace: 'nowrap',
                                          overflow: 'hidden',
                                          textOverflow: 'ellipsis',
                                        }}
                                      >
                                        {li?.macro}
                                      </span>
                                    </div>
                                    <div
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexShrink: '0',
                                        height: '32px',
                                        borderRadius: '10px',
                                        border: '1px solid var(--line)',
                                      }}
                                    >
                                      <button
                                        type="button"
                                        onClick={li?.dec}
                                        aria-label={`Less ${li?.name ?? ''}`}
                                        style={{
                                          width: '28px',
                                          height: '100%',
                                          padding: '0',
                                          border: '0',
                                          background: 'none',
                                          fontSize: '16px',
                                          color: 'var(--ink2)',
                                          cursor: 'pointer',
                                        }}
                                      >
                                        −
                                      </button>
                                      <span
                                        style={{
                                          minWidth: '22px',
                                          textAlign: 'center',
                                          fontSize: '12.5px',
                                          fontVariantNumeric: 'tabular-nums',
                                        }}
                                      >
                                        {li?.qty}
                                      </span>
                                      <button
                                        type="button"
                                        onClick={li?.inc}
                                        aria-label={`More ${li?.name ?? ''}`}
                                        style={{
                                          width: '28px',
                                          height: '100%',
                                          padding: '0',
                                          border: '0',
                                          background: 'none',
                                          fontSize: '16px',
                                          color: 'var(--ink2)',
                                          cursor: 'pointer',
                                        }}
                                      >
                                        +
                                      </button>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={li?.remove}
                                      aria-label={`Remove ${li?.name ?? ''}`}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: '0',
                                        width: '30px',
                                        height: '32px',
                                        padding: '0',
                                        border: '0',
                                        background: 'none',
                                        color: 'var(--danger)',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        aria-hidden="true"
                                      >
                                        <path d="M7 7l10 10M17 7L7 17" />
                                      </svg>
                                    </button>
                                  </div>
                                </Fragment>
                              ))}
                              <button
                                type="button"
                                onClick={ml?.ideas}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '8px',
                                  height: '46px',
                                  marginTop: '6px',
                                  border: '1px solid rgba(108,203,245,0.3)',
                                  borderRadius: '14px',
                                  background: 'rgba(108,203,245,0.05)',
                                  fontSize: '14px',
                                  fontWeight: '500',
                                  color: 'var(--cyanT)',
                                  cursor: 'pointer',
                                }}
                              >
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.9"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <path d="M12 3l1.8 4.9L18.5 9.7l-4.7 1.8L12 16.4l-1.8-4.9L5.5 9.7l4.7-1.8zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
                                </svg>
                                AI ideas for food
                              </button>
                            </div>
                          </>
                        ) : null}{' '}
                        {ml?.popOpen ? (
                          <>
                            <div
                              role="dialog"
                              aria-label={`Food ideas for ${ml?.name ?? ''}`}
                              style={{
                                position: 'absolute',
                                left: '-6px',
                                right: '-6px',
                                top: '56px',
                                zIndex: '30',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                                padding: '16px',
                                borderRadius: '22px',
                                border: '1px solid rgba(108,203,245,0.32)',
                                background: 'var(--pop)',
                                boxShadow: '0 30px 60px -16px rgba(var(--k), calc(0.85 * var(--ka)))',
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                                  <span
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '6px',
                                      fontFamily: "'Geist Mono', monospace",
                                      fontSize: '10.5px',
                                      letterSpacing: '0.14em',
                                      textTransform: 'uppercase',
                                      color: 'var(--cyanT)',
                                    }}
                                  >
                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.9"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      aria-hidden="true"
                                    >
                                      <path d="M12 3l1.8 4.9L18.5 9.7l-4.7 1.8L12 16.4l-1.8-4.9L5.5 9.7l4.7-1.8zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
                                    </svg>
                                    Ideas for {ml?.name}
                                  </span>
                                  <span style={{ fontSize: '13px', lineHeight: '1.45', color: 'var(--ink2)', textWrap: 'pretty' }}>
                                    {v.nx?.popSub}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={v.nx?.popClose}
                                  aria-label="Close"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: '0',
                                    width: '34px',
                                    height: '34px',
                                    padding: '0',
                                    border: '1px solid var(--line)',
                                    borderRadius: '17px',
                                    background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
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
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    aria-hidden="true"
                                  >
                                    <path d="M7 7l10 10M17 7L7 17" />
                                  </svg>
                                </button>
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                {(v.nx?.popItems ?? []).map((pi: any, $index: number) => (
                                  <Fragment key={$index}>
                                    <button
                                      type="button"
                                      role="checkbox"
                                      aria-checked={pi?.on}
                                      onClick={pi?.toggle}
                                      style={css(
                                        `${pi?.style ?? ''} display: flex; align-items: center; gap: 10px; width: 100%; padding: 10px 12px; border-radius: 14px; border-width: 1.5px; border-style: solid; text-align: left; cursor: pointer; transition: all 0.15s;`,
                                      )}
                                    >
                                      <span
                                        style={css(
                                          `${pi?.box ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 20px; height: 20px; border-radius: 6px; border-width: 1.5px; border-style: solid;`,
                                        )}
                                      >
                                        {pi?.on ? (
                                          <>
                                            <svg
                                              width="12"
                                              height="12"
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
                                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: '0' }}>
                                          <span
                                            style={{
                                              fontSize: '14px',
                                              fontWeight: '500',
                                              whiteSpace: 'nowrap',
                                              overflow: 'hidden',
                                              textOverflow: 'ellipsis',
                                            }}
                                          >
                                            {pi?.name}
                                          </span>
                                          {pi?.ai ? (
                                            <>
                                              <span
                                                style={{
                                                  flexShrink: '0',
                                                  padding: '2px 6px',
                                                  borderRadius: '6px',
                                                  background: 'rgba(108,203,245,0.12)',
                                                  fontFamily: "'Geist Mono', monospace",
                                                  fontSize: '9.5px',
                                                  letterSpacing: '0.08em',
                                                  color: 'var(--cyanT)',
                                                }}
                                              >
                                                AI
                                              </span>
                                            </>
                                          ) : null}
                                        </span>
                                        <span style={{ fontSize: '12px', color: 'var(--accT)' }}>{pi?.why}</span>
                                        <span
                                          style={{
                                            fontFamily: "'Geist Mono', monospace",
                                            fontSize: '10.5px',
                                            color: 'var(--ink3)',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                          }}
                                        >
                                          {pi?.macro}
                                        </span>
                                      </span>
                                    </button>
                                  </Fragment>
                                ))}
                                {v.nx?.popLoading ? (
                                  <>
                                    <div
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '8px 4px',
                                        fontSize: '13px',
                                        color: 'var(--ink2)',
                                      }}
                                    >
                                      <span
                                        style={{
                                          width: '7px',
                                          height: '7px',
                                          borderRadius: '4px',
                                          background: '#6CCBF5',
                                          boxShadow: '0 0 10px #6CCBF5',
                                        }}
                                      />
                                      Asking AI for more ideas…
                                    </div>
                                  </>
                                ) : null}
                                {v.nx?.popErr ? (
                                  <>
                                    <span style={{ padding: '4px', fontSize: '12.5px', color: 'var(--ink3)' }}>
                                      AI ideas aren't available right now.
                                    </span>
                                  </>
                                ) : null}
                              </div>
                              <input
                                className="focus-2"
                                type="text"
                                placeholder="Or search a food, e.g. dal, egg"
                                aria-label="Search food"
                                value={v.nx?.popQ ?? ''}
                                onChange={v.nx?.setPopQ}
                                style={{
                                  width: '100%',
                                  height: '46px',
                                  padding: '0 14px',
                                  borderRadius: '14px',
                                  border: '1px solid var(--line)',
                                  background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                                  fontSize: '14px',
                                  outline: 'none',
                                }}
                              />
                              {v.nx?.popHasRes ? (
                                <>
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    {(v.nx?.popRes ?? []).map((pr: any, $index: number) => (
                                      <Fragment key={$index}>
                                        <button
                                          type="button"
                                          role="checkbox"
                                          aria-checked={pr?.on}
                                          onClick={pr?.toggle}
                                          style={css(
                                            `${pr?.style ?? ''} display: flex; align-items: center; gap: 10px; width: 100%; padding: 10px 12px; border-radius: 14px; border-width: 1.5px; border-style: solid; text-align: left; cursor: pointer; transition: all 0.15s;`,
                                          )}
                                        >
                                          <span
                                            style={css(
                                              `${pr?.box ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 20px; height: 20px; border-radius: 6px; border-width: 1.5px; border-style: solid;`,
                                            )}
                                          >
                                            {pr?.on ? (
                                              <>
                                                <svg
                                                  width="12"
                                                  height="12"
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
                                          <span
                                            style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}
                                          >
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: '0' }}>
                                              <span
                                                style={{
                                                  fontSize: '14px',
                                                  fontWeight: '500',
                                                  whiteSpace: 'nowrap',
                                                  overflow: 'hidden',
                                                  textOverflow: 'ellipsis',
                                                }}
                                              >
                                                {pr?.name}
                                              </span>
                                              {pr?.ai ? (
                                                <>
                                                  <span
                                                    style={{
                                                      flexShrink: '0',
                                                      padding: '2px 6px',
                                                      borderRadius: '6px',
                                                      background: 'rgba(108,203,245,0.12)',
                                                      fontFamily: "'Geist Mono', monospace",
                                                      fontSize: '9.5px',
                                                      letterSpacing: '0.08em',
                                                      color: 'var(--cyanT)',
                                                    }}
                                                  >
                                                    AI
                                                  </span>
                                                </>
                                              ) : null}
                                            </span>
                                            <span style={{ fontSize: '12px', color: 'var(--accT)' }}>{pr?.why}</span>
                                            <span
                                              style={{
                                                fontFamily: "'Geist Mono', monospace",
                                                fontSize: '10.5px',
                                                color: 'var(--ink3)',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                              }}
                                            >
                                              {pr?.macro}
                                            </span>
                                          </span>
                                        </button>
                                      </Fragment>
                                    ))}
                                  </div>
                                </>
                              ) : null}
                              {v.nx?.popCanSave ? (
                                <>
                                  <button
                                    type="button"
                                    role="checkbox"
                                    aria-checked={v.nx?.popSave}
                                    onClick={v.nx?.togglePopSave}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '10px',
                                      minHeight: '40px',
                                      padding: '0',
                                      border: '0',
                                      background: 'none',
                                      textAlign: 'left',
                                      fontSize: '13.5px',
                                      color: 'var(--ink2)',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <span
                                      style={css(
                                        `${v.nx?.popSaveBox ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 20px; height: 20px; border-radius: 6px; border-width: 1.5px; border-style: solid;`,
                                      )}
                                    >
                                      {v.nx?.popSave ? (
                                        <>
                                          <svg
                                            width="12"
                                            height="12"
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
                                    Also save to my plan
                                  </button>
                                </>
                              ) : null}
                              <div style={{ display: 'flex', gap: '8px' }}>
                                <button
                                  type="button"
                                  onClick={v.nx?.popClose}
                                  style={{
                                    flex: '1 1 0',
                                    height: '50px',
                                    border: '1px solid var(--line)',
                                    borderRadius: '16px',
                                    background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: 'var(--ink)',
                                    cursor: 'pointer',
                                  }}
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  onClick={v.nx?.popAdd}
                                  style={css(
                                    `${v.nx?.popAddStyle ?? ''} flex: 2 1 0; height: 50px; border: 0; border-radius: 16px; background: var(--acc); color: var(--accInk); font-size: 15px; font-weight: 600; box-shadow: 0 10px 30px -10px rgba(64,219,168,0.6); cursor: pointer;`,
                                  )}
                                >
                                  {v.nx?.popAddLabel}
                                </button>
                              </div>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </section>
              <section
                aria-label="Nutrition analytics"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '20px',
                  borderRadius: '28px',
                  border: '1px solid var(--line)',
                  background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: '10.5px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--ink3)',
                    }}
                  >
                    Last 7 days
                  </span>
                  <span
                    style={css(
                      `${v.nx?.wkStyle ?? ''} padding: 4px 10px; border-radius: 10px; font-family: 'Geist Mono', monospace; font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; white-space: nowrap;`,
                    )}
                  >
                    {v.nx?.wkStatus}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '26px', fontWeight: '300', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>
                    {v.nx?.wkPace}
                  </span>
                  <span style={{ fontSize: '13px', lineHeight: '1.45', color: 'var(--ink2)', textWrap: 'pretty' }}>{v.nx?.wkSub}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    background: 'rgba(var(--k), calc(0.22 * var(--ka)))',
                  }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap' }}>{v.nx?.selLabel}</span>
                  <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '12px', color: 'var(--ink2)', whiteSpace: 'nowrap' }}>
                    {v.nx?.selVal}
                  </span>
                </div>
                <div style={{ position: 'relative', height: '132px', marginTop: '4px' }}>
                  <div
                    aria-hidden="true"
                    style={css(
                      `${v.nx?.tgtLine ?? ''} position: absolute; left: 0; right: 0; border-top: 1.5px dashed rgba(var(--w), calc(0.28 * var(--wa))); transition: bottom 0.6s;`,
                    )}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        right: '0',
                        top: '-18px',
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: '10px',
                        color: 'var(--ink3)',
                      }}
                    >
                      Target {v.nx?.kcalT}
                    </span>
                  </div>{' '}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                      gap: '8px',
                      alignItems: 'end',
                    }}
                  >
                    {(v.nx?.bars ?? []).map((b: any, $index: number) => (
                      <Fragment key={$index}>
                        <button
                          type="button"
                          onClick={b?.pick}
                          aria-label={b?.aria}
                          aria-pressed={b?.on}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            height: '100%',
                            padding: '0',
                            border: '0',
                            background: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          <span
                            style={css(
                              `${b?.style ?? ''} display: block; width: 100%; border-radius: 8px 8px 4px 4px; transition: height 0.8s cubic-bezier(.2,.8,.2,1), opacity 0.2s;`,
                            )}
                          />
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '8px', marginTop: '-8px' }}>
                  {(v.nx?.bars ?? []).map((b: any, $index: number) => (
                    <Fragment key={$index}>
                      <span
                        style={css(
                          `${b?.wdStyle ?? ''} text-align: center; font-family: 'Geist Mono', monospace; font-size: 10px; text-transform: uppercase;`,
                        )}
                      >
                        {b?.wd}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
                  {(v.nx?.tiles ?? []).map((tl: any, $index: number) => (
                    <Fragment key={$index}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                          padding: '12px',
                          borderRadius: '16px',
                          border: '1px solid var(--line)',
                          background: 'rgba(var(--k), calc(0.18 * var(--ka)))',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: '9.5px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--ink3)',
                          }}
                        >
                          {tl?.label}
                        </span>
                        <span style={{ fontSize: '19px', fontWeight: '400', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
                          {tl?.val}
                        </span>
                        <span style={{ fontSize: '11.5px', color: 'var(--ink3)' }}>{tl?.sub}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--line)',
                  }}
                >
                  <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>Body weight</span>
                  <span style={{ fontSize: '14px', fontWeight: '500', fontVariantNumeric: 'tabular-nums' }}>{v.nx?.wTrend}</span>
                </div>
              </section>
            </div>
          </>
        ) : null}
        {v.nx?.quizOpen ? (
          <>
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Nutrition questions"
              style={{ position: 'fixed', inset: '0', zIndex: '40', background: 'var(--scrim)', overflow: 'hidden' }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <button
                  type="button"
                  aria-label="Close"
                  onClick={v.nx?.closeQuiz}
                  style={{ flexGrow: '1', minHeight: '60px', border: '0', background: 'none', cursor: 'pointer' }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    maxHeight: 'calc(var(--screen-h) - 24px)',
                    overflowY: 'auto',
                    padding: '10px 20px 30px',
                    borderRadius: '30px 30px 0 0',
                    borderTop: '1px solid var(--line)',
                    background: 'var(--pop)',
                    boxShadow: '0 -20px 50px -20px rgba(var(--k), calc(0.8 * var(--ka)))',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      alignSelf: 'center',
                      width: '40px',
                      height: '5px',
                      borderRadius: '3px',
                      background: 'rgba(var(--w), calc(0.18 * var(--wa)))',
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <span
                      style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: '10.5px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--ink3)',
                      }}
                    >
                      {v.nx?.qStepLbl}
                    </span>
                    <button
                      type="button"
                      onClick={v.nx?.closeQuiz}
                      aria-label="Close"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        padding: '0',
                        border: '1px solid var(--line)',
                        borderRadius: '18px',
                        background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
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
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M7 7l10 10M17 7L7 17" />
                      </svg>
                    </button>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: '4px' }}>
                    {(v.nx?.qDots ?? []).map((qd: any, $index: number) => (
                      <Fragment key={$index}>
                        <span style={css(`${qd?.style ?? ''} height: 4px; border-radius: 2px; transition: background 0.2s;`)} />
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '26px', fontWeight: '300', lineHeight: '1.1', letterSpacing: '-0.03em' }}>{v.nx?.qTitle}</span>
                    <span style={{ fontSize: '14px', lineHeight: '1.45', color: 'var(--ink2)', textWrap: 'pretty' }}>{v.nx?.qSub}</span>
                  </div>
                  {v.nx?.qs0 ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {(v.nx?.qGoals ?? []).map((o: any, $index: number) => (
                          <Fragment key={$index}>
                            <button
                              type="button"
                              role="radio"
                              aria-checked={o?.on}
                              onClick={o?.pick}
                              style={css(
                                `${o?.style ?? ''} display: flex; flex-direction: column; align-items: flex-start; gap: 2px; width: 100%; padding: 14px 16px; border-radius: 18px; border-width: 1.5px; border-style: solid; text-align: left; cursor: pointer; transition: all 0.15s;`,
                              )}
                            >
                              <span style={{ fontSize: '16px', fontWeight: '500' }}>{o?.label}</span>
                              <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>{o?.desc}</span>
                            </button>
                          </Fragment>
                        ))}
                      </div>
                    </>
                  ) : null}
                  {v.nx?.qs1 ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div
                          role="radiogroup"
                          aria-label="Gender"
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
                          {(v.nx?.qGenders ?? []).map((o: any, $index: number) => (
                            <Fragment key={$index}>
                              <button
                                type="button"
                                role="radio"
                                aria-checked={o?.on}
                                onClick={o?.pick}
                                style={css(
                                  `${o?.seg ?? ''} min-height: 44px; padding: 0; border: 0; border-radius: 12px; font-size: 15px; font-weight: 500; cursor: pointer;`,
                                )}
                              >
                                {o?.label}
                              </button>
                            </Fragment>
                          ))}
                        </div>
                        {(v.nx?.qNums ?? []).map((n: any, $index: number) => (
                          <Fragment key={$index}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '12px',
                                padding: '10px 10px 10px 16px',
                                borderRadius: '16px',
                                border: '1px solid var(--line)',
                                background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                              }}
                            >
                              <div
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', minWidth: '0' }}
                              >
                                <span style={{ fontSize: '15px', color: 'var(--ink2)' }}>{n?.label}</span>
                                {n?.hasUnits ? (
                                  <>
                                    <div
                                      role="radiogroup"
                                      aria-label="Height unit"
                                      style={{
                                        display: 'flex',
                                        gap: '2px',
                                        padding: '2px',
                                        borderRadius: '10px',
                                        border: '1px solid var(--line)',
                                        background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                                      }}
                                    >
                                      {(n?.units ?? []).map((u: any, $index: number) => (
                                        <Fragment key={$index}>
                                          <button
                                            type="button"
                                            role="radio"
                                            aria-checked={u?.on}
                                            onClick={u?.pick}
                                            style={css(
                                              `${u?.style ?? ''} min-width: 38px; height: 26px; padding: 0 8px; border: 0; border-radius: 8px; font-family: 'Geist Mono', monospace; font-size: 11px; font-weight: 500; cursor: pointer;`,
                                            )}
                                          >
                                            {u?.label}
                                          </button>
                                        </Fragment>
                                      ))}
                                    </div>
                                  </>
                                ) : null}
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <button
                                  type="button"
                                  onClick={n?.dec}
                                  aria-label={`Decrease ${n?.label ?? ''}`}
                                  style={{
                                    width: '40px',
                                    height: '40px',
                                    padding: '0',
                                    border: '1px solid var(--line)',
                                    borderRadius: '20px',
                                    background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                    fontSize: '18px',
                                    color: 'var(--ink)',
                                    cursor: 'pointer',
                                  }}
                                >
                                  −
                                </button>
                                <span
                                  style={{
                                    minWidth: '76px',
                                    textAlign: 'center',
                                    fontSize: '20px',
                                    fontWeight: '400',
                                    fontVariantNumeric: 'tabular-nums',
                                  }}
                                >
                                  {n?.val}
                                  <span style={{ fontSize: '12px', color: 'var(--ink3)' }}>{n?.unit}</span>
                                </span>
                                <button
                                  type="button"
                                  onClick={n?.inc}
                                  aria-label={`Increase ${n?.label ?? ''}`}
                                  style={{
                                    width: '40px',
                                    height: '40px',
                                    padding: '0',
                                    border: '1px solid var(--line)',
                                    borderRadius: '20px',
                                    background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                    fontSize: '18px',
                                    color: 'var(--ink)',
                                    cursor: 'pointer',
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </>
                  ) : null}
                  {v.nx?.qs2 ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {(v.nx?.qActs ?? []).map((o: any, $index: number) => (
                          <Fragment key={$index}>
                            <button
                              type="button"
                              role="radio"
                              aria-checked={o?.on}
                              onClick={o?.pick}
                              style={css(
                                `${o?.style ?? ''} display: flex; flex-direction: column; align-items: flex-start; gap: 2px; width: 100%; padding: 14px 16px; border-radius: 18px; border-width: 1.5px; border-style: solid; text-align: left; cursor: pointer; transition: all 0.15s;`,
                              )}
                            >
                              <span style={{ fontSize: '16px', fontWeight: '500' }}>{o?.label}</span>
                              <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>{o?.desc}</span>
                            </button>
                          </Fragment>
                        ))}
                      </div>
                    </>
                  ) : null}
                  {v.nx?.qs3 ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
                          {(v.nx?.qDiets ?? []).map((o: any, $index: number) => (
                            <Fragment key={$index}>
                              <button
                                type="button"
                                role="radio"
                                aria-checked={o?.on}
                                onClick={o?.pick}
                                style={css(
                                  `${o?.style ?? ''} display: flex; flex-direction: column; align-items: flex-start; gap: 2px; width: 100%; padding: 14px 16px; border-radius: 18px; border-width: 1.5px; border-style: solid; text-align: left; cursor: pointer; transition: all 0.15s; min-height: 76px;`,
                                )}
                              >
                                <span style={{ fontSize: '15px', fontWeight: '500' }}>{o?.label}</span>
                                <span style={{ fontSize: '12px', color: 'var(--ink2)' }}>{o?.desc}</span>
                              </button>
                            </Fragment>
                          ))}
                        </div>
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
                            Anything to avoid?
                          </span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {(v.nx?.qAvoid ?? []).map((o: any, $index: number) => (
                              <Fragment key={$index}>
                                <button
                                  type="button"
                                  aria-pressed={o?.on}
                                  onClick={o?.pick}
                                  style={css(
                                    `${o?.style ?? ''} min-height: 38px; padding: 0 14px; border-radius: 19px; border-width: 1px; border-style: solid; font-size: 13.5px; font-weight: 500; cursor: pointer;`,
                                  )}
                                >
                                  {o?.label}
                                </button>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  {v.nx?.qs4 ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {(v.nx?.qBudgets ?? []).map((o: any, $index: number) => (
                          <Fragment key={$index}>
                            <button
                              type="button"
                              role="radio"
                              aria-checked={o?.on}
                              onClick={o?.pick}
                              style={css(
                                `${o?.style ?? ''} display: flex; flex-direction: column; align-items: flex-start; gap: 2px; width: 100%; padding: 14px 16px; border-radius: 18px; border-width: 1.5px; border-style: solid; text-align: left; cursor: pointer; transition: all 0.15s;`,
                              )}
                            >
                              <span style={{ fontSize: '16px', fontWeight: '500' }}>{o?.label}</span>
                              <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>{o?.desc}</span>
                            </button>
                          </Fragment>
                        ))}
                      </div>
                    </>
                  ) : null}
                  {v.nx?.qs5 ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '2px',
                            padding: '20px',
                            borderRadius: '20px',
                            border: '1px solid rgba(64,219,168,0.35)',
                            background: 'rgba(64,219,168,0.08)',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Geist Mono', monospace",
                              fontSize: '10.5px',
                              letterSpacing: '0.14em',
                              textTransform: 'uppercase',
                              color: 'var(--accT)',
                            }}
                          >
                            Daily calories
                          </span>
                          <span
                            style={{
                              fontSize: '44px',
                              fontWeight: '200',
                              lineHeight: '1.05',
                              letterSpacing: '-0.045em',
                              fontVariantNumeric: 'tabular-nums',
                            }}
                          >
                            {v.nx?.qKcal}
                          </span>
                          <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>kcal per day</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
                          {(v.nx?.qRes ?? []).map((qr: any, $index: number) => (
                            <Fragment key={$index}>
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  gap: '2px',
                                  padding: '14px 6px',
                                  borderRadius: '16px',
                                  border: '1px solid var(--line)',
                                  background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                                }}
                              >
                                <span
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontFamily: "'Geist Mono', monospace",
                                    fontSize: '10px',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'var(--ink3)',
                                  }}
                                >
                                  <span style={css(`${qr?.dot ?? ''} width: 7px; height: 7px; border-radius: 4px;`)} />
                                  {qr?.label}
                                </span>
                                <span style={{ fontSize: '22px', fontWeight: '400', fontVariantNumeric: 'tabular-nums' }}>{qr?.val}g</span>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                        <span style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--ink2)', textWrap: 'pretty' }}>
                          {v.nx?.qResNote}
                        </span>
                      </div>
                    </>
                  ) : null}
                  <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                    {v.nx?.qCanBack ? (
                      <>
                        <button
                          type="button"
                          onClick={v.nx?.qBack}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            height: '54px',
                            border: '1px solid var(--line)',
                            borderRadius: '18px',
                            background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: 'var(--ink)',
                            cursor: 'pointer',
                            flex: '1 1 0',
                          }}
                        >
                          Back
                        </button>
                      </>
                    ) : null}
                    <button
                      type="button"
                      onClick={v.nx?.qNext}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        height: '54px',
                        border: '0',
                        borderRadius: '18px',
                        background: 'var(--acc)',
                        color: 'var(--accInk)',
                        fontSize: '16px',
                        fontWeight: '600',
                        boxShadow: '0 10px 36px -10px rgba(64,219,168,0.6)',
                        cursor: 'pointer',
                        flex: '2 1 0',
                      }}
                    >
                      {v.nx?.qNextLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
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
        {(v.nav?.nut ?? []).map((i: any, $index: number) => (
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
