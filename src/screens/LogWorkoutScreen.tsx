// Generated from project/Gym Tracker.dc.html (#log-workout). Values come from AppLogic.renderVals().
import { Fragment } from 'react';
import { css } from '../lib/css';
import type { ScreenProps } from './types';

export function LogWorkoutScreen({ v }: ScreenProps) {
  return (
    <div
      className="screen"
      id="log-workout"
      style={{ background: 'radial-gradient(140% 30% at 50% 0%, rgba(64,219,168,0.08), rgba(64,219,168,0) 60%), var(--bg)' }}
    >
      <main style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '8px 20px 120px' }}>
        <header style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px', paddingTop: '6px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h1 style={{ margin: '0', fontSize: '30px', fontWeight: '300', lineHeight: '1.1', letterSpacing: '-0.035em' }}>
              Log a workout
            </h1>
            <p style={{ margin: '0', fontSize: '13px', color: 'var(--ink2)' }}>Synced with your dashboard</p>
          </div>
          <button
            type="button"
            onClick={v.vx?.openImp}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexShrink: '0',
              height: '40px',
              padding: '0 14px',
              borderRadius: '20px',
              border: '1px solid rgba(108,203,245,0.35)',
              background: 'rgba(108,203,245,0.08)',
              fontSize: '13px',
              fontWeight: '500',
              color: 'var(--cyanT)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l1.9 5.6L19.5 9.5 13.9 11.4 12 17l-1.9-5.6L4.5 9.5l5.6-1.9z" />
            </svg>
            Import
          </button>
        </header>
        <section
          aria-label="Weekly schedule"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '16px 14px 14px',
            borderRadius: '22px',
            border: '1px solid var(--line)',
            background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
            <button
              type="button"
              onClick={v.sch?.prev}
              aria-label="Previous week"
              style={css(
                `${v.sch?.prevStyle ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; padding: 0; border: 1px solid var(--line); border-radius: 18px; background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); cursor: pointer;`,
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
                {v.sch?.weekName}
              </span>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>{v.sch?.range}</span>
            </div>
            <button
              type="button"
              onClick={v.sch?.next}
              aria-label="Next week"
              style={css(
                `${v.sch?.nextStyle ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; padding: 0; border: 1px solid var(--line); border-radius: 18px; background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); cursor: pointer;`,
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '2px' }}>
            {(v.sch?.days ?? []).map((w: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  type="button"
                  onClick={w?.pick}
                  aria-pressed={w?.on}
                  aria-label={w?.aria}
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
                  <span style={css(`${w?.tagStyle ?? ''} font-size: 10px;`)}>{w?.tag}</span>
                </button>
              </Fragment>
            ))}
          </div>
        </section>
        {v.vx?.hasList ? (
          <>
            <div
              role="group"
              aria-label="Split"
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
              {(v.vx?.chips ?? []).map((c: any, $index: number) => (
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
            </div>{' '}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '-4px' }}>
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink3)',
                }}
              >
                {v.vx?.eCount}
              </span>
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={v.vx?.toggleMenu}
                  aria-label="More options"
                  aria-haspopup="menu"
                  aria-expanded={v.vx?.menuOpen}
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="5" cy="12" r="1.8" />
                    <circle cx="12" cy="12" r="1.8" />
                    <circle cx="19" cy="12" r="1.8" />
                  </svg>
                </button>{' '}
                {v.vx?.menuOpen ? (
                  <>
                    <div
                      role="menu"
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        right: '0',
                        zIndex: '30',
                        display: 'flex',
                        flexDirection: 'column',
                        width: 'max-content',
                        padding: '5px',
                        borderRadius: '14px',
                        border: '1px solid var(--line)',
                        background: 'var(--pop)',
                        boxShadow: '0 16px 36px -12px rgba(var(--k), calc(0.7 * var(--ka)))',
                      }}
                    >
                      <button
                        className="hover-6"
                        type="button"
                        role="menuitem"
                        onClick={v.vx?.askDelAll}
                        style={css(
                          `${v.vx?.delitemstyle ?? ''} display: flex; align-items: center; gap: 10px; white-space: nowrap; height: 42px; padding: 0 12px; border: 0; border-radius: 10px; background: transparent; font-size: 14px; font-weight: 500; color: var(--danger); text-align: left; cursor: pointer`,
                        )}
                      >
                        <svg
                          width="16"
                          height="16"
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
                        Delete all exercises
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </>
        ) : null}
        {v.vx?.isEmpty ? (
          <>
            <section
              aria-label="No exercises yet"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '34px 20px 22px',
                borderRadius: '28px',
                border: '1px dashed rgba(64,219,168,0.32)',
                background: 'rgba(64,219,168,0.04)',
                textAlign: 'center',
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
                {v.vx?.emptyTag}
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  marginTop: '6px',
                  borderRadius: '32px',
                  border: '1px solid rgba(64,219,168,0.35)',
                  background: 'rgba(64,219,168,0.08)',
                  color: 'var(--accT)',
                }}
              >
                <svg
                  width="30"
                  height="30"
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
              <span style={{ marginTop: '6px', fontSize: '20px', fontWeight: '400', letterSpacing: '-0.02em' }}>Build your workout</span>
              <span style={{ maxWidth: '260px', fontSize: '14px', lineHeight: '1.5', color: 'var(--ink2)', textWrap: 'pretty' }}>
                Add exercises one by one, or import a plan you already have from a photo or text.
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignSelf: 'stretch', marginTop: '14px' }}>
                <button
                  type="button"
                  onClick={v.vx?.addE}
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
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Add exercise
                </button>
                <button
                  type="button"
                  onClick={v.vx?.openImp}
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
                  >
                    <path d="M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15" />
                  </svg>
                  Import from photo or text
                </button>
              </div>
            </section>
          </>
        ) : null}
        {v.vx?.confirmDelAll ? (
          <>
            <div
              role="alertdialog"
              aria-label="Delete all exercises"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '16px',
                borderRadius: '20px',
                border: '1px solid rgba(255,138,122,0.3)',
                background: 'rgba(255,138,122,0.08)',
              }}
            >
              <span style={{ fontSize: '15px', fontWeight: '500' }}>{v.vx?.delAllTitle}</span>
              <span style={{ marginTop: '-6px', fontSize: '13px', lineHeight: '1.45', color: 'var(--ink2)' }}>
                This removes them from your Dashboard too.
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={v.vx?.cancelDelAll}
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
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={v.vx?.doDelAll}
                  style={{
                    flex: '1 1 0',
                    height: '44px',
                    border: '0',
                    borderRadius: '14px',
                    background: '#FF8A7A',
                    color: '#1A0703',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Delete all
                </button>
              </div>
            </div>
          </>
        ) : null}
        <div data-drag-list="e" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {(v.vx?.exercises ?? []).map((ex: any, $index: number) => (
            <Fragment key={$index}>
              <article
                data-drag-id={ex?.id}
                onPointerDown={ex?.ePress}
                onKeyDown={ex?.eKey}
                style={css(
                  `position: relative; display: flex; align-items: stretch; gap: 2px; padding: 10px 14px 12px 16px; -webkit-touch-callout: none; border-radius: 22px; border: 1px solid var(--line); background: rgba(var(--w), calc(0.03 * var(--wa))); ${ex?.eCardStyle ?? ''}`,
                )}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: '1', minWidth: '0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ flexShrink: '0', fontFamily: "'Geist Mono', monospace", fontSize: '12px', color: 'var(--ink3)' }}>
                      {ex?.n}
                    </span>
                    {ex?.eNormal ? (
                      <>
                        <button
                          type="button"
                          onClick={ex?.eToggle}
                          style={{
                            flexGrow: '1',
                            minWidth: '0',
                            minHeight: '44px',
                            padding: '0 0 0 4px',
                            border: '0',
                            background: 'none',
                            textAlign: 'left',
                            fontSize: '17px',
                            fontWeight: '500',
                            cursor: 'pointer',
                          }}
                        >
                          {ex?.nameOr}
                        </button>
                      </>
                    ) : null}
                    {ex?.eEditing ? (
                      <>
                        <input
                          className="focus-2"
                          type="text"
                          placeholder="Exercise name"
                          aria-label="Exercise name"
                          value={ex?.name ?? ''}
                          onChange={ex?.rename}
                          style={{
                            flexGrow: '1',
                            minWidth: '0',
                            height: '40px',
                            padding: '0 12px',
                            borderRadius: '12px',
                            border: '1px solid var(--line)',
                            background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                            fontSize: '16px',
                            fontWeight: '500',
                            outline: 'none',
                          }}
                        />
                      </>
                    ) : null}
                    <button
                      type="button"
                      onClick={ex?.eEditToggle}
                      style={css(
                        `${ex?.eBtnStyle ?? ''} flex-shrink: 0; min-height: 34px; padding: 0 14px; border-radius: 17px; border-width: 1px; border-style: solid; font-size: 13px; font-weight: 500; cursor: pointer;`,
                      )}
                    >
                      {ex?.eEditLabel}
                    </button>
                    <button
                      type="button"
                      onClick={ex?.eToggle}
                      aria-expanded={ex?.eOpen}
                      aria-label={`Show or hide sets for ${ex?.nameOr ?? ''}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: '0',
                        width: '36px',
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
                          style={css(`${ex?.eChev ?? ''} transition: transform 0.2s;`)}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  {ex?.eClosed ? (
                    <>
                      <button
                        type="button"
                        onClick={ex?.eToggle}
                        style={{
                          margin: '-8px 0 0 26px',
                          minHeight: '28px',
                          padding: '0',
                          border: '0',
                          background: 'none',
                          textAlign: 'left',
                          fontSize: '13px',
                          color: 'var(--ink2)',
                          cursor: 'pointer',
                        }}
                      >
                        {ex?.summary}
                      </button>
                    </>
                  ) : null}
                  {ex?.eOpen ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                          {ex?.eEditing ? (
                            <>
                              <span style={{ flexShrink: '0', width: '28px' }} />
                            </>
                          ) : null}
                          <span style={{ flexShrink: '0', width: '26px' }}>Set</span>
                          <span style={{ flex: '1 1 0', textAlign: 'center' }}>Reps</span>
                          <span style={{ flex: '1 1 0', textAlign: 'center' }}>kg</span>
                        </div>
                        {(ex?.sets ?? []).map((s: any, $index: number) => (
                          <Fragment key={$index}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              {ex?.eEditing ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={s?.remove}
                                    aria-label={`Delete set ${s?.n ?? ''}`}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: '0',
                                      width: '28px',
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
                                        width: '22px',
                                        height: '22px',
                                        borderRadius: '11px',
                                        background: '#FF8A7A',
                                      }}
                                    >
                                      <span style={{ width: '10px', height: '2px', borderRadius: '1px', background: '#1A0703' }} />
                                    </span>
                                  </button>
                                </>
                              ) : null}
                              <span
                                style={{
                                  flexShrink: '0',
                                  width: '26px',
                                  fontFamily: "'Geist Mono', monospace",
                                  fontSize: '13px',
                                  color: 'var(--ink2)',
                                }}
                              >
                                {s?.n}
                              </span>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  flex: '1 1 0',
                                  minWidth: '0',
                                  height: '44px',
                                  borderRadius: '12px',
                                  border: '1px solid var(--line)',
                                  background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                                }}
                              >
                                <button
                                  className="hover-7"
                                  type="button"
                                  onClick={s?.repsDec}
                                  aria-label={`Decrease reps, set ${s?.n ?? ''}`}
                                  style={{
                                    flexShrink: '0',
                                    width: '34px',
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
                                <input
                                  type="number"
                                  placeholder="–"
                                  aria-label={`Set ${s?.n ?? ''} reps`}
                                  value={s?.reps ?? ''}
                                  onChange={s?.setReps}
                                  style={{
                                    flexGrow: '1',
                                    minWidth: '0',
                                    height: '100%',
                                    padding: '0',
                                    border: '0',
                                    background: 'none',
                                    textAlign: 'center',
                                    fontSize: '16px',
                                    fontVariantNumeric: 'tabular-nums',
                                    outline: 'none',
                                  }}
                                />
                                <button
                                  className="hover-7"
                                  type="button"
                                  onClick={s?.repsInc}
                                  aria-label={`Increase reps, set ${s?.n ?? ''}`}
                                  style={{
                                    flexShrink: '0',
                                    width: '34px',
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
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  flex: '1 1 0',
                                  minWidth: '0',
                                  height: '44px',
                                  borderRadius: '12px',
                                  border: '1px solid var(--line)',
                                  background: 'rgba(var(--w), calc(0.03 * var(--wa)))',
                                }}
                              >
                                <button
                                  className="hover-7"
                                  type="button"
                                  onClick={s?.kgDec}
                                  aria-label={`Decrease weight, set ${s?.n ?? ''}`}
                                  style={{
                                    flexShrink: '0',
                                    width: '34px',
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
                                <input
                                  type="number"
                                  placeholder="–"
                                  aria-label={`Set ${s?.n ?? ''} weight`}
                                  value={s?.kg ?? ''}
                                  onChange={s?.setKg}
                                  style={{
                                    flexGrow: '1',
                                    minWidth: '0',
                                    height: '100%',
                                    padding: '0',
                                    border: '0',
                                    background: 'none',
                                    textAlign: 'center',
                                    fontSize: '16px',
                                    fontVariantNumeric: 'tabular-nums',
                                    outline: 'none',
                                  }}
                                />
                                <button
                                  className="hover-7"
                                  type="button"
                                  onClick={s?.kgInc}
                                  aria-label={`Increase weight, set ${s?.n ?? ''}`}
                                  style={{
                                    flexShrink: '0',
                                    width: '34px',
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
                          </Fragment>
                        ))}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                          <button
                            type="button"
                            onClick={ex?.addSet}
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
                            + Add set
                          </button>
                          {ex?.eEditing ? (
                            <>
                              <button
                                type="button"
                                onClick={ex?.deleteEx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
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
                                <svg
                                  width="16"
                                  height="16"
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
                                Delete exercise
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </article>
            </Fragment>
          ))}
        </div>
        {v.vx?.hasList ? (
          <>
            <button
              type="button"
              onClick={v.vx?.addE}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
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
              + Add exercise
            </button>{' '}
            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
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
              Save workout
            </button>
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
        {(v.nav?.log ?? []).map((i: any, $index: number) => (
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
      <div style={css(`${v.vx?.layerStyle ?? ''} position: fixed; inset: 0; z-index: 20; overflow: hidden;`)}>
        <button
          type="button"
          onClick={v.vx?.closeImp}
          aria-label="Close import"
          tabIndex={-1}
          style={css(
            `${v.vx?.scrimStyle ?? ''} position: absolute; inset: 0; padding: 0; border: 0; background: var(--scrim); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); cursor: default; transition: opacity 0.3s;`,
          )}
        />{' '}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="imp-sheet-title"
          style={css(
            `${v.vx?.sheetStyle ?? ''} position: absolute; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; max-height: calc(var(--screen-h) - 24px); border-radius: 32px 32px 0 0; border: 1px solid var(--line); border-bottom: 0; background: var(--pop); box-shadow: 0 -24px 60px -20px rgba(var(--k), calc(0.7 * var(--ka)));`,
          )}
        >
          <div
            onPointerDown={v.vx?.sheetDown}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              flexShrink: '0',
              padding: '10px 20px 10px',
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l1.9 5.6L19.5 9.5 13.9 11.4 12 17l-1.9-5.6L4.5 9.5l5.6-1.9z" />
                  </svg>
                  AI import
                </span>
                <h2 id="imp-sheet-title" style={{ margin: '0', fontSize: '24px', fontWeight: '400', letterSpacing: '-0.025em' }}>
                  {v.vx?.impTitle}
                </h2>
              </div>
              <button
                type="button"
                onClick={v.vx?.closeImp}
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
            {v.imp?.noPopup ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.5', color: 'var(--ink2)', textWrap: 'pretty' }}>
                    Paste your plan or upload a photo of it. AI finds each exercise with its sets, reps and weight.
                  </p>
                  <div
                    role="group"
                    aria-label="Import method"
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
                    {(v.imp?.modes ?? []).map((m: any, $index: number) => (
                      <Fragment key={$index}>
                        <button
                          type="button"
                          aria-pressed={m?.on}
                          onClick={m?.pick}
                          style={css(
                            `${m?.style ?? ''} display: flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; border: 0; border-radius: 12px; font-size: 14px; font-weight: 500; cursor: pointer;`,
                          )}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d={m?.icon} />
                          </svg>
                          {m?.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                  {v.imp?.isText ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <textarea
                          className="focus-8"
                          aria-label="Paste your workout plan"
                          rows={8}
                          placeholder={'Monday – Push\nBench press 4x8 @ 70kg\nOverhead press 3x10\n\nTuesday – Legs\nSquat 5x5 100kg'}
                          value={v.imp?.text ?? ''}
                          onChange={v.imp?.setText}
                          style={{
                            width: '100%',
                            borderRadius: '16px',
                            border: '1px solid var(--line)',
                            background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                            padding: '16px',
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: '13px',
                            lineHeight: '1.6',
                            resize: 'none',
                            outline: 'none',
                          }}
                        />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                          <button
                            type="button"
                            onClick={v.imp?.fillExample}
                            style={{
                              minHeight: '36px',
                              padding: '0',
                              border: '0',
                              background: 'none',
                              fontSize: '13px',
                              fontWeight: '500',
                              color: 'var(--cyanT)',
                              cursor: 'pointer',
                            }}
                          >
                            Try an example
                          </button>
                          {v.imp?.hasText ? (
                            <>
                              <button
                                type="button"
                                onClick={v.imp?.clearText}
                                style={{
                                  minHeight: '36px',
                                  padding: '0',
                                  border: '0',
                                  background: 'none',
                                  fontSize: '13px',
                                  fontWeight: '500',
                                  color: 'var(--ink2)',
                                  cursor: 'pointer',
                                }}
                              >
                                Clear
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </>
                  ) : null}
                  {v.imp?.isImage ? (
                    <>
                      <label
                        htmlFor="imp-file-sheet"
                        style={{
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          minHeight: '220px',
                          padding: '20px',
                          borderRadius: '20px',
                          border: '1px dashed rgba(108,203,245,0.45)',
                          background: 'rgba(var(--k), calc(0.28 * var(--ka)))',
                          overflow: 'hidden',
                          textAlign: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        {v.imp?.hasImg ? (
                          <>
                            <div
                              aria-hidden="true"
                              style={css(
                                `${v.imp?.imgBg ?? ''} position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0.5;`,
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
                            background: 'rgba(108,203,245,0.14)',
                            color: 'var(--cyanT)',
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
                        <span style={{ position: 'relative', fontSize: '15px', fontWeight: '500' }}>{v.imp?.imgTitle}</span>
                        <span style={{ position: 'relative', fontSize: '13px', color: 'var(--ink2)' }}>{v.imp?.imgSub}</span>
                      </label>{' '}
                      <input id="imp-file-sheet" type="file" accept="image/*" onChange={v.imp?.onFile} style={{ display: 'none' }} />
                    </>
                  ) : null}
                  <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5', color: 'var(--ink3)', textWrap: 'pretty' }}>
                    Pounds are converted to kg. Anything missing is left blank for you to fill in.
                  </p>
                  {v.imp?.isError ? (
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
                        {v.imp?.msg}
                      </p>
                    </>
                  ) : null}
                  {v.imp?.isDone ? (
                    <>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          padding: '16px',
                          borderRadius: '20px',
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
                            width: '40px',
                            height: '40px',
                            borderRadius: '20px',
                            background: 'var(--acc)',
                            color: 'var(--accInk)',
                          }}
                        >
                          <svg
                            width="18"
                            height="18"
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
                        <span style={{ fontSize: '14px', lineHeight: '1.45' }}>{v.imp?.msg}</span>
                      </div>
                    </>
                  ) : null}
                  {v.imp?.notDone ? (
                    <>
                      <button
                        type="button"
                        onClick={v.imp?.run}
                        style={css(
                          `${v.imp?.runStyle ?? ''} display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; height: 56px; border: 0; border-radius: 18px; background: #6CCBF5; color: #03131B; font-size: 16px; font-weight: 600; cursor: pointer;`,
                        )}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 2l1.9 5.6L19.5 9.5 13.9 11.4 12 17l-1.9-5.6L4.5 9.5l5.6-1.9zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
                        </svg>
                        {v.imp?.runLabel}
                      </button>
                    </>
                  ) : null}
                  {v.imp?.isDone ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <button
                          type="button"
                          onClick={v.vx?.impFinish}
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
                          View workout
                        </button>
                        <button
                          type="button"
                          onClick={v.imp?.reset}
                          style={{
                            minHeight: '44px',
                            border: '0',
                            background: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: 'var(--ink2)',
                            cursor: 'pointer',
                          }}
                        >
                          Import another
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              </>
            ) : null}
            {v.imp?.showPopup ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: '24px',
                      background: 'rgba(245,196,108,0.14)',
                      color: 'var(--amberT)',
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3.5 2.5 20h19zM12 10v4.5M12 17.5h.01" />
                    </svg>
                  </div>
                  <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.5', color: 'var(--ink2)', textWrap: 'pretty' }}>
                    {v.imp?.popupText}
                  </p>
                  <div
                    role="radiogroup"
                    aria-label="Move all exercises to"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}
                  >
                    {(v.imp?.popupCounts ?? []).map((c: any, $index: number) => (
                      <Fragment key={$index}>
                        <button
                          type="button"
                          role="radio"
                          aria-checked={c?.on}
                          onClick={c?.pick}
                          style={css(
                            `${c?.style ?? ''} display: flex; align-items: center; gap: 12px; min-height: 64px; padding: 10px 14px; border-radius: 16px; border-width: 1.5px; border-style: solid; text-align: left; cursor: pointer; transition: background 0.15s, border-color 0.15s;`,
                          )}
                        >
                          <span
                            style={css(
                              `${c?.ring ?? ''} display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 22px; height: 22px; border-radius: 11px; border-width: 2px; border-style: solid;`,
                            )}
                          >
                            <span style={css(`${c?.dot ?? ''} width: 10px; height: 10px; border-radius: 5px;`)} />
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '1px', minWidth: '0' }}>
                            <span style={{ fontSize: '15px', fontWeight: '600', whiteSpace: 'nowrap' }}>{c?.day}</span>
                            <span
                              style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11.5px', opacity: '0.8', whiteSpace: 'nowrap' }}
                            >
                              {c?.n} exercise{c?.plural}
                            </span>
                          </span>
                        </button>
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={v.imp?.splitUp}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1px',
                        minHeight: '56px',
                        padding: '6px 12px',
                        border: '0',
                        borderRadius: '16px',
                        background: 'var(--acc)',
                        boxShadow: '0 10px 36px -10px rgba(64,219,168,0.6)',
                        color: 'var(--accInk)',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: '15px', fontWeight: '600' }}>Split into matching days</span>
                      <span style={{ fontSize: '12px', opacity: '0.75' }}>{v.imp?.splitSub}</span>
                    </button>
                    <button
                      type="button"
                      onClick={v.imp?.moveSel}
                      style={{
                        minHeight: '52px',
                        border: '1px solid var(--line)',
                        borderRadius: '16px',
                        background: 'rgba(var(--w), calc(0.04 * var(--wa)))',
                        fontSize: '15px',
                        fontWeight: '500',
                        cursor: 'pointer',
                      }}
                    >
                      {v.imp?.moveLabel}
                    </button>
                    <button
                      type="button"
                      onClick={v.imp?.cancel}
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
