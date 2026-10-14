// Generated from project/Gym Tracker.dc.html (#diet). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';

export function DietScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="diet"
      style={{ background: 'radial-gradient(140% 30% at 50% 0%, rgba(64,219,168,0.08), rgba(64,219,168,0) 60%), var(--bg)' }}
    >
      <main style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '8px 20px 120px' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <a
            href="#nutrition"
            aria-label="Back to Nutrition"
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
          <button
            type="button"
            onClick={v.diet?.openSheet}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              height: '40px',
              padding: '0 14px',
              borderRadius: '20px',
              border: '1px solid rgba(108,203,245,0.35)',
              background: 'rgba(108,203,245,0.08)',
              fontSize: '13px',
              fontWeight: '500',
              color: 'var(--cyanT)',
              cursor: 'pointer',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
            </svg>
            New plan
          </button>
        </header>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h1 style={{ margin: '0', fontSize: '30px', fontWeight: '300', lineHeight: '1.1', letterSpacing: '-0.035em' }}>Diet plan</h1>
          <p style={{ margin: '0', fontSize: '14px', color: 'var(--ink2)' }}>Built around foods you can buy in Bangladesh.</p>
        </div>
        {v.diet?.hasBanner ? (
          <>
            <div
              role="status"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 8px 12px 14px',
                borderRadius: '16px',
                border: '1px solid rgba(64,219,168,0.3)',
                background: 'rgba(64,219,168,0.08)',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  width: '26px',
                  height: '26px',
                  borderRadius: '13px',
                  background: 'var(--acc)',
                  color: 'var(--accInk)',
                }}
              >
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
              </span>
              <span style={{ flexGrow: '1', fontSize: '13px', lineHeight: '1.45' }}>{v.diet?.banner}</span>
              <button
                type="button"
                onClick={v.diet?.closeBanner}
                aria-label="Dismiss"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
                  width: '32px',
                  height: '32px',
                  padding: '0',
                  border: '0',
                  background: 'none',
                  color: 'var(--ink3)',
                  cursor: 'pointer',
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </>
        ) : null}
        {v.diet?.hasPlan ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <section
                aria-label="Daily totals"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '18px',
                  borderRadius: '24px',
                  border: '1px solid var(--line)',
                  background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <span style={{ fontSize: '17px', fontWeight: '500' }}>{v.diet?.title}</span>
                </div>
                <div
                  role="list"
                  aria-label="Plan totals"
                  style={{
                    display: 'flex',
                    gap: '10px',
                    margin: '0 -18px',
                    padding: '2px 18px 4px',
                    scrollPadding: '0 18px',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      flex: '0 0 132px',
                      padding: '16px 16px 16px',
                      borderRadius: '24px',
                      border: '1px solid var(--line)',
                      background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                      boxShadow: 'inset 0 1px 0 rgba(var(--w), calc(0.04 * var(--wa)))',
                      scrollSnapAlign: 'start',
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF7A59"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 21c-3.9 0-6.5-2.6-6.5-6.2 0-3.3 2.3-5.4 3.6-7.6.5 1.6 1.4 2.7 2.4 3.2-.2-2.9 1-5.6 3.2-7.4.3 3 1.7 4.7 2.9 6.4 1.1 1.5 1.9 3 1.9 5.2 0 3.7-3 6.4-7.5 6.4z" />
                      <path d="M12 21c-1.7 0-2.8-1.2-2.8-2.8 0-1.6 1.2-2.6 2-3.7.4 1 .9 1.4 1.6 1.7.1-1 .5-1.9 1.2-2.5.4 1.5 1.3 2.6 1.3 4 0 1.9-1.4 3.3-3.3 3.3z" />
                    </svg>
                    <span style={{ marginTop: '14px', fontSize: '14px', color: 'var(--ink2)' }}>Calories</span>
                    <span
                      style={{
                        fontSize: '28px',
                        fontWeight: '300',
                        lineHeight: '1.05',
                        letterSpacing: '-0.03em',
                        fontVariantNumeric: 'tabular-nums',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {v.diet?.kcal}
                      <span style={{ fontSize: '16px', fontWeight: '300' }}>kcal</span>
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--ink2)', whiteSpace: 'nowrap' }}>
                      / {v.diet?.kcalTn} <span style={{ fontSize: '11.5px' }}>goal</span>
                    </span>
                    <span
                      style={{
                        height: '3px',
                        marginTop: '4px',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        background: 'rgba(var(--w), calc(0.07 * var(--wa)))',
                      }}
                    >
                      <span
                        style={css(`${v.diet?.kcalBar2 ?? ''} display: block; height: 100%; border-radius: 2px; background: #FF7A59;`)}
                      />
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      flex: '0 0 132px',
                      padding: '16px 16px 16px',
                      borderRadius: '24px',
                      border: '1px solid var(--line)',
                      background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                      boxShadow: 'inset 0 1px 0 rgba(var(--w), calc(0.04 * var(--wa)))',
                      scrollSnapAlign: 'start',
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6CCBF5"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 6.5c2.7 0 2.7 2 5.3 2s2.7-2 5.4-2 2.6 2 5.3 2M4 12c2.7 0 2.7 2 5.3 2s2.7-2 5.4-2 2.6 2 5.3 2M4 17.5c2.7 0 2.7 2 5.3 2s2.7-2 5.4-2 2.6 2 5.3 2" />
                    </svg>
                    <span style={{ marginTop: '14px', fontSize: '14px', color: 'var(--ink2)' }}>Protein</span>
                    <span
                      style={{
                        fontSize: '28px',
                        fontWeight: '300',
                        lineHeight: '1.05',
                        letterSpacing: '-0.03em',
                        fontVariantNumeric: 'tabular-nums',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {v.diet?.protein}
                      <span style={{ fontSize: '16px', fontWeight: '300' }}>g</span>
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--ink2)', whiteSpace: 'nowrap' }}>
                      / {v.diet?.pTn} <span style={{ fontSize: '11.5px' }}>g</span>
                    </span>
                    <span
                      style={{
                        height: '3px',
                        marginTop: '4px',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        background: 'rgba(var(--w), calc(0.07 * var(--wa)))',
                      }}
                    >
                      <span style={css(`${v.diet?.pBar2 ?? ''} display: block; height: 100%; border-radius: 2px; background: #6CCBF5;`)} />
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      flex: '0 0 132px',
                      padding: '16px 16px 16px',
                      borderRadius: '24px',
                      border: '1px solid var(--line)',
                      background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                      boxShadow: 'inset 0 1px 0 rgba(var(--w), calc(0.04 * var(--wa)))',
                      scrollSnapAlign: 'start',
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F5B04C"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 21V9M12 21c0-4-2.5-7-5.5-9M12 21c0-4 2.5-7 5.5-9M4 21h16" />
                      <path d="M12 9c-.9-1.2-.9-3 0-4.5.9 1.5.9 3.3 0 4.5z" />
                      <path d="M6.5 12c-1.4-.5-2.3-2-2.1-3.7 1.4.6 2.3 2 2.1 3.7z" />
                      <path d="M17.5 12c1.4-.5 2.3-2 2.1-3.7-1.4.6-2.3 2-2.1 3.7z" />
                      <path d="M9.2 7.2c-1.2-.4-1.9-1.6-1.7-3 1.2.5 1.9 1.6 1.7 3zM14.8 7.2c1.2-.4 1.9-1.6 1.7-3-1.2.5-1.9 1.6-1.7 3z" />
                    </svg>
                    <span style={{ marginTop: '14px', fontSize: '14px', color: 'var(--ink2)' }}>Carbs</span>
                    <span
                      style={{
                        fontSize: '28px',
                        fontWeight: '300',
                        lineHeight: '1.05',
                        letterSpacing: '-0.03em',
                        fontVariantNumeric: 'tabular-nums',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {v.diet?.carbs}
                      <span style={{ fontSize: '16px', fontWeight: '300' }}>g</span>
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--ink2)', whiteSpace: 'nowrap' }}>
                      / {v.diet?.cTn} <span style={{ fontSize: '11.5px' }}>g</span>
                    </span>
                    <span
                      style={{
                        height: '3px',
                        marginTop: '4px',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        background: 'rgba(var(--w), calc(0.07 * var(--wa)))',
                      }}
                    >
                      <span style={css(`${v.diet?.cBar2 ?? ''} display: block; height: 100%; border-radius: 2px; background: #F5B04C;`)} />
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      flex: '0 0 132px',
                      padding: '16px 16px 16px',
                      borderRadius: '24px',
                      border: '1px solid var(--line)',
                      background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                      boxShadow: 'inset 0 1px 0 rgba(var(--w), calc(0.04 * var(--wa)))',
                      scrollSnapAlign: 'start',
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C7A8FF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 2.8h4M10.5 2.8v3.2L7.6 9.2A3 3 0 0 0 7 11v8.2A1.8 1.8 0 0 0 8.8 21h6.4a1.8 1.8 0 0 0 1.8-1.8V11a3 3 0 0 0-.6-1.8L13.5 6V2.8" />
                      <path d="M12 12.2c1.3 1.6 2 2.8 2 3.8a2 2 0 0 1-4 0c0-1 .7-2.2 2-3.8z" />
                    </svg>
                    <span style={{ marginTop: '14px', fontSize: '14px', color: 'var(--ink2)' }}>Fat</span>
                    <span
                      style={{
                        fontSize: '28px',
                        fontWeight: '300',
                        lineHeight: '1.05',
                        letterSpacing: '-0.03em',
                        fontVariantNumeric: 'tabular-nums',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {v.diet?.fat}
                      <span style={{ fontSize: '16px', fontWeight: '300' }}>g</span>
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--ink2)', whiteSpace: 'nowrap' }}>
                      / {v.diet?.fTn} <span style={{ fontSize: '11.5px' }}>g</span>
                    </span>
                    <span
                      style={{
                        height: '3px',
                        marginTop: '4px',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        background: 'rgba(var(--w), calc(0.07 * var(--wa)))',
                      }}
                    >
                      <span style={css(`${v.diet?.fBar2 ?? ''} display: block; height: 100%; border-radius: 2px; background: #C7A8FF;`)} />
                    </span>
                  </div>
                </div>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11.5px', color: 'var(--ink3)' }}>
                  {v.diet?.mealCount} · per day
                </span>
              </section>
              {(v.diet?.meals ?? []).map((m: any, $index: number) => (
                <Fragment key={$index}>
                  <article
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      padding: '12px 14px 12px 16px',
                      borderRadius: '22px',
                      border: '1px solid var(--line)',
                      background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {m?.view ? (
                        <>
                          <button
                            type="button"
                            onClick={m?.toggle}
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '1px',
                              flexGrow: '1',
                              minWidth: '0',
                              minHeight: '44px',
                              padding: '0',
                              border: '0',
                              background: 'none',
                              textAlign: 'left',
                              cursor: 'pointer',
                            }}
                          >
                            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--ink3)' }}>{m?.time}</span>
                            <span style={{ fontSize: '17px', fontWeight: '500' }}>{m?.nameOr}</span>
                          </button>
                        </>
                      ) : null}
                      {m?.editing ? (
                        <>
                          <div style={{ display: 'flex', gap: '6px', flexGrow: '1', minWidth: '0' }}>
                            <input
                              className="focus-2"
                              type="text"
                              placeholder="Time"
                              aria-label="Meal time"
                              value={m?.time ?? ''}
                              onChange={m?.setTime}
                              style={{
                                flexShrink: '0',
                                width: '84px',
                                height: '40px',
                                padding: '0 10px',
                                borderRadius: '12px',
                                border: '1px solid var(--line)',
                                background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                                fontSize: '13px',
                                outline: 'none',
                                fontFamily: "'Geist Mono', monospace",
                              }}
                            />
                            <input
                              className="focus-2"
                              type="text"
                              placeholder="Meal name"
                              aria-label="Meal name"
                              value={m?.name ?? ''}
                              onChange={m?.setName}
                              style={{
                                flexGrow: '1',
                                minWidth: '0',
                                height: '40px',
                                padding: '0 12px',
                                borderRadius: '12px',
                                border: '1px solid var(--line)',
                                background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                                fontSize: '15px',
                                outline: 'none',
                                fontWeight: '500',
                              }}
                            />
                          </div>
                        </>
                      ) : null}
                      <button
                        type="button"
                        onClick={m?.toggleEdit}
                        style={css(
                          `${m?.editStyle ?? ''} flex-shrink: 0; min-height: 34px; padding: 0 14px; border-radius: 17px; border-width: 1px; border-style: solid; font-size: 13px; font-weight: 500; cursor: pointer;`,
                        )}
                      >
                        {m?.editLabel}
                      </button>
                      <button
                        type="button"
                        onClick={m?.toggle}
                        aria-expanded={m?.open}
                        aria-label={`Show or hide ${m?.nameOr ?? ''}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: '0',
                          width: '34px',
                          height: '44px',
                          padding: '0',
                          border: '0',
                          background: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
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
                            style={css(`${m?.chev ?? ''} transition: transform 0.2s;`)}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    {m?.closed ? (
                      <>
                        <button
                          type="button"
                          onClick={m?.toggle}
                          style={{
                            marginTop: '-6px',
                            minHeight: '26px',
                            padding: '0',
                            border: '0',
                            background: 'none',
                            textAlign: 'left',
                            fontSize: '13px',
                            color: 'var(--ink2)',
                            cursor: 'pointer',
                          }}
                        >
                          {m?.summary}
                        </button>
                      </>
                    ) : null}
                    {m?.open ? (
                      <>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          {m?.editing ? (
                            <>
                              <div
                                style={{
                                  display: 'flex',
                                  gap: '6px',
                                  padding: '2px 0 6px',
                                  fontFamily: "'Geist Mono', monospace",
                                  fontSize: '10px',
                                  letterSpacing: '0.14em',
                                  textTransform: 'uppercase',
                                  color: 'var(--ink3)',
                                }}
                              >
                                <span style={{ flex: '1.4 1 0' }}>Portion</span>
                                <span style={{ flex: '1 1 0', textAlign: 'center' }}>Protein</span>
                                <span style={{ flex: '1 1 0', textAlign: 'center' }}>kcal</span>
                                <span style={{ flexShrink: '0', width: '30px' }} />
                              </div>
                              <p
                                style={{
                                  margin: '0 0 6px',
                                  fontSize: '12px',
                                  lineHeight: '1.45',
                                  color: 'var(--ink3)',
                                  textWrap: 'pretty',
                                }}
                              >
                                Type the food and portion. Protein and calories are worked out for you.
                              </p>
                            </>
                          ) : null}
                          {(m?.items ?? []).map((it: any, $index: number) => (
                            <Fragment key={$index}>
                              {m?.view ? (
                                <>
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '12px',
                                      minHeight: '54px',
                                      padding: '6px 0',
                                      borderTop: '1px solid var(--line)',
                                    }}
                                  >
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', flexGrow: '1', minWidth: '0' }}>
                                      <span style={{ fontSize: '15px' }}>{it?.nameOr}</span>
                                      <span style={{ fontSize: '12px', color: 'var(--ink3)' }}>{it?.portion}</span>
                                    </div>
                                    <span
                                      style={{
                                        flexShrink: '0',
                                        fontFamily: "'Geist Mono', monospace",
                                        fontSize: '12px',
                                        color: 'var(--ink2)',
                                        textAlign: 'right',
                                      }}
                                    >
                                      <span style={{ color: 'var(--accT)' }}>{it?.protein}g</span> · {it?.kcal}
                                    </span>
                                  </div>
                                </>
                              ) : null}{' '}
                              {m?.editing ? (
                                <>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '6px',
                                      padding: '8px 0',
                                      borderTop: '1px solid var(--line)',
                                    }}
                                  >
                                    <input
                                      className="focus-2"
                                      type="text"
                                      placeholder="Food name, e.g. Masoor dal"
                                      aria-label="Food name"
                                      value={it?.name ?? ''}
                                      onChange={it?.setName}
                                      style={{
                                        width: '100%',
                                        height: '40px',
                                        padding: '0 12px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--line)',
                                        background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                                        fontSize: '15px',
                                        outline: 'none',
                                      }}
                                    />
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                      <input
                                        className="focus-2"
                                        type="text"
                                        placeholder="1 cup"
                                        aria-label="Portion"
                                        value={it?.portion ?? ''}
                                        onChange={it?.setPortion}
                                        style={{
                                          flex: '1.4 1 0',
                                          minWidth: '0',
                                          height: '40px',
                                          padding: '0 10px',
                                          borderRadius: '12px',
                                          border: '1px solid var(--line)',
                                          background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                                          fontSize: '14px',
                                          outline: 'none',
                                        }}
                                      />
                                      <span
                                        aria-label="Protein"
                                        style={css(
                                          `${it?.estStyle ?? ''} display: flex; align-items: center; justify-content: center; flex: 1 1 0; min-width: 0; height: 40px; border-radius: 12px; border: 1px dashed var(--line); font-family: 'Geist Mono', monospace; font-size: 14px; font-variant-numeric: tabular-nums; white-space: nowrap;`,
                                        )}
                                      >
                                        {it?.pTxt}
                                      </span>
                                      <span
                                        aria-label="Calories"
                                        style={css(
                                          `${it?.estStyle ?? ''} display: flex; align-items: center; justify-content: center; flex: 1 1 0; min-width: 0; height: 40px; border-radius: 12px; border: 1px dashed var(--line); font-family: 'Geist Mono', monospace; font-size: 14px; font-variant-numeric: tabular-nums; white-space: nowrap;`,
                                        )}
                                      >
                                        {it?.kTxt}
                                      </span>
                                      <button
                                        type="button"
                                        onClick={it?.remove}
                                        aria-label={`Remove ${it?.nameOr ?? ''}`}
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          flexShrink: '0',
                                          width: '30px',
                                          height: '40px',
                                          padding: '0',
                                          border: '0',
                                          background: 'none',
                                          cursor: 'pointer',
                                        }}
                                      >
                                        <span
                                          style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '22px',
                                            height: '22px',
                                            borderRadius: '11px',
                                            background: '#FF8A7A',
                                          }}
                                        >
                                          <span style={{ width: '10px', height: '2px', borderRadius: '1px', background: '#1A0703' }} />
                                        </span>
                                      </button>
                                    </div>
                                    {it?.estErr ? (
                                      <>
                                        <div
                                          style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: '8px',
                                            fontSize: '12.5px',
                                            color: 'var(--danger)',
                                          }}
                                        >
                                          <span>Couldn't work out the numbers.</span>
                                          <button
                                            type="button"
                                            onClick={it?.retry}
                                            style={{
                                              minHeight: '30px',
                                              padding: '0 10px',
                                              border: '1px solid var(--line)',
                                              borderRadius: '15px',
                                              background: 'none',
                                              fontSize: '12px',
                                              fontWeight: '500',
                                              color: 'var(--ink)',
                                              cursor: 'pointer',
                                            }}
                                          >
                                            Try again
                                          </button>
                                        </div>
                                      </>
                                    ) : null}
                                  </div>
                                </>
                              ) : null}
                            </Fragment>
                          ))}
                          {m?.empty ? (
                            <>
                              <p
                                style={{
                                  margin: '0',
                                  padding: '12px 0 4px',
                                  borderTop: '1px solid var(--line)',
                                  fontSize: '13px',
                                  color: 'var(--ink3)',
                                }}
                              >
                                No foods yet.
                              </p>
                            </>
                          ) : null}
                          {m?.editing ? (
                            <>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  gap: '12px',
                                  paddingTop: '4px',
                                }}
                              >
                                <button
                                  type="button"
                                  onClick={m?.addItem}
                                  style={{
                                    minHeight: '40px',
                                    padding: '0',
                                    border: '0',
                                    background: 'none',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: 'var(--accT)',
                                    cursor: 'pointer',
                                  }}
                                >
                                  + Add food
                                </button>
                                <button
                                  type="button"
                                  onClick={m?.del}
                                  style={{
                                    minHeight: '40px',
                                    padding: '0',
                                    border: '0',
                                    background: 'none',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: 'var(--danger)',
                                    cursor: 'pointer',
                                  }}
                                >
                                  Delete meal
                                </button>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </>
                    ) : null}
                  </article>
                </Fragment>
              ))}
              <button
                type="button"
                onClick={v.diet?.addMeal}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '52px',
                  borderRadius: '18px',
                  border: '1px dashed rgba(64,219,168,0.4)',
                  background: 'rgba(64,219,168,0.04)',
                  fontSize: '15px',
                  fontWeight: '500',
                  color: 'var(--accT)',
                  cursor: 'pointer',
                }}
              >
                + Add meal
              </button>
              {v.diet?.hasTips ? (
                <>
                  <section
                    aria-label="Tips"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '18px',
                      borderRadius: '22px',
                      background: 'rgba(64,219,168,0.06)',
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
                      Tips
                    </span>
                    {(v.diet?.tips ?? []).map((tp: any, $index: number) => (
                      <Fragment key={$index}>
                        <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.5', color: 'var(--ink)', textWrap: 'pretty' }}>
                          {tp?.text}
                        </p>
                      </Fragment>
                    ))}
                  </section>
                </>
              ) : null}
            </div>
          </>
        ) : null}
        {v.diet?.noPlan ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
              {(v.diet?.starts ?? []).map((op: any, $index: number) => (
                <Fragment key={$index}>
                  <button
                    className="hover-10"
                    type="button"
                    onClick={op?.pick}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      minHeight: '76px',
                      padding: '14px 16px',
                      borderRadius: '22px',
                      border: '1px solid var(--line)',
                      background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                      textAlign: 'left',
                      cursor: 'pointer',
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
                        background: 'rgba(64,219,168,0.12)',
                        color: 'var(--accT)',
                      }}
                    >
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
                        <path d={op?.icon} />
                      </svg>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '16px', fontWeight: '500' }}>{op?.title}</span>
                      <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>{op?.sub}</span>
                    </span>
                  </button>
                </Fragment>
              ))}
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
        {(v.nav?.diet ?? []).map((i: any, $index: number) => (
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
      <div style={css(`${v.diet?.layerStyle ?? ''} position: fixed; inset: 0; z-index: 20; overflow: hidden;`)}>
        <button
          type="button"
          onClick={v.diet?.closeSheet}
          aria-label="Close"
          tabIndex={-1}
          style={css(
            `${v.diet?.scrimStyle ?? ''} position: absolute; inset: 0; padding: 0; border: 0; background: var(--scrim); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); cursor: default; transition: opacity 0.3s;`,
          )}
        />{' '}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="diet-sheet-title"
          style={css(
            `${v.diet?.sheetStyle ?? ''} position: absolute; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; max-height: calc(var(--screen-h) - 24px); border-radius: 32px 32px 0 0; border: 1px solid var(--line); border-bottom: 0; background: var(--pop); box-shadow: 0 -24px 60px -20px rgba(var(--k), calc(0.7 * var(--ka)));`,
          )}
        >
          <div
            onPointerDown={v.diet?.sheetDown}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              flexShrink: '0',
              padding: '10px 20px',
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
              <h2 id="diet-sheet-title" style={{ margin: '0', fontSize: '24px', fontWeight: '400', letterSpacing: '-0.025em' }}>
                {v.diet?.sheetTitle}
              </h2>
              <button
                type="button"
                onClick={v.diet?.closeSheet}
                aria-label="Close"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: '0',
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              overflowY: 'auto',
              scrollbarWidth: 'none',
              padding: '4px 20px 30px',
            }}
          >
            {v.diet?.stInput ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div
                    role="group"
                    aria-label="How to create"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                      gap: '4px',
                      padding: '4px',
                      borderRadius: '16px',
                      border: '1px solid var(--line)',
                      background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                    }}
                  >
                    {(v.diet?.tabs ?? []).map((tb: any, $index: number) => (
                      <Fragment key={$index}>
                        <button
                          type="button"
                          aria-pressed={tb?.on}
                          onClick={tb?.pick}
                          style={css(
                            `${tb?.style ?? ''} display: flex; align-items: center; justify-content: center; gap: 6px; min-height: 42px; border: 0; border-radius: 12px; font-size: 14px; font-weight: 500; cursor: pointer;`,
                          )}
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d={tb?.icon} />
                          </svg>
                          {tb?.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                  {v.diet?.tAI ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.5', color: 'var(--ink2)', textWrap: 'pretty' }}>
                          Tell us your goal in your own words. If we need more detail, we'll ask a few quick questions first.
                        </p>
                        <textarea
                          className="focus-2"
                          aria-label="Describe the diet plan you want"
                          rows={4}
                          placeholder="I want to lose 5 kg. I eat rice twice a day and like fish."
                          value={v.diet?.prompt ?? ''}
                          onChange={v.diet?.setPrompt}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            borderRadius: '16px',
                            border: '1px solid var(--line)',
                            background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                            fontSize: '15px',
                            lineHeight: '1.5',
                            resize: 'none',
                            outline: 'none',
                          }}
                        />
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {(v.diet?.examples ?? []).map((ex: any, $index: number) => (
                            <Fragment key={$index}>
                              <button
                                className="hover-11"
                                type="button"
                                onClick={ex?.pick}
                                style={{
                                  minHeight: '34px',
                                  padding: '0 12px',
                                  borderRadius: '17px',
                                  border: '1px solid var(--line)',
                                  background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                  fontSize: '13px',
                                  color: 'var(--ink2)',
                                  cursor: 'pointer',
                                }}
                              >
                                {ex?.text}
                              </button>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : null}
                  {v.diet?.tUp ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label
                          htmlFor="diet-file"
                          style={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            minHeight: '210px',
                            padding: '20px',
                            borderRadius: '20px',
                            border: '1px dashed rgba(64,219,168,0.45)',
                            background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                            overflow: 'hidden',
                            textAlign: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          {v.diet?.hasImg ? (
                            <>
                              <div
                                aria-hidden="true"
                                style={css(
                                  `${v.diet?.imgBg ?? ''} position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0.5;`,
                                )}
                              />
                            </>
                          ) : null}
                          <span
                            style={{
                              position: 'relative',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '52px',
                              height: '52px',
                              borderRadius: '26px',
                              background: 'rgba(64,219,168,0.14)',
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
                              <path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
                            </svg>
                          </span>
                          <span style={{ position: 'relative', fontSize: '15px', fontWeight: '500' }}>{v.diet?.imgTitle}</span>
                          <span style={{ position: 'relative', fontSize: '13px', color: 'var(--ink2)' }}>{v.diet?.imgSub}</span>
                        </label>
                        <input id="diet-file" type="file" accept="image/*" onChange={v.diet?.onFile} style={{ display: 'none' }} />
                        <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5', color: 'var(--ink3)', textWrap: 'pretty' }}>
                          Works with a screenshot, a photo of a printed diet chart or handwritten notes. Missing nutrition values are
                          estimated.
                        </p>
                      </div>
                    </>
                  ) : null}
                  {v.diet?.tQz ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {v.diet?.qzFirst ? (
                          <>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2px',
                                padding: '12px 14px',
                                borderRadius: '14px',
                                border: '1px solid rgba(64,219,168,0.3)',
                                background: 'rgba(64,219,168,0.06)',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Geist Mono', monospace",
                                  fontSize: '10px',
                                  letterSpacing: '0.14em',
                                  textTransform: 'uppercase',
                                  color: 'var(--accT)',
                                }}
                              >
                                Based on your goal
                              </span>
                              <span style={{ fontSize: '14px', fontWeight: '500' }}>{v.diet?.qzGoal}</span>
                            </div>
                          </>
                        ) : null}
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
                            {v.diet?.qzStep}
                          </span>
                          {v.diet?.qzCanBack ? (
                            <>
                              <button
                                type="button"
                                onClick={v.diet?.qzBack}
                                style={{
                                  minHeight: '32px',
                                  padding: '0 4px',
                                  border: '0',
                                  background: 'none',
                                  fontSize: '13px',
                                  fontWeight: '500',
                                  color: 'var(--ink2)',
                                  cursor: 'pointer',
                                }}
                              >
                                ‹ Back
                              </button>
                            </>
                          ) : null}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '4px' }}>
                          {(v.diet?.qzDots ?? []).map((qd: any, $index: number) => (
                            <Fragment key={$index}>
                              <span style={css(`${qd?.style ?? ''} height: 4px; border-radius: 2px; transition: background 0.2s;`)} />
                            </Fragment>
                          ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span style={{ fontSize: '22px', fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
                            {v.diet?.qzQ}
                          </span>
                          <span style={{ fontSize: '13.5px', color: 'var(--ink2)' }}>{v.diet?.qzSub}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {(v.diet?.qzOpts ?? []).map((o: any, $index: number) => (
                            <Fragment key={$index}>
                              <button
                                type="button"
                                aria-pressed={o?.on}
                                onClick={o?.pick}
                                style={css(
                                  `${o?.style ?? ''} display: flex; align-items: center; justify-content: space-between; gap: 10px; width: 100%; min-height: 54px; padding: 0 16px; border-radius: 16px; border-width: 1.5px; border-style: solid; text-align: left; font-size: 15px; font-weight: 500; cursor: pointer; transition: all 0.15s;`,
                                )}
                              >
                                {o?.label}
                                {o?.on ? (
                                  <>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#40DBA8"
                                      strokeWidth="2.6"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      aria-hidden="true"
                                    >
                                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                                    </svg>
                                  </>
                                ) : null}
                              </button>
                            </Fragment>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={v.diet?.qzNext}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            width: '100%',
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
                          {v.diet?.qzLast ? <>Create my plan</> : null}
                          {v.diet?.qzNotLast ? <>Next</> : null}
                        </button>
                      </div>
                    </>
                  ) : null}
                  {v.diet?.hasReplace ? (
                    <>
                      <p style={{ margin: '0', fontSize: '12px', color: 'var(--ink3)' }}>This replaces your current plan.</p>
                    </>
                  ) : null}
                  {v.diet?.hasErr ? (
                    <>
                      <p
                        style={{
                          margin: '0',
                          padding: '12px 14px',
                          borderRadius: '14px',
                          background: 'rgba(255,138,122,0.1)',
                          fontSize: '13px',
                          lineHeight: '1.45',
                          color: 'var(--danger)',
                        }}
                      >
                        {v.diet?.err}
                      </p>
                    </>
                  ) : null}
                  {v.diet?.showPrimary ? (
                    <>
                      <button
                        type="button"
                        onClick={v.diet?.primary}
                        style={css(
                          `${v.diet?.primaryStyle ?? ''} display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; height: 56px; border: 0; border-radius: 18px; background: var(--acc); color: var(--accInk); font-size: 16px; font-weight: 600; cursor: pointer;`,
                        )}
                      >
                        {v.diet?.primaryLabel}
                      </button>
                    </>
                  ) : null}
                  {v.diet?.hasPlan ? (
                    <>
                      {v.diet?.delIdle ? (
                        <>
                          <button
                            type="button"
                            onClick={v.diet?.askDelete}
                            style={{
                              alignSelf: 'center',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              minHeight: '40px',
                              padding: '0 10px',
                              border: '0',
                              background: 'none',
                              fontSize: '13.5px',
                              fontWeight: '500',
                              color: 'var(--danger)',
                              cursor: 'pointer',
                            }}
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13M10 11v5.5M14 11v5.5" />
                            </svg>
                            Delete current plan
                          </button>
                        </>
                      ) : null}{' '}
                      {v.diet?.delAsk ? (
                        <>
                          <div
                            role="alert"
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '10px',
                              padding: '14px',
                              borderRadius: '16px',
                              border: '1px solid rgba(255,138,122,0.35)',
                              background: 'rgba(255,138,122,0.07)',
                            }}
                          >
                            <span style={{ fontSize: '14px', color: 'var(--ink)' }}>
                              Delete your whole plan? All meals and foods will be removed.
                            </span>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
                              <button
                                type="button"
                                onClick={v.diet?.cancelDelete}
                                style={{
                                  minHeight: '42px',
                                  border: '1px solid var(--line)',
                                  borderRadius: '14px',
                                  background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                  fontSize: '13.5px',
                                  fontWeight: '500',
                                  color: 'var(--ink)',
                                  cursor: 'pointer',
                                }}
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                onClick={v.diet?.confirmDelete}
                                style={{
                                  minHeight: '42px',
                                  border: '0',
                                  borderRadius: '14px',
                                  background: '#FF8A7A',
                                  color: '#1A0603',
                                  fontSize: '13.5px',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                }}
                              >
                                Delete plan
                              </button>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </>
                  ) : null}
                </div>
              </>
            ) : null}
            {v.diet?.stLoading ? (
              <>
                <div
                  role="status"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '14px',
                    minHeight: '260px',
                    textAlign: 'center',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '56px',
                      height: '56px',
                      borderRadius: '28px',
                      background: 'rgba(64,219,168,0.12)',
                      color: 'var(--accT)',
                      boxShadow: '0 0 40px -6px rgba(64,219,168,0.5)',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
                    </svg>
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: '500' }}>{v.diet?.loadingMsg}</span>
                  <span style={{ fontSize: '13px', color: 'var(--ink3)' }}>This takes a few seconds.</span>
                </div>
              </>
            ) : null}
            {v.diet?.stQuestions ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.5', color: 'var(--ink2)', textWrap: 'pretty' }}>
                    Answer what you can so the plan fits you. You can skip any question.
                  </p>
                  {(v.diet?.qs ?? []).map((q: any, $index: number) => (
                    <Fragment key={$index}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <span style={{ fontSize: '15px', fontWeight: '500', textWrap: 'pretty' }}>{q?.q}</span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {(q?.opts ?? []).map((o: any, $index: number) => (
                            <Fragment key={$index}>
                              <button
                                type="button"
                                aria-pressed={o?.on}
                                onClick={o?.pick}
                                style={css(
                                  `${o?.style ?? ''} min-height: 38px; padding: 0 14px; border-radius: 19px; border-width: 1px; border-style: solid; font-size: 14px; cursor: pointer;`,
                                )}
                              >
                                {o?.label}
                              </button>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </Fragment>
                  ))}
                  {v.diet?.hasErr ? (
                    <>
                      <p
                        style={{
                          margin: '0',
                          padding: '12px 14px',
                          borderRadius: '14px',
                          background: 'rgba(255,138,122,0.1)',
                          fontSize: '13px',
                          lineHeight: '1.45',
                          color: 'var(--danger)',
                        }}
                      >
                        {v.diet?.err}
                      </p>
                    </>
                  ) : null}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <button
                      type="button"
                      onClick={v.diet?.buildNow}
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
                        cursor: 'pointer',
                      }}
                    >
                      Create my plan
                    </button>
                    <span style={{ textAlign: 'center', fontFamily: "'Geist Mono', monospace", fontSize: '12px', color: 'var(--ink3)' }}>
                      {v.diet?.answered}
                    </span>
                    <button
                      type="button"
                      onClick={v.diet?.backToInput}
                      style={{
                        minHeight: '40px',
                        border: '0',
                        background: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: 'var(--ink2)',
                        cursor: 'pointer',
                      }}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
