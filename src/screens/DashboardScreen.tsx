// Generated from project/Gym Tracker.dc.html (#dashboard). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';

export function DashboardScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="dashboard"
      style={{ background: 'radial-gradient(140% 40% at 50% 0%, rgba(64,219,168,0.10), rgba(64,219,168,0) 60%), var(--bg)' }}
    >
      <main style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '16px 20px 124px' }}>
        <header style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink3)',
              }}
            >
              Fri · 2 Oct
            </span>
            <h1 style={{ margin: '0', fontSize: '32px', fontWeight: '300', lineHeight: '1.05', letterSpacing: '-0.035em' }}>
              Welcome back, Neo
            </h1>
            <p style={{ margin: '0', fontSize: '15px', color: 'var(--ink2)' }}>Here's today's plan.</p>
          </div>
          <a
            href="#profile"
            aria-label="Profile"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: '0',
              width: '44px',
              height: '44px',
              borderRadius: '22px',
              border: '1px solid rgba(64,219,168,0.35)',
              background: 'rgba(64,219,168,0.08)',
              fontWeight: '500',
              color: 'var(--accT)',
            }}
          >
            N
          </a>
        </header>
        {v.dash?.hasMissed ? (
          <>
            <section
              aria-label="Missed workout"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '16px 18px',
                borderRadius: '24px',
                border: '1px solid rgba(245,196,108,0.3)',
                background: 'rgba(245,196,108,0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0',
                    width: '34px',
                    height: '34px',
                    borderRadius: '17px',
                    background: 'rgba(245,196,108,0.16)',
                    color: 'var(--amberT)',
                  }}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '15px', fontWeight: '500' }}>{v.dash?.missedTitle}</span>
                  <span style={{ fontSize: '13px', lineHeight: '1.45', color: 'var(--ink2)', textWrap: 'pretty' }}>
                    {v.dash?.missedSub}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={v.dash?.missedDo}
                  style={{
                    flex: '1.3 1 0',
                    height: '44px',
                    border: '0',
                    borderRadius: '14px',
                    background: '#F5C46C',
                    color: '#1E1400',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Do it today
                </button>
                <button
                  type="button"
                  onClick={v.dash?.missedSkip}
                  style={{
                    flex: '1 1 0',
                    height: '44px',
                    border: '1px solid var(--line)',
                    borderRadius: '14px',
                    background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                >
                  Skip it
                </button>
              </div>
            </section>
          </>
        ) : null}
        <section
          aria-label="Today's suggested workout"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            padding: '22px',
            borderRadius: '28px',
            border: '1px solid rgba(64,219,168,0.22)',
            background: 'linear-gradient(160deg, rgba(64,219,168,0.14), rgba(64,219,168,0.02) 65%)',
            boxShadow: 'inset 0 1px 0 rgba(var(--w), calc(0.06 * var(--wa)))',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                This week
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '2px' }}>
              {(v.dash?.week ?? []).map((w: any, $index: number) => (
                <Fragment key={$index}>
                  <button
                    type="button"
                    onClick={w?.pick}
                    aria-label={w?.aria}
                    aria-pressed={w?.on}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '5px',
                      minWidth: '0',
                      padding: '2px 0',
                      border: '0',
                      background: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      style={css(
                        `${w?.wdStyle ?? ''} font-family: 'Geist Mono', monospace; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase;`,
                      )}
                    >
                      {w?.wd}
                    </span>
                    <span
                      style={css(
                        `${w?.style ?? ''} display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 18px; font-size: 13px; font-weight: 600; font-variant-numeric: tabular-nums; transition: box-shadow 0.2s;`,
                      )}
                    >
                      {w?.num}
                    </span>
                    <span style={{ fontSize: '10px', color: 'var(--ink3)' }}>{w?.tag}</span>
                  </button>
                </Fragment>
              ))}
            </div>
          </div>
          {v.dash?.schedClosed ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <div
                      style={css(
                        `${v.dash?.cardLabelStyle ?? ''} font-family: 'Geist Mono', monospace; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;`,
                      )}
                    >
                      {v.dash?.cardLabel}
                    </div>
                    {v.dash?.showEditBtn ? (
                      <>
                        <button
                          type="button"
                          onClick={v.dash?.toggleEdit}
                          aria-pressed={v.dash?.editing}
                          style={css(
                            `${v.dash?.editStyle ?? ''} min-height: 36px; padding: 0 14px; border-radius: 18px; border-width: 1px; border-style: solid; font-size: 13px; font-weight: 500; cursor: pointer;`,
                          )}
                        >
                          {v.dash?.editLabel}
                        </button>
                      </>
                    ) : null}
                  </div>{' '}
                  {v.dash?.showChips ? (
                    <>
                      <div
                        role="group"
                        aria-label="Workout type for this day"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
                          gap: '3px',
                          marginTop: '12px',
                          padding: '4px',
                          borderRadius: '16px',
                          border: '1px solid var(--line)',
                          background: 'rgba(var(--k), calc(0.3 * var(--ka)))',
                        }}
                      >
                        {(v.dash?.chips ?? []).map((c: any, $index: number) => (
                          <Fragment key={$index}>
                            <button
                              type="button"
                              aria-pressed={c?.on}
                              onClick={c?.pick}
                              style={css(
                                `${c?.style ?? ''} min-height: 40px; padding: 0; border: 0; border-radius: 12px; font-size: 13px; font-weight: 500; cursor: pointer;`,
                              )}
                            >
                              {c?.label}
                            </button>
                          </Fragment>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
                {v.dash?.isToday ? (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      {v.dash?.hasMemo ? (
                        <>
                          <div
                            role="status"
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '12px',
                              padding: '14px',
                              borderRadius: '18px',
                              border: '1px solid rgba(255,107,87,0.35)',
                              background: 'rgba(255,107,87,0.08)',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                              <span
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: '0',
                                  width: '30px',
                                  height: '30px',
                                  borderRadius: '15px',
                                  background: '#FF6B57',
                                }}
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#1A0703"
                                  strokeWidth="2.8"
                                  strokeLinecap="round"
                                  aria-hidden="true"
                                >
                                  <path d="M7 7l10 10M17 7L7 17" />
                                </svg>
                              </span>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                                <span style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.35' }}>{v.dash?.memoTitle}</span>
                                <span style={{ fontSize: '12.5px', lineHeight: '1.4', color: 'var(--ink2)' }}>{v.dash?.memoSub}</span>
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              {v.dash?.memoCanAdd ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={v.dash?.memoAdd}
                                    style={{
                                      flex: '1 1 0',
                                      height: '40px',
                                      border: '0',
                                      borderRadius: '12px',
                                      background: '#FF6B57',
                                      color: '#1A0703',
                                      fontSize: '13px',
                                      fontWeight: '600',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    Add to today
                                  </button>
                                </>
                              ) : null}
                              <button
                                type="button"
                                onClick={v.dash?.memoLater}
                                style={{
                                  flex: '1 1 0',
                                  height: '40px',
                                  border: '1px solid var(--line)',
                                  borderRadius: '12px',
                                  background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                  fontSize: '13px',
                                  fontWeight: '500',
                                  cursor: 'pointer',
                                }}
                              >
                                Remind me next time
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={v.dash?.memoStop}
                              style={{
                                alignSelf: 'center',
                                minHeight: '28px',
                                marginTop: '-4px',
                                padding: '0 6px',
                                border: '0',
                                background: 'none',
                                fontSize: '12.5px',
                                fontWeight: '500',
                                color: 'var(--ink3)',
                                cursor: 'pointer',
                              }}
                            >
                              Don't remind me again
                            </button>
                          </div>
                        </>
                      ) : null}
                      <ol style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', margin: '0', padding: '0' }}>
                        {(v.dash?.items ?? []).map((it: any, $index: number) => (
                          <Fragment key={$index}>
                            <li
                              style={css(
                                `display: flex; flex-direction: column; padding: 2px 8px 2px 14px; border-radius: 18px; border-width: 1px; border-style: solid; transition: border-color 0.2s, background 0.2s; ${it?.cardStyle ?? ''}`,
                              )}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '52px' }}>
                                {it?.view ? (
                                  <>
                                    <button
                                      type="button"
                                      role="checkbox"
                                      aria-checked={it?.sel}
                                      aria-label={it?.radioLabel}
                                      onClick={it?.radioClick}
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
                                          `${it?.radioStyle ?? ''} display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 11px; border-width: 1.5px; border-style: solid; transition: all 0.15s;`,
                                        )}
                                      >
                                        <span style={css(`${it?.dotStyle ?? ''} width: 10px; height: 10px; border-radius: 5px;`)} />
                                        {it?.done ? (
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
                                        {it?.skippedX ? (
                                          <>
                                            <svg
                                              width="12"
                                              height="12"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="#1A0703"
                                              strokeWidth="3"
                                              strokeLinecap="round"
                                              aria-hidden="true"
                                            >
                                              <path d="M7 7l10 10M17 7L7 17" />
                                            </svg>
                                          </>
                                        ) : null}
                                      </span>
                                    </button>
                                  </>
                                ) : null}
                                <span
                                  style={{
                                    flexShrink: '0',
                                    marginRight: '-6px',
                                    fontFamily: "'Geist Mono', monospace",
                                    fontSize: '12px',
                                    color: 'var(--ink3)',
                                  }}
                                >
                                  {it?.n}
                                </span>
                                {it?.view ? (
                                  <>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: '1', minWidth: '0' }}>
                                      <button
                                        type="button"
                                        onClick={it?.nameClick}
                                        style={{
                                          flexGrow: '1',
                                          minWidth: '0',
                                          minHeight: '48px',
                                          padding: '0',
                                          border: '0',
                                          background: 'none',
                                          textAlign: 'left',
                                          fontSize: '16px',
                                          fontWeight: '500',
                                          cursor: 'pointer',
                                          whiteSpace: 'nowrap',
                                          overflow: 'hidden',
                                          textOverflow: 'ellipsis',
                                        }}
                                      >
                                        {it?.name}
                                      </button>
                                      <span
                                        style={css(
                                          `${it?.progStyle ?? ''} flex-shrink: 0; font-family: 'Geist Mono', monospace; font-size: 11px; letter-spacing: 0.06em;`,
                                        )}
                                      >
                                        {it?.prog}
                                      </span>
                                      <button
                                        type="button"
                                        onClick={it?.toggle}
                                        aria-expanded={it?.open}
                                        aria-label={`How to do ${it?.name ?? ''}`}
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          flexShrink: '0',
                                          width: '40px',
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
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '16px',
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
                                            style={css(`${it?.chev ?? ''} transition: transform 0.2s;`)}
                                          >
                                            <path d="M6 9l6 6 6-6" />
                                          </svg>
                                        </span>
                                      </button>
                                    </div>
                                  </>
                                ) : null}
                                {v.dash?.editing ? (
                                  <>
                                    <input
                                      className="focus-2"
                                      type="text"
                                      aria-label={`Exercise ${it?.n ?? ''} name`}
                                      value={it?.name ?? ''}
                                      onChange={it?.setName}
                                      style={{
                                        flexGrow: '1',
                                        minWidth: '0',
                                        height: '44px',
                                        padding: '0 12px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--line)',
                                        background: 'rgba(var(--k), calc(0.25 * var(--ka)))',
                                        fontSize: '15px',
                                        outline: 'none',
                                      }}
                                    />{' '}
                                    <button
                                      type="button"
                                      onClick={it?.remove}
                                      aria-label={`Delete ${it?.name ?? ''}`}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: '0',
                                        width: '44px',
                                        height: '44px',
                                        border: '1px solid rgba(255,138,122,0.25)',
                                        borderRadius: '12px',
                                        background: 'rgba(255,138,122,0.06)',
                                        color: 'var(--danger)',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <svg
                                        width="17"
                                        height="17"
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
                                    </button>
                                  </>
                                ) : null}
                              </div>
                              {it?.showGuide ? (
                                <>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '14px',
                                      margin: '2px 0 14px',
                                      padding: '14px',
                                      borderRadius: '20px',
                                      border: '1px solid var(--line)',
                                      background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: 'relative',
                                        height: '196px',
                                        borderRadius: '14px',
                                        overflow: 'hidden',
                                        border: '1px solid var(--line)',
                                        background:
                                          'radial-gradient(100% 100% at 50% 0%, rgba(64,219,168,0.08), rgba(64,219,168,0)), var(--well)',
                                      }}
                                    >
                                      {it?.illLoading ? (
                                        <>
                                          <div
                                            style={{
                                              position: 'absolute',
                                              inset: '0',
                                              display: 'flex',
                                              flexDirection: 'column',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              gap: '10px',
                                              fontSize: '13px',
                                              color: 'var(--ink2)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '4px',
                                                background: 'var(--acc)',
                                                boxShadow: '0 0 12px var(--acc)',
                                              }}
                                            />
                                            {it?.illMsg}
                                          </div>
                                        </>
                                      ) : null}{' '}
                                      {it?.illPhoto ? (
                                        <>
                                          <div
                                            role="img"
                                            aria-label={`${it?.name ?? ''}, start position`}
                                            style={css(
                                              `${it?.bg0 ?? ''} position: absolute; inset: 0; background-size: cover; background-position: center; transition: opacity 0.6s ease;`,
                                            )}
                                          />{' '}
                                          <div
                                            role="img"
                                            aria-label={`${it?.name ?? ''}, finish position`}
                                            style={css(
                                              `${it?.bg1 ?? ''} position: absolute; inset: 0; background-size: cover; background-position: center; transition: opacity 0.6s ease;`,
                                            )}
                                          />{' '}
                                          <span
                                            style={{
                                              position: 'absolute',
                                              left: '10px',
                                              bottom: '10px',
                                              padding: '4px 9px',
                                              borderRadius: '8px',
                                              background: 'var(--chip)',
                                              fontFamily: "'Geist Mono', monospace",
                                              fontSize: '10.5px',
                                              letterSpacing: '0.1em',
                                              textTransform: 'uppercase',
                                              color: 'var(--accT)',
                                            }}
                                          >
                                            {it?.illLabel}
                                          </span>
                                        </>
                                      ) : null}{' '}
                                      {it?.illSvg ? (
                                        <>
                                          <div
                                            role="img"
                                            aria-label={`AI illustration of ${it?.name ?? ''}`}
                                            style={css(
                                              `${it?.svgBg ?? ''} position: absolute; inset: 10px; background-size: contain; background-repeat: no-repeat; background-position: center;`,
                                            )}
                                          />{' '}
                                          <span
                                            style={{
                                              position: 'absolute',
                                              left: '10px',
                                              bottom: '10px',
                                              padding: '4px 9px',
                                              borderRadius: '8px',
                                              background: 'var(--chip)',
                                              fontFamily: "'Geist Mono', monospace",
                                              fontSize: '10.5px',
                                              letterSpacing: '0.1em',
                                              color: 'var(--cyanT)',
                                            }}
                                          >
                                            AI ILLUSTRATION
                                          </span>
                                        </>
                                      ) : null}{' '}
                                      {it?.illNone ? (
                                        <>
                                          <div
                                            style={{
                                              position: 'absolute',
                                              inset: '0',
                                              display: 'flex',
                                              flexDirection: 'column',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              gap: '10px',
                                              fontSize: '13px',
                                              color: 'var(--ink2)',
                                            }}
                                          >
                                            No illustration found.
                                            <button
                                              type="button"
                                              onClick={it?.illRetry}
                                              style={{
                                                minHeight: '36px',
                                                padding: '0 14px',
                                                border: '1px solid var(--line)',
                                                borderRadius: '18px',
                                                background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                                fontSize: '13px',
                                                fontWeight: '500',
                                                cursor: 'pointer',
                                              }}
                                            >
                                              Try again
                                            </button>
                                          </div>
                                        </>
                                      ) : null}
                                    </div>
                                    {it?.loading ? (
                                      <>
                                        <div
                                          style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            fontSize: '14px',
                                            color: 'var(--ink2)',
                                          }}
                                        >
                                          <span
                                            style={{
                                              width: '8px',
                                              height: '8px',
                                              borderRadius: '4px',
                                              background: 'var(--acc)',
                                              boxShadow: '0 0 12px var(--acc)',
                                            }}
                                          />
                                          Writing a form guide with AI…
                                        </div>
                                      </>
                                    ) : null}
                                    {it?.failed ? (
                                      <>
                                        <div
                                          style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: '10px',
                                            fontSize: '14px',
                                            color: 'var(--ink2)',
                                          }}
                                        >
                                          <span>Couldn't load a guide.</span>
                                          <button
                                            type="button"
                                            onClick={it?.retry}
                                            style={{
                                              minHeight: '36px',
                                              padding: '0 14px',
                                              border: '1px solid var(--line)',
                                              borderRadius: '18px',
                                              background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                              fontSize: '13px',
                                              fontWeight: '500',
                                              cursor: 'pointer',
                                            }}
                                          >
                                            Try again
                                          </button>
                                        </div>
                                      </>
                                    ) : null}
                                    {it?.ready ? (
                                      <>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                                            <span
                                              style={{
                                                fontFamily: "'Geist Mono', monospace",
                                                fontSize: '10.5px',
                                                letterSpacing: '0.14em',
                                                textTransform: 'uppercase',
                                                color: 'var(--ink3)',
                                              }}
                                            >
                                              Targets
                                            </span>
                                            <span style={{ fontSize: '14px', color: 'var(--accT)' }}>{it?.muscles}</span>
                                            {it?.ai ? (
                                              <>
                                                <span
                                                  style={{
                                                    marginLeft: 'auto',
                                                    padding: '3px 8px',
                                                    borderRadius: '8px',
                                                    background: 'rgba(108,203,245,0.12)',
                                                    fontFamily: "'Geist Mono', monospace",
                                                    fontSize: '10.5px',
                                                    letterSpacing: '0.1em',
                                                    color: 'var(--cyanT)',
                                                  }}
                                                >
                                                  AI GUIDE
                                                </span>
                                              </>
                                            ) : null}
                                          </div>
                                          <ol
                                            style={{
                                              display: 'flex',
                                              flexDirection: 'column',
                                              gap: '10px',
                                              listStyle: 'none',
                                              margin: '0',
                                              padding: '0',
                                            }}
                                          >
                                            {(it?.steps ?? []).map((st: any, $index: number) => (
                                              <Fragment key={$index}>
                                                <li
                                                  style={{
                                                    display: 'flex',
                                                    gap: '12px',
                                                    fontSize: '14px',
                                                    lineHeight: '1.5',
                                                    color: 'var(--ink)',
                                                    textWrap: 'pretty',
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      flexShrink: '0',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center',
                                                      width: '22px',
                                                      height: '22px',
                                                      borderRadius: '11px',
                                                      border: '1px solid rgba(64,219,168,0.35)',
                                                      fontFamily: "'Geist Mono', monospace",
                                                      fontSize: '11px',
                                                      color: 'var(--accT)',
                                                    }}
                                                  >
                                                    {st?.n}
                                                  </span>
                                                  <span>{st?.text}</span>
                                                </li>
                                              </Fragment>
                                            ))}
                                          </ol>
                                          <div
                                            style={{
                                              padding: '12px 14px',
                                              borderRadius: '14px',
                                              background: 'rgba(64,219,168,0.07)',
                                              fontSize: '14px',
                                              lineHeight: '1.5',
                                              color: 'var(--ink2)',
                                              textWrap: 'pretty',
                                            }}
                                          >
                                            <span style={{ fontWeight: '600', color: 'var(--ink)' }}>Form tip ·</span>
                                            {it?.tip}
                                          </div>
                                        </div>
                                      </>
                                    ) : null}
                                  </div>
                                </>
                              ) : null}
                            </li>
                          </Fragment>
                        ))}
                      </ol>
                      {v.dash?.empty ? (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '10px',
                              marginTop: '-10px',
                              padding: '26px 16px',
                              borderRadius: '20px',
                              border: '1px dashed rgba(64,219,168,0.32)',
                              background: 'rgba(64,219,168,0.04)',
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
                                border: '1px solid rgba(64,219,168,0.35)',
                                background: 'rgba(64,219,168,0.08)',
                                color: 'var(--accT)',
                              }}
                            >
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="M4 7.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 10h16M8.5 3.5v4M15.5 3.5v4M12 13v5M9.5 15.5h5" />
                              </svg>
                            </span>
                            <span style={{ marginTop: '4px', fontSize: '17px', fontWeight: '500', letterSpacing: '-0.01em' }}>
                              No workout planned yet
                            </span>
                            <span
                              style={{ maxWidth: '250px', fontSize: '13px', lineHeight: '1.5', color: 'var(--ink2)', textWrap: 'pretty' }}
                            >
                              {v.dash?.emptySub}
                            </span>
                          </div>
                        </>
                      ) : null}
                      {v.dash?.editing ? (
                        <>
                          <div style={{ display: 'flex', gap: '8px', marginTop: '-6px' }}>
                            <input
                              className="focus-3"
                              type="text"
                              placeholder="Add an exercise, e.g. Hip Thrust"
                              aria-label="New exercise name"
                              value={v.dash?.newName ?? ''}
                              onChange={v.dash?.setNew}
                              onKeyDown={v.dash?.newKey}
                              style={{
                                flexGrow: '1',
                                minWidth: '0',
                                height: '48px',
                                padding: '0 14px',
                                borderRadius: '14px',
                                border: '1px dashed rgba(64,219,168,0.4)',
                                background: 'rgba(64,219,168,0.04)',
                                fontSize: '15px',
                                outline: 'none',
                              }}
                            />
                            <button
                              type="button"
                              onClick={v.dash?.add}
                              style={css(
                                `${v.dash?.addStyle ?? ''} flex-shrink: 0; height: 48px; padding: 0 18px; border: 0; border-radius: 14px; background: var(--acc); color: var(--accInk); font-size: 15px; font-weight: 600; cursor: pointer;`,
                              )}
                            >
                              Add
                            </button>
                          </div>
                        </>
                      ) : null}
                      <a
                        href={v.dash?.startHref}
                        onClick={v.dash?.start}
                        aria-disabled={v.dash?.startOff}
                        style={css(
                          `${v.dash?.startStyle ?? ''} display: flex; align-items: center; justify-content: center; gap: 8px; height: 54px; border-radius: 18px; background: var(--acc); color: var(--accInk); font-size: 16px; font-weight: 600; box-shadow: 0 10px 36px -10px rgba(64,219,168,0.6);`,
                        )}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M7 4.5v15l12.5-7.5z" />
                        </svg>
                        {v.dash?.startLabel}
                      </a>
                    </div>
                  </>
                ) : null}
                {v.dash?.notToday ? (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      {v.dash?.isMissedDay ? (
                        <>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                padding: '16px',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,107,87,0.4)',
                                background: 'rgba(255,107,87,0.1)',
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
                                  background: '#FF6B57',
                                  boxShadow: '0 0 24px -6px rgba(255,107,87,0.8)',
                                }}
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#1A0703"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  aria-hidden="true"
                                >
                                  <path d="M7 7l10 10M17 7L7 17" />
                                </svg>
                              </span>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                                <span style={{ fontSize: '17px', fontWeight: '500', letterSpacing: '-0.01em' }}>{v.dash?.missTitle}</span>
                                <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>{v.dash?.missSub}</span>
                              </div>
                            </div>
                            <ol
                              style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', margin: '0', padding: '0' }}
                            >
                              {(v.dash?.missRows ?? []).map((mr: any, $index: number) => (
                                <Fragment key={$index}>
                                  <li
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '12px',
                                      minHeight: '52px',
                                      padding: '0 16px 0 14px',
                                      borderRadius: '18px',
                                      border: '1px solid rgba(255,107,87,0.18)',
                                      background: 'rgba(255,107,87,0.04)',
                                    }}
                                  >
                                    <span
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: '0',
                                        width: '22px',
                                        height: '22px',
                                        borderRadius: '11px',
                                        border: '1.5px solid rgba(255,107,87,0.6)',
                                      }}
                                    >
                                      <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#FF6B57"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        aria-hidden="true"
                                      >
                                        <path d="M7 7l10 10M17 7L7 17" />
                                      </svg>
                                    </span>
                                    <span
                                      style={{
                                        flexShrink: '0',
                                        fontFamily: "'Geist Mono', monospace",
                                        fontSize: '12px',
                                        color: 'var(--ink3)',
                                      }}
                                    >
                                      {mr?.n}
                                    </span>
                                    <span
                                      style={{
                                        flexGrow: '1',
                                        minWidth: '0',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        color: 'var(--ink2)',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                      }}
                                    >
                                      {mr?.name}
                                    </span>
                                    <span
                                      style={{
                                        flexShrink: '0',
                                        fontFamily: "'Geist Mono', monospace",
                                        fontSize: '12px',
                                        color: 'var(--ink3)',
                                      }}
                                    >
                                      {mr?.meta}
                                    </span>
                                  </li>
                                </Fragment>
                              ))}
                            </ol>
                            {v.dash?.isRecovered ? (
                              <>
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '14px 16px',
                                    borderRadius: '18px',
                                    border: '1px solid rgba(64,219,168,0.35)',
                                    background: 'rgba(64,219,168,0.08)',
                                  }}
                                >
                                  <span
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: '0',
                                      width: '30px',
                                      height: '30px',
                                      borderRadius: '15px',
                                      background: '#40DBA8',
                                    }}
                                  >
                                    <svg
                                      width="15"
                                      height="15"
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
                                  </span>
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', flexGrow: '1', minWidth: '0' }}>
                                    <span style={{ fontSize: '14px', fontWeight: '500' }}>{v.dash?.recTitle}</span>
                                    <span style={{ fontSize: '12.5px', color: 'var(--ink2)' }}>It's on your schedule now.</span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={v.dash?.recUndo}
                                    style={{
                                      flexShrink: '0',
                                      minHeight: '36px',
                                      padding: '0 12px',
                                      border: '1px solid var(--line)',
                                      borderRadius: '18px',
                                      background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                                      fontSize: '13px',
                                      fontWeight: '500',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    Undo
                                  </button>
                                </div>
                              </>
                            ) : null}
                            {v.dash?.canRecover ? (
                              <>
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    padding: '16px',
                                    borderRadius: '20px',
                                    border: '1px solid var(--line)',
                                    background: 'rgba(var(--k), calc(0.25 * var(--ka)))',
                                  }}
                                >
                                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                      <span
                                        style={{
                                          fontFamily: "'Geist Mono', monospace",
                                          fontSize: '10.5px',
                                          letterSpacing: '0.14em',
                                          textTransform: 'uppercase',
                                          color: 'var(--ink3)',
                                        }}
                                      >
                                        Recover this workout
                                      </span>
                                      <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>Pick a day to make it up.</span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={v.dash?.recClose}
                                      aria-label="Close and don't recover"
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: '0',
                                        width: '32px',
                                        height: '32px',
                                        margin: '-6px -6px 0 0',
                                        padding: '0',
                                        border: '1px solid var(--line)',
                                        borderRadius: '16px',
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
                                        strokeWidth="2.4"
                                        strokeLinecap="round"
                                        aria-hidden="true"
                                      >
                                        <path d="M7 7l10 10M17 7L7 17" />
                                      </svg>
                                    </button>
                                  </div>
                                  <div
                                    role="radiogroup"
                                    aria-label="Recover on"
                                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}
                                  >
                                    {(v.dash?.recDays ?? []).map((rd: any, $index: number) => (
                                      <Fragment key={$index}>
                                        <button
                                          type="button"
                                          role="radio"
                                          aria-checked={rd?.on}
                                          onClick={rd?.pick}
                                          style={css(
                                            `${rd?.style ?? ''} display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 10px 4px; border-radius: 16px; border-width: 1.5px; border-style: solid; cursor: pointer;`,
                                          )}
                                        >
                                          <span
                                            style={{
                                              fontFamily: "'Geist Mono', monospace",
                                              fontSize: '10px',
                                              letterSpacing: '0.08em',
                                              textTransform: 'uppercase',
                                              opacity: '0.8',
                                            }}
                                          >
                                            {rd?.wd}
                                          </span>
                                          <span
                                            style={{
                                              fontSize: '20px',
                                              fontWeight: '400',
                                              letterSpacing: '-0.02em',
                                              fontVariantNumeric: 'tabular-nums',
                                            }}
                                          >
                                            {rd?.num}
                                          </span>
                                          <span style={{ fontSize: '11px', opacity: '0.8' }}>{rd?.now}</span>
                                        </button>
                                      </Fragment>
                                    ))}
                                  </div>
                                  <span style={{ fontSize: '12.5px', lineHeight: '1.45', color: 'var(--ink3)', textWrap: 'pretty' }}>
                                    {v.dash?.recNote}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={v.dash?.recDo}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      gap: '8px',
                                      height: '52px',
                                      border: '0',
                                      borderRadius: '16px',
                                      background: 'var(--acc)',
                                      color: 'var(--accInk)',
                                      fontSize: '15px',
                                      fontWeight: '600',
                                      boxShadow: '0 10px 36px -10px rgba(64,219,168,0.6)',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      aria-hidden="true"
                                    >
                                      <path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4" />
                                    </svg>
                                    {v.dash?.recLabel}
                                  </button>
                                </div>
                              </>
                            ) : null}
                          </div>
                        </>
                      ) : null}
                      {v.dash?.notMissedDay ? (
                        <>
                          {v.dash?.hasRows ? (
                            <>
                              <ol
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '8px',
                                  listStyle: 'none',
                                  margin: '0',
                                  padding: '0',
                                }}
                              >
                                {(v.dash?.dayRows ?? []).map((dr: any, $index: number) => (
                                  <Fragment key={$index}>
                                    <li
                                      style={css(
                                        `${dr?.style ?? ''} display: flex; align-items: center; gap: 12px; min-height: 56px; padding: 0 16px 0 14px; border-radius: 18px; border: 1px solid var(--line); background: rgba(var(--w), calc(0.03 * var(--wa)));`,
                                      )}
                                    >
                                      <span
                                        style={css(
                                          `${dr?.dot ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 22px; height: 22px; border-radius: 11px; border-width: 1.5px; border-style: solid;`,
                                        )}
                                      >
                                        {dr?.done ? (
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
                                      <span
                                        style={{
                                          flexShrink: '0',
                                          fontFamily: "'Geist Mono', monospace",
                                          fontSize: '12px',
                                          color: 'var(--ink3)',
                                        }}
                                      >
                                        {dr?.n}
                                      </span>
                                      <span
                                        style={{
                                          flexGrow: '1',
                                          minWidth: '0',
                                          fontSize: '16px',
                                          fontWeight: '500',
                                          whiteSpace: 'nowrap',
                                          overflow: 'hidden',
                                          textOverflow: 'ellipsis',
                                        }}
                                      >
                                        {dr?.name}
                                      </span>
                                      <span
                                        style={{
                                          flexShrink: '0',
                                          fontFamily: "'Geist Mono', monospace",
                                          fontSize: '12px',
                                          color: 'var(--ink2)',
                                        }}
                                      >
                                        {dr?.meta}
                                      </span>
                                    </li>
                                  </Fragment>
                                ))}
                              </ol>
                            </>
                          ) : null}{' '}
                          {v.dash?.noRows ? (
                            <>
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  gap: '10px',
                                  padding: '26px 16px',
                                  borderRadius: '20px',
                                  border: '1px dashed rgba(64,219,168,0.32)',
                                  background: 'rgba(64,219,168,0.04)',
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
                                    border: '1px solid rgba(64,219,168,0.35)',
                                    background: 'rgba(64,219,168,0.08)',
                                    color: 'var(--accT)',
                                  }}
                                >
                                  <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                  >
                                    <path d="M4 7.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 10h16M8.5 3.5v4M15.5 3.5v4M12 13v5M9.5 15.5h5" />
                                  </svg>
                                </span>
                                <span style={{ marginTop: '4px', fontSize: '17px', fontWeight: '500', letterSpacing: '-0.01em' }}>
                                  {v.dash?.dayEmptyTitle}
                                </span>
                                <span
                                  style={{
                                    maxWidth: '250px',
                                    fontSize: '13px',
                                    lineHeight: '1.5',
                                    color: 'var(--ink2)',
                                    textWrap: 'pretty',
                                  }}
                                >
                                  {v.dash?.dayEmptySub}
                                </span>
                              </div>
                            </>
                          ) : null}
                        </>
                      ) : null}
                      {v.dash?.isFuture ? (
                        <>
                          <a
                            href="#log-workout"
                            onClick={v.dash?.dayAdd}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px',
                              height: '54px',
                              borderRadius: '18px',
                              background: 'var(--acc)',
                              color: 'var(--accInk)',
                              fontSize: '16px',
                              fontWeight: '600',
                              boxShadow: '0 10px 36px -10px rgba(64,219,168,0.6)',
                            }}
                          >
                            + Add workout
                          </a>
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ) : null}
        </section>
        <section
          aria-label="Today at a glance"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
            borderRadius: '28px',
            border: '1px solid var(--line)',
            background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
            boxShadow: 'inset 0 1px 0 rgba(var(--w), calc(0.04 * var(--wa)))',
          }}
        >
          <svg width="140" height="140" viewBox="0 0 148 148" fill="none" aria-hidden="true" style={{ flexShrink: '0' }}>
            <circle cx="74" cy="74" r="66" stroke="rgba(var(--w), calc(0.06 * var(--wa)))" strokeWidth="10" />{' '}
            <circle cx="74" cy="74" r="52" stroke="rgba(var(--w), calc(0.06 * var(--wa)))" strokeWidth="10" />{' '}
            <circle cx="74" cy="74" r="38" stroke="rgba(var(--w), calc(0.06 * var(--wa)))" strokeWidth="10" />{' '}
            <circle
              cx="74"
              cy="74"
              r="66"
              stroke="#40DBA8"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="414.7 414.7"
              transform="rotate(-90 74 74)"
            />{' '}
            <circle
              cx="74"
              cy="74"
              r="52"
              stroke="#6CCBF5"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="173 327"
              transform="rotate(-90 74 74)"
            />{' '}
            <circle
              cx="74"
              cy="74"
              r="38"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="136 239"
              transform="rotate(-90 74 74)"
              style={{ stroke: 'var(--ink)' }}
            />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '0' }}>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink3)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '3px', background: '#40DBA8' }} />
                This week
              </div>
              <div style={{ fontSize: '20px', fontWeight: '400', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
                5/5 <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>workouts logged</span>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink3)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '3px', background: '#6CCBF5' }} />
                Protein today
              </div>
              <div style={{ fontSize: '20px', fontWeight: '400', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
                74g <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>/ 140g</span>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink3)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '3px', background: 'var(--ink)' }} />
                Current streak
              </div>
              <div style={{ fontSize: '20px', fontWeight: '400', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
                4 <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>days in a row</span>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-label="Close your protein gap"
          style={{
            padding: '20px 20px 8px',
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
            Close your protein gap
          </div>{' '}
          <p style={{ margin: '8px 0 10px', fontSize: '14px', color: 'var(--ink2)' }}>66g protein remaining today — try one of these:</p>{' '}
          <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                borderTop: '1px solid var(--line)',
              }}
            >
              <span style={{ fontSize: '15px' }}>Grilled chicken breast (150g)</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', color: 'var(--accT)' }}>46g</span>
            </li>{' '}
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                borderTop: '1px solid var(--line)',
              }}
            >
              <span style={{ fontSize: '15px' }}>Turkey breast (150g)</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', color: 'var(--accT)' }}>42g</span>
            </li>{' '}
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                borderTop: '1px solid var(--line)',
              }}
            >
              <span style={{ fontSize: '15px' }}>Salmon fillet (150g)</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', color: 'var(--accT)' }}>34g</span>
            </li>{' '}
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                borderTop: '1px solid var(--line)',
              }}
            >
              <span style={{ fontSize: '15px' }}>2 whole eggs + 3 egg whites</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', color: 'var(--accT)' }}>27g</span>
            </li>{' '}
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                borderTop: '1px solid var(--line)',
              }}
            >
              <span style={{ fontSize: '15px' }}>Canned tuna (1 can)</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', color: 'var(--accT)' }}>27g</span>
            </li>
          </ul>
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
        {(v.nav?.dash ?? []).map((i: any, $index: number) => (
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
