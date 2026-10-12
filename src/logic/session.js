import React from 'react';
import { Sub, setText, pad2 } from './shared.js';

export function useFrame(active) {
  const pair = React.useState(0);
  const setN = pair[1];
  React.useEffect(() => {
    if (!active) return undefined;
    let id = 0;
    const loop = () => { setN((x) => x + 1); id = requestAnimationFrame(loop); };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, [active]);
}
export const fmtSW = (ms) => pad2(Math.floor(ms / 60000)) + ':' + pad2(Math.floor(ms / 1000) % 60) + '.' + pad2(Math.floor(ms / 10) % 100);
export function SWDigits(p) {
  useFrame(!!p.start);
  const ms = p.acc + (p.start ? Date.now() - p.start : 0);
  return React.createElement('span', { role: 'timer', 'aria-label': 'Stopwatch', style: { fontSize: 62, fontWeight: 200, lineHeight: 1, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' } }, fmtSW(ms));
}
export function TimerFace(p) {
  useFrame(p.state === 'running');
  const ms = p.state === 'running' ? Math.max(0, p.end - Date.now()) : p.state === 'done' ? 0 : p.left;
  const sec = Math.ceil(ms / 1000);
  const C = 2 * Math.PI * 88;
  const frac = Math.max(0, Math.min(1, ms / (p.dur * 1000)));
  const done = p.state === 'done', paused = p.state === 'paused';
  const col = done ? '#F5C46C' : paused ? 'var(--ink3)' : '#40DBA8';
  const txt = Math.floor(sec / 60) + ':' + pad2(sec % 60);
  const h = React.createElement;
  return h('div', { role: 'timer', 'aria-label': 'Timer ' + txt, style: { position: 'relative', width: 200, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' } },
    h('svg', { width: 200, height: 200, viewBox: '0 0 200 200', style: { position: 'absolute', inset: 0 } },
      h('circle', { cx: 100, cy: 100, r: 88, fill: 'none', strokeWidth: 6, style: { stroke: 'rgba(var(--w), calc(0.08 * var(--wa)))' } }),
      h('circle', { cx: 100, cy: 100, r: 88, fill: 'none', strokeWidth: 6, strokeLinecap: 'round', strokeDasharray: (C * frac).toFixed(1) + ' ' + C.toFixed(1), transform: 'rotate(-90 100 100)', style: { stroke: col } })),
    h('div', { style: { position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 } },
      h('span', { style: { fontSize: 52, fontWeight: 200, lineHeight: 1, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums', color: done ? 'var(--amberT)' : 'var(--ink)' } }, txt),
      h('span', { style: { fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: done ? 'var(--amberT)' : 'var(--ink3)' } }, done ? "Time's up" : paused ? 'Paused' : 'Remaining')));
}
export function SWMini(p) {
  useFrame(!!p.start);
  return React.createElement('span', { style: { fontVariantNumeric: 'tabular-nums' } }, fmtSW(p.acc + (p.start ? Date.now() - p.start : 0)));
}
export function TMMini(p) {
  useFrame(p.state === 'running');
  const ms = p.state === 'running' ? Math.max(0, p.end - Date.now()) : p.state === 'done' ? 0 : p.state === 'paused' ? p.left : p.dur * 1000;
  const sec = Math.ceil(ms / 1000);
  return React.createElement('span', { style: { fontVariantNumeric: 'tabular-nums' } }, p.state === 'done' ? "Time's up" : Math.floor(sec / 60) + ':' + pad2(sec % 60));
}
export const CLOCK_BTN = {
  go: 'background: rgba(64,219,168,0.18); color: var(--accT); box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px rgba(64,219,168,0.22);',
  stop: 'background: rgba(255,138,122,0.18); color: var(--danger); box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px rgba(255,138,122,0.22);',
  pause: 'background: rgba(245,196,108,0.18); color: var(--amberT); box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px rgba(245,196,108,0.22);',
  grey: 'background: rgba(var(--w), calc(0.09 * var(--wa))); color: var(--ink); box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px rgba(var(--w), calc(0.09 * var(--wa)));',
  off: 'background: rgba(var(--w), calc(0.05 * var(--wa))); color: var(--ink3); box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px rgba(var(--w), calc(0.05 * var(--wa))); cursor: default;'
};

export class SessionScreen extends Sub {
  constructor(host, key) {
    super(host, key);
    const r = Number(host.props.restSeconds) || 90;
    this.state = { clockOpen: false, sheetDy: 0, sheetDrag: false, elapsed: 1458, rest: 0, mode: 'stopwatch', swAcc: 0, swStart: null, laps: [], tmDur: r, tmLeft: r * 1000, tmEnd: null, tmState: 'idle' };
  }
  tick() {
    const s = this.state;
    const patch = { elapsed: s.elapsed + 1 };
    if (s.tmState === 'running' && Date.now() >= s.tmEnd) {
      Object.assign(patch, { tmState: 'done', tmEnd: null, tmLeft: 0 });
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    }
    this.setState(patch);
  }
  sheetDown(e) {
    if (e.target.closest('button')) return;
    e.preventDefault();
    const y0 = e.clientY, t0 = Date.now();
    this.setState({ sheetDrag: true, sheetDy: 0 });
    const move = (ev) => this.setState({ sheetDy: Math.max(0, ev.clientY - y0) });
    const up = (ev) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      const dy = Math.max(0, ev.clientY - y0), v = dy / Math.max(1, Date.now() - t0);
      this.setState({ sheetDrag: false, sheetDy: 0, clockOpen: !(dy > 120 || (dy > 30 && v > 0.6)) });
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  }
  clockVals() {
    const s = this.state, now = Date.now();
    const swRun = !!s.swStart, swMs = s.swAcc + (swRun ? now - s.swStart : 0);
    const tm = s.tmState, tmBusy = tm === 'running' || tm === 'paused';
    const laps = s.laps.map((v, i) => v - (i ? s.laps[i - 1] : 0));
    const best = laps.length > 1 ? Math.min(...laps) : -1, worst = laps.length > 1 ? Math.max(...laps) : -1;
    const mss = (sec) => Math.floor(sec / 60) + ':' + pad2(sec % 60);
    const setDur = (d) => this.setState({ tmDur: d, tmLeft: d * 1000 });
    return {
      tabs: [['stopwatch', 'Stopwatch', swRun], ['timer', 'Timer', tmBusy || tm === 'done']].map((x) => ({
        label: x[1], on: s.mode === x[0], pick: () => this.setState({ mode: x[0] }),
        style: s.mode === x[0] ? 'background: rgba(var(--w), calc(0.1 * var(--wa))); color: var(--ink);' : 'background: transparent; color: var(--ink2);',
        dot: x[2] && s.mode !== x[0] ? '' : 'display: none;'
      })),
      isSW: s.mode === 'stopwatch', isTM: s.mode === 'timer',
      openTimer: () => this.setState({ clockOpen: true, mode: 'timer' }),
      openSW: () => this.setState({ clockOpen: true, mode: 'stopwatch' }),
      closeClock: () => this.setState({ clockOpen: false }),
      sheetDown: (e) => this.sheetDown(e),
      sheetTitle: s.mode === 'timer' ? 'Rest timer' : 'Stopwatch',
      layerStyle: s.clockOpen ? '' : 'pointer-events: none;',
      scrimStyle: s.clockOpen ? 'opacity: ' + Math.max(0, 1 - s.sheetDy / 500) + ';' : 'opacity: 0;',
      sheetStyle: s.clockOpen ? 'transform: translateY(' + s.sheetDy + 'px); transition: ' + (s.sheetDrag ? 'none' : 'transform 0.34s cubic-bezier(0.2, 0.8, 0.2, 1)') + ';' : 'transform: translateY(105%); transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);',
      tmMini: React.createElement(TMMini, { dur: s.tmDur, end: s.tmEnd, left: s.tmLeft, state: tm }),
      swMini: React.createElement(SWMini, { acc: s.swAcc, start: s.swStart }),
      tmPillLabel: tm === 'running' ? 'Resting' : tm === 'paused' ? 'Paused' : tm === 'done' ? 'Rest over' : 'Rest timer',
      swPillLabel: swRun ? 'Running' : swMs > 0 ? 'Stopped' : 'Stopwatch',
      tmPillStyle: tm === 'running' ? 'border-color: rgba(64,219,168,0.55); background: rgba(64,219,168,0.12); color: var(--accT); box-shadow: 0 0 22px -8px rgba(64,219,168,0.7);'
        : tm === 'done' ? 'border-color: rgba(245,196,108,0.55); background: rgba(245,196,108,0.12); color: var(--amberT);'
        : tm === 'paused' ? 'border-color: rgba(245,196,108,0.35); background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--amberT);'
        : 'border-color: rgba(64,219,168,0.32); background: rgba(64,219,168,0.06); color: var(--accT);',
      swPillStyle: swRun ? 'border-color: rgba(64,219,168,0.55); background: rgba(64,219,168,0.12); color: var(--accT); box-shadow: 0 0 22px -8px rgba(64,219,168,0.7);'
        : 'border-color: rgba(64,219,168,0.32); background: rgba(64,219,168,0.06); color: var(--accT);',
      tmIdleCue: tm === 'idle', tmIdleCueOff: tm !== 'idle',
      swIdleCue: !swRun && swMs === 0, swIdleCueOff: swRun || swMs > 0,
      swDigits: React.createElement(SWDigits, { acc: s.swAcc, start: s.swStart }),
      swLeftLabel: swRun || swMs === 0 ? 'Lap' : 'Reset',
      swLeftStyle: swRun || swMs > 0 ? CLOCK_BTN.grey : CLOCK_BTN.off,
      swLeft: () => {
        const st = this.state, t0 = Date.now();
        if (st.swStart) this.setState({ laps: [...st.laps, st.swAcc + (t0 - st.swStart)] });
        else if (st.swAcc > 0) this.setState({ swAcc: 0, laps: [] });
      },
      swRightLabel: swRun ? 'Stop' : 'Start',
      swRightStyle: swRun ? CLOCK_BTN.stop : CLOCK_BTN.go,
      swRight: () => {
        const st = this.state, t0 = Date.now();
        if (st.swStart) this.setState({ swAcc: st.swAcc + (t0 - st.swStart), swStart: null });
        else this.setState({ swStart: t0 });
      },
      hasLaps: laps.length > 0,
      laps: laps.map((v, i) => ({ n: i + 1, time: fmtSW(v), style: v === best ? 'color: var(--accT);' : v === worst ? 'color: var(--danger);' : '' })).reverse(),
      tmIdle: tm === 'idle', tmActive: tm !== 'idle',
      tmSet: mss(s.tmDur),
      tmMinus: () => setDur(Math.max(15, this.state.tmDur - 15)),
      tmPlus: () => setDur(Math.min(3600, this.state.tmDur + 15)),
      presets: [30, 60, 90, 120, 180].map((d) => ({
        label: mss(d), on: s.tmDur === d, pick: () => setDur(d),
        style: s.tmDur === d ? 'background: rgba(64,219,168,0.14); border-color: rgba(64,219,168,0.5); color: var(--accT);' : 'background: transparent; border-color: var(--line); color: var(--ink2);'
      })),
      tmFace: React.createElement(TimerFace, { dur: s.tmDur, end: s.tmEnd, left: s.tmLeft, state: tm }),
      tmLeftStyle: tm === 'idle' ? CLOCK_BTN.off : CLOCK_BTN.grey,
      tmLeft: () => { if (this.state.tmState !== 'idle') this.setState({ tmState: 'idle', tmEnd: null, tmLeft: this.state.tmDur * 1000 }); },
      tmRightLabel: tm === 'running' ? 'Pause' : tm === 'paused' ? 'Resume' : tm === 'done' ? 'Done' : 'Start',
      tmRightStyle: tm === 'running' ? CLOCK_BTN.pause : CLOCK_BTN.go,
      tmRight: () => {
        const st = this.state, t0 = Date.now();
        if (st.tmState === 'idle') this.setState({ tmState: 'running', tmEnd: t0 + st.tmDur * 1000 });
        else if (st.tmState === 'running') this.setState({ tmState: 'paused', tmLeft: Math.max(0, st.tmEnd - t0), tmEnd: null });
        else if (st.tmState === 'paused') this.setState({ tmState: 'running', tmEnd: t0 + st.tmLeft });
        else this.setState({ tmState: 'idle', tmEnd: null, tmLeft: st.tmDur * 1000 });
      }
    };
  }
  renderVals() {
    const h = this.host, hs = h.state, s = this.state;
    const mmss = (n) => `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(n % 60).padStart(2, '0')}`;
    const all = Object.values(hs.dashLists).flat();
    const ex = all.find((x) => x.id === hs.sesExId);
    const splitName = { push: 'Push Day', pull: 'Pull Day', legs: 'Leg Day', cardio: 'Cardio Day', rest: 'Rest Day' };
    const splitOf = Object.keys(hs.dashLists).find((k) => hs.dashLists[k].some((x) => x.id === hs.sesExId)) || hs.dashSplit;
    const base = { elapsed: mmss(s.elapsed), rest: mmss(s.rest).replace(/^0/, ''), skipRest: () => this.setState({ rest: 0 }), ...this.clockVals() };
    if (!ex) return { ...base, tag: 'Session', pos: '', exName: 'No exercise selected', setLabel: 'Pick exercises on the dashboard', isLive: false, isDone: false, sets: [], ctaLabel: 'Back to dashboard', cta: () => h.go('#dashboard'), hasNext: false };
    const queue = hs.sesQueue.filter((id) => all.some((x) => x.id === id));
    const qi = Math.max(0, queue.indexOf(ex.id));
    const isDone = ex.sets.every((x) => x.done);
    const cur = ex.sets.findIndex((x) => !x.done);
    const nextEx = queue.slice(qi + 1).map((id) => all.find((x) => x.id === id)).find((e) => e && !e.sets.every((z) => z.done));
    const doneSets = ex.sets.filter((x) => x.done);
    const C = 2 * Math.PI * 92;
    return {
      ...base,
      tag: (isDone ? 'Done · ' : 'Live · ') + splitName[splitOf],
      pos: `${String(qi + 1).padStart(2, '0')} / ${String(Math.max(queue.length, 1)).padStart(2, '0')}`,
      exName: ex.name,
      setLabel: isDone ? 'All sets completed' : `Set ${cur + 1} of ${ex.sets.length} · ${setText(ex.sets[cur])}`,
      isLive: !isDone, isDone,
      resting: !isDone && s.rest > 0, working: isDone || s.rest === 0,
      ringDash: s.rest > 0 ? `${(C * (Math.min(1, s.rest / h.restLen()))).toFixed(1)} ${C.toFixed(1)}` : `${(C * (doneSets.length / ex.sets.length)).toFixed(1)} ${C.toFixed(1)}`,
      setsDone: `${doneSets.length}/${ex.sets.length}`,
      repsDone: doneSets.reduce((a, x) => a + x.reps, 0) || '—',
      volume: (() => { const v = doneSets.reduce((a, x) => a + x.reps * x.kg, 0); return v ? v.toLocaleString() + ' kg' : '—'; })(),
      sets: ex.sets.map((x, i) => ({
        n: i + 1, label: setText(x), done: x.done, todo: !x.done,
        showRestart: isDone, showCheck: !isDone,
        current: !isDone && i === cur,
        badge: 'NOW',
        labelStyle: !isDone && i === cur ? 'font-weight: 600; color: var(--ink);' : x.done ? 'color: var(--ink2);' : 'color: var(--ink);',
        rowStyle: !isDone && i === cur
          ? 'min-height: 68px; border-color: #40DBA8; background: linear-gradient(120deg, rgba(64,219,168,0.18), rgba(64,219,168,0.04)); box-shadow: 0 0 0 3px rgba(64,219,168,0.12), 0 12px 30px -12px rgba(64,219,168,0.5);'
          : x.done ? 'border-color: rgba(64,219,168,0.18); background: rgba(64,219,168,0.04);' : 'border-color: rgba(var(--w), calc(0.08 * var(--wa))); background: rgba(var(--w), calc(0.03 * var(--wa))); opacity: 0.7;',
        toggle: () => h.patchSet(ex.id, i, { done: !x.done }),
        restart: () => { h.patchSet(ex.id, i, { done: false }); this.setState({ rest: 0 }); }
      })),
      wasSkipped: !!ex.skipped && !isDone,
      canSkip: !isDone,
      skipLabel: nextEx ? 'Skip for now · do it last' : 'Skip this exercise',
      skip: () => h.skipExercise(ex.id),
      ctaLabel: !isDone ? 'Complete set' : nextEx ? 'Next exercise' : 'Finish session',
      cta: () => {
        if (!isDone) { h.patchSet(ex.id, cur, { done: true }); }
        else if (nextEx) { h.setState({ sesExId: nextEx.id }); this.setState({ rest: 0 }); }
        else h.go('#summary');
      },
      hasNext: !!nextEx,
      nextName: nextEx ? nextEx.name : '',
      nextDetail: nextEx ? `${nextEx.sets.length} set${nextEx.sets.length === 1 ? '' : 's'}` : ''
    };
  }
}

