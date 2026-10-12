import React from 'react';
import { Sub, pad2 } from './shared.js';

export const PG_N = 182;
export const PG_MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const PG_WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const PG_ORDER = ['cardio', 'rest', 'push', 'pull', 'legs'];
export const PG_NAME = { push: 'Push Day', pull: 'Pull Day', legs: 'Leg Day', cardio: 'Cardio Day', rest: 'Rest Day' };
export const PG_TAG = { push: 'Push', pull: 'Pull', legs: 'Legs', cardio: 'Cardio', rest: 'Rest' };
export const PG_TPL = {
  push: [['Bench Press', [8, 8, 8, 6], 70], ['Overhead Press', [10, 10, 8], 40], ['Incline Dumbbell Press', [10, 10, 10], 24], ['Tricep Pushdown', [12, 12, 12], 25]],
  pull: [['Deadlift', [5, 5, 5], 120], ['Pull-ups', [8, 8, 6], 0], ['Barbell Row', [10, 10, 10], 60], ['Bicep Curl', [12, 12, 12], 12]],
  legs: [['Back Squat', [8, 8, 6], 80], ['Romanian Deadlift', [10, 10, 10], 60], ['Walking Lunges', [12, 12], 16], ['Calf Raises', [15, 15, 15], 40]]
};
export const pgRand = (i, k) => { const s = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return s - Math.floor(s); };
export const PG_HIST = (() => {
  const known = { 1: 77.8, 5: 77.9, 9: 78.1, 13: 78.5, 16: 78.4 };
  const out = [];
  for (let i = 0; i < PG_N; i++) {
    const split = PG_ORDER[(((4 - i) % 5) + 5) % 5];
    let status = split === 'rest' ? 'rest' : (i > 6 && pgRand(i, 1) < 0.2 ? 'missed' : 'done');
    if (i === 0) status = 'today';
    const p = 1 - i * 0.0007;
    let ex = [], dur = 0, cardio = null;
    if (status === 'done' && PG_TPL[split]) {
      ex = PG_TPL[split].map(([name, reps, kg]) => ({ name, sets: reps.map((r) => ({ reps: r, kg: kg ? Math.round((kg * p) / 2.5) * 2.5 : 0, done: true })) }));
      dur = 45 + Math.floor(pgRand(i, 2) * 20);
    }
    if (status === 'done' && split === 'cardio') {
      const min = i === 4 ? 35 : 28 + Math.floor(pgRand(i, 3) * 14);
      cardio = { name: 'Running', min, km: i === 4 ? 5.2 : Math.round((min / 6.6) * 10) / 10 };
      dur = min + 10;
    }
    const vol = ex.reduce((a, e) => a + e.sets.reduce((b, s) => b + s.reps * s.kg, 0), 0);
    const protein = i === 0 ? 74 : i === 1 ? 132 : Math.round((status === 'done' ? 116 : status === 'rest' ? 100 : 84) + pgRand(i, 4) * 30);
    const weight = known[i] != null ? known[i] : i > 16 && i % 4 === 0 ? Math.round((78.4 + (i - 16) * 0.009 + (pgRand(i, 5) - 0.5) * 0.3) * 10) / 10 : null;
    out.push({ i, date: new Date(2026, 9, 2 - i), key: 'd' + i, split, status, ex, dur, cardio, vol, protein, weight });
  }
  return out;
})();

export function ProgChart(p) {
  const h = React.createElement;
  const hp = React.useState(null), hov = hp[0], setHov = hp[1];
  const dp = React.useState(false), drawn = dp[0], setDrawn = dp[1];
  React.useEffect(() => {
    setDrawn(false);
    let b = 0;
    const a = requestAnimationFrame(() => { b = requestAnimationFrame(() => setDrawn(true)); });
    return () => { cancelAnimationFrame(a); cancelAnimationFrame(b); };
  }, [p.animKey]);
  const W = 312, H = 116, top = 10, bot = 4, data = p.data, n = data.length;
  const present = data.map((d, i) => (d.v != null ? i : -1)).filter((i) => i >= 0);
  if (!present.length) return h('div', { style: { height: 186, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'var(--ink3)' } }, p.empty || 'No data in this period');
  const vals = present.map((i) => data[i].v);
  let lo = p.type === 'line' ? Math.min(...vals) : 0, hi = Math.max(...vals, p.target || 0);
  if (p.type === 'line') { const pad = Math.max(0.25, (hi - lo) * 0.3); lo -= pad; hi += pad; }
  if (hi === lo) hi = lo + 1;
  const y = (v) => top + (1 - (v - lo) / (hi - lo)) * (H - top - bot);
  const slot = W / n, x = (i) => slot * i + slot / 2;
  const selIdx = data.findIndex((d) => d.key === p.sel);
  const act = hov != null ? hov : selIdx;
  const pick = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    let i = Math.max(0, Math.min(n - 1, Math.floor(((e.clientX - r.left) / r.width) * n)));
    if (p.type === 'line') i = present.reduce((b, j) => (Math.abs(j - i) < Math.abs(b - i) ? j : b), present[0]);
    return i;
  };
  const kids = [h('line', { key: 'base', x1: 0, x2: W, y1: H - bot + 0.5, y2: H - bot + 0.5, style: { stroke: 'var(--line)' } })];
  if (p.target) kids.push(h('line', { key: 'tg', x1: 0, x2: W, y1: y(p.target), y2: y(p.target), strokeDasharray: '3 4', style: { stroke: 'var(--ink3)', opacity: drawn ? 0.9 : 0, transition: 'opacity 0.6s 0.4s' } }));
  if (act >= 0) kids.push(h('line', { key: 'guide', x1: x(act), x2: x(act), y1: 0, y2: H - bot, strokeDasharray: '2 3', style: { stroke: 'var(--ink3)', opacity: 0.6 } }));
  if (p.type === 'bar') {
    const bw = Math.max(2, Math.min(24, slot * 0.62)), rx = Math.min(bw / 2, 6), step = Math.min(45, 700 / n);
    data.forEach((d, i) => {
      const empty = !d.v, yy = empty ? H - bot - 3 : y(d.v);
      const col = empty ? 'rgba(var(--w), calc(0.12 * var(--wa)))' : p.colorFn ? p.colorFn(d) : p.color;
      kids.push(h('rect', { key: 'b' + i, x: x(i) - bw / 2, y: yy, width: bw, height: Math.max(0, H - bot - yy), rx, style: { fill: col, opacity: act < 0 || act === i ? 1 : 0.35, transformBox: 'fill-box', transformOrigin: '50% 100%', transform: drawn ? 'scaleY(1)' : 'scaleY(0)', transition: 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) ' + Math.round(i * step) + 'ms, opacity 0.2s' } }));
    });
  } else {
    const pts = present.map((i) => [x(i), y(data[i].v)]);
    const line = pts.map((q, k) => (k ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' ');
    const area = line + ' L ' + pts[pts.length - 1][0].toFixed(1) + ' ' + (H - bot) + ' L ' + pts[0][0].toFixed(1) + ' ' + (H - bot) + ' Z';
    const gid = 'pg-' + p.id;
    kids.push(h('defs', { key: 'defs' }, h('linearGradient', { id: gid, x1: 0, y1: 0, x2: 0, y2: 1 }, h('stop', { offset: 0, style: { stopColor: p.color, stopOpacity: 0.22 } }), h('stop', { offset: 1, style: { stopColor: p.color, stopOpacity: 0 } }))));
    kids.push(h('path', { key: 'area', d: area, fill: 'url(#' + gid + ')', style: { opacity: drawn ? 1 : 0, transition: 'opacity 0.8s 0.6s' } }));
    kids.push(h('path', { key: 'line', d: line, fill: 'none', pathLength: 1, strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round', style: { stroke: p.color, strokeDasharray: 1, strokeDashoffset: drawn ? 0 : 1, transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)' } }));
    if (present.length <= 32) present.forEach((i, k) => kids.push(h('circle', { key: 'p' + i, cx: x(i), cy: y(data[i].v), r: 3, style: { fill: 'var(--bg)', stroke: p.color, strokeWidth: 2, opacity: drawn ? 1 : 0, transition: 'opacity 0.3s ' + (400 + k * 50) + 'ms' } })));
    if (act >= 0 && data[act].v != null) {
      kids.push(h('circle', { key: 'halo', cx: x(act), cy: y(data[act].v), r: 9, style: { fill: p.color, opacity: 0.18 } }));
      kids.push(h('circle', { key: 'dot', cx: x(act), cy: y(data[act].v), r: 4.5, style: { fill: p.color } }));
    }
  }
  const tip = act >= 0 ? data[act] : null;
  const tipEl = tip ? h('div', { style: { position: 'absolute', top: 0, left: 'clamp(54px, ' + ((x(act) / W) * 100).toFixed(2) + '%, calc(100% - 54px))', transform: 'translateX(-50%)', padding: '5px 10px', borderRadius: 10, border: '1px solid var(--line)', background: 'var(--pop)', boxShadow: '0 8px 20px -8px rgba(var(--k), calc(0.6 * var(--ka)))', whiteSpace: 'nowrap', textAlign: 'center', pointerEvents: 'none', transition: 'left 0.15s ease' } },
    h('div', { style: { fontSize: 14, fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' } }, tip.v ? p.fmt(tip.v) : tip.emptyLabel || '—'),
    h('div', { style: { fontFamily: "'Geist Mono', monospace", fontSize: 10.5, color: 'var(--ink3)' } }, tip.label)) : null;
  const mono = { fontFamily: "'Geist Mono', monospace", fontSize: 11, color: 'var(--ink3)' };
  const axis = n <= 7
    ? h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(' + n + ', minmax(0, 1fr))', marginTop: 8 } }, data.map((d, i) => h('span', { key: i, style: { ...mono, textAlign: 'center', color: i === act ? 'var(--ink)' : 'var(--ink3)', fontWeight: i === act ? 600 : 400 } }, d.short)))
    : h('div', { style: { ...mono, display: 'flex', justifyContent: 'space-between', marginTop: 8 } }, h('span', null, data[0].short), h('span', null, data[Math.floor((n - 1) / 2)].short), h('span', null, data[n - 1].short));
  const onKey = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const cur = selIdx < 0 ? n - 1 : selIdx, j = Math.max(0, Math.min(n - 1, cur + (e.key === 'ArrowRight' ? 1 : -1)));
    p.onSelect(data[j].key);
  };
  return h('div', { role: 'group', 'aria-label': p.aria + '. Use left and right arrow keys to change day.', tabIndex: 0, onKeyDown: onKey, style: { position: 'relative', paddingTop: 48, outline: 'none', userSelect: 'none' } },
    tipEl,
    h('svg', { width: '100%', height: H, viewBox: '0 0 ' + W + ' ' + H, preserveAspectRatio: 'none', style: { display: 'block', overflow: 'visible', cursor: 'pointer', touchAction: 'pan-y' }, onPointerMove: (e) => setHov(pick(e)), onPointerLeave: () => setHov(null), onClick: (e) => p.onSelect(data[pick(e)].key) }, kids),
    axis);
}

export class ProgressScreen extends Sub {
  constructor(host, key) { super(host, key); this.state = { range: 7, off: 0, sel: 0, edits: { 2: { split: 'push', status: 'missed', exIds: [], dur: 0 } }, editing: false, draft: null }; }
  planFor(split) { return (this.host.state.dashLists && this.host.state.dashLists[split]) || []; }
  day(i) {
    const d = PG_HIST[i];
    const e = this.state.edits[i];
    if (e) {
      const status = e.split === 'rest' ? 'rest' : e.status;
      let ex = [], cardio = null, dur = 0;
      if (status === 'done') {
        if (PG_TPL[e.split]) ex = this.planFor(e.split).filter((x) => e.exIds.includes(x.id)).map((x) => ({ name: x.name || 'Untitled exercise', sets: x.sets.map((s) => ({ ...s, done: true })) }));
        if (e.split === 'cardio') cardio = { name: 'Running', min: e.dur, km: Math.round((e.dur / 6.6) * 10) / 10 };
        dur = e.dur;
      }
      const vol = ex.reduce((a, x) => a + x.sets.reduce((b, s) => b + s.reps * s.kg, 0), 0);
      return { ...d, split: e.split, status, ex, cardio, dur, vol, edited: true };
    }
    if (i !== 0) return d;
    const hs = this.host.state, split = hs.dashSplit, list = (hs.dashLists && hs.dashLists[split]) || [];
    const ex = list.map((e) => ({ name: e.name || 'Untitled exercise', sets: e.sets }));
    const all = ex.reduce((a, e) => a.concat(e.sets), []);
    const done = all.filter((s) => s.done);
    return { ...d, split, ex, status: split === 'rest' ? 'rest' : 'today', vol: done.reduce((a, s) => a + s.reps * s.kg, 0), tDone: done.length, tAll: all.length, dur: 0 };
  }
  stat(d) { return d.status === 'today' ? (d.tAll && d.tDone === d.tAll ? 'done' : d.tDone ? 'partial' : 'planned') : d.status; }
  renderVals() {
    const st = this.state, len = st.range, off = st.off;
    const lo = off * len, hi = Math.min(PG_N - 1, lo + len - 1);
    const days = []; for (let i = hi; i >= lo; i--) days.push(this.day(i));
    const fmtD = (dt) => PG_WD[dt.getDay()] + ' ' + dt.getDate() + ' ' + PG_MON[dt.getMonth()];
    const fmtS = (dt) => dt.getDate() + ' ' + PG_MON[dt.getMonth()];
    const selectDay = (i) => { const j = Math.max(0, Math.min(PG_N - 1, i)); this.setState({ sel: j, off: Math.floor(j / this.state.range), editing: false, draft: null }); };
    const target = Number(this.host.screens.prof && this.host.screens.prof.state.target) || 140;
    const ST_LABEL = { done: 'done', partial: 'in progress', planned: 'planned', rest: 'rest day', missed: 'missed' };
    const cellCss = (d) => {
      const s = this.stat(d);
      let css = s === 'done' ? 'background: #40DBA8; color: #02120C; border: 1.5px solid #40DBA8;'
        : s === 'partial' ? 'background: rgba(64,219,168,0.18); color: var(--accT); border: 1.5px solid #40DBA8;'
        : s === 'planned' ? 'background: transparent; color: var(--accT); border: 1.5px solid #40DBA8;'
        : s === 'rest' ? 'background: transparent; color: var(--ink2); border: 1.5px dashed var(--ink3);'
        : 'background: #FF6B57; color: #1A0703; border: 1.5px solid #FF6B57; box-shadow: 0 0 14px -3px rgba(255,107,87,0.7);';
      if (d.i === st.sel) css += ' box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--ink);';
      return css;
    };
    const aria = (d) => fmtD(d.date) + ', ' + PG_NAME[d.split] + ', ' + ST_LABEL[this.stat(d)];
    // overview
    const week = days.map((d) => ({
      wd: PG_WD[d.date.getDay()].slice(0, 3), num: d.date.getDate(), tag: PG_TAG[d.split], on: d.i === st.sel,
      style: cellCss(d), wdStyle: d.i === st.sel ? 'color: var(--ink); font-weight: 600;' : 'color: var(--ink3);',
      aria: aria(d), pick: () => selectDay(d.i)
    }));
    const lead = (days[0].date.getDay() + 6) % 7;
    const sz = len === 90 ? 'height: 30px; font-size: 11px;' : 'height: 38px; font-size: 13px;';
    const cells = Array.from({ length: lead }, () => ({ blank: true, real: false })).concat(days.map((d) => ({
      blank: false, real: true, on: d.i === st.sel, aria: aria(d), pick: () => selectDay(d.i),
      num: d.date.getDate() === 1 ? PG_MON[d.date.getMonth()] : d.date.getDate(),
      style: cellCss(d) + ' ' + sz
    })));
    const training = days.filter((d) => this.stat(d) !== 'rest');
    const doneN = days.filter((d) => ['done', 'partial'].includes(this.stat(d))).length;
    const avgP = Math.round(days.reduce((a, d) => a + d.protein, 0) / days.length);
    const hit = days.filter((d) => d.protein >= target).length;
    const ws = days.filter((d) => d.weight != null);
    const wDelta = ws.length > 1 ? Math.round((ws[ws.length - 1].weight - ws[0].weight) * 10) / 10 : null;
    const sign = (v) => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(1);
    const latestW = (() => { for (let i = lo; i < PG_N; i++) if (PG_HIST[i].weight != null) return PG_HIST[i].weight; return null; })();
    // selected day
    const sd = this.day(st.sel), ss = this.stat(sd);
    const CHIP = {
      done: ['Workout done', 'background: rgba(64,219,168,0.16); color: var(--accT);'],
      partial: ['In progress', 'background: rgba(245,196,108,0.16); color: var(--amberT);'],
      planned: ['Planned', 'background: rgba(64,219,168,0.10); color: var(--accT);'],
      rest: ['Rest day', 'background: rgba(var(--w), calc(0.07 * var(--wa))); color: var(--ink2);'],
      missed: ['Missed', 'background: rgba(255,138,122,0.14); color: var(--danger);']
    }[ss];
    const showEx = (ss === 'done' || ss === 'partial' || ss === 'planned') && sd.ex.length > 0;
    const off2 = 'opacity: 0.35; cursor: default;';
    const d = {
      title: fmtD(sd.date), rel: sd.i === 0 ? 'Today' : sd.i === 1 ? 'Yesterday' : sd.i + ' days ago',
      chip: CHIP[0], chipStyle: CHIP[1], splitName: PG_NAME[sd.split],
      stats: [
        { l: 'Time', v: sd.dur ? sd.dur + ' min' : '—' },
        { l: 'Volume', v: sd.vol ? sd.vol.toLocaleString() + ' kg' : '—' },
        { l: 'Protein', v: sd.protein + ' g' },
        { l: 'Weight', v: sd.weight != null ? sd.weight + ' kg' : '—' }
      ],
      hasEx: showEx,
      exercises: showEx ? sd.ex.map((e, k) => ({
        n: pad2(k + 1), name: e.name,
        vol: (() => { const v = e.sets.filter((s) => s.done).reduce((a, s) => a + s.reps * s.kg, 0); return v ? v.toLocaleString() + ' kg' : ''; })(),
        sets: e.sets.map((s) => ({
          t: s.reps ? (s.kg ? s.reps + ' × ' + s.kg : s.reps + ' reps') : '—',
          style: s.done ? 'background: rgba(64,219,168,0.14); color: var(--accT);' : 'background: rgba(var(--w), calc(0.05 * var(--wa))); color: var(--ink3);'
        }))
      })) : [],
      isCardio: !!sd.cardio, cardioName: sd.cardio ? sd.cardio.name : '', cardioText: sd.cardio ? sd.cardio.min + ' min · ' + sd.cardio.km + ' km' : '',
      isRest: ss === 'rest', isMissed: ss === 'missed',
      isToday: sd.i === 0 && (ss === 'partial' || ss === 'planned'),
      todayCta: ss === 'partial' ? 'Continue session' : 'Start session',
      prev: () => selectDay(sd.i + 1), next: () => selectDay(sd.i - 1),
      prevStyle: sd.i >= PG_N - 1 ? off2 : '', nextStyle: sd.i <= 0 ? off2 : '',
      view: !st.editing, editing: !!st.editing, edited: !!sd.edited,
      edit: () => {
        const plan = this.planFor(sd.split), names = sd.ex.map((x) => x.name);
        let exIds = plan.filter((x) => names.includes(x.name || 'Untitled exercise')).map((x) => x.id);
        if (!exIds.length) exIds = plan.map((x) => x.id);
        const status = ss === 'missed' ? 'missed' : 'done';
        this.setState({ editing: true, draft: { split: sd.split, status, exIds, dur: sd.dur || (sd.split === 'cardio' ? 35 : 50) } });
      }
    };
    const dr = st.draft;
    const setDraft = (p) => this.setState((s) => ({ draft: { ...s.draft, ...p } }));
    const dPlan = dr ? this.planFor(dr.split) : [];
    const dDone = dr && dr.split !== 'rest' && dr.status === 'done';
    const e = !dr ? { types: [], statuses: [], exs: [] } : {
      types: PG_ORDER.slice(2).concat(['cardio', 'rest']).map((k) => ({
        label: PG_TAG[k], on: dr.split === k,
        pick: () => setDraft({ split: k, exIds: this.planFor(k).map((x) => x.id), dur: k === 'cardio' ? 35 : 50 }),
        style: dr.split === k ? 'background: #40DBA8; color: #02120C;' : 'background: transparent; color: var(--ink2);'
      })),
      notRest: dr.split !== 'rest',
      statuses: [['done', 'Yes, done'], ['missed', 'Missed it']].map(([k, label]) => ({
        label, on: dr.status === k, pick: () => setDraft({ status: k }),
        style: dr.status === k ? (k === 'done' ? 'background: #40DBA8; color: #02120C;' : 'background: rgba(255,138,122,0.18); color: var(--danger);') : 'background: transparent; color: var(--ink2);'
      })),
      planName: PG_NAME[dr.split],
      showEx: !!(dDone && PG_TPL[dr.split] && dPlan.length),
      noPlan: !!(dDone && PG_TPL[dr.split] && !dPlan.length),
      exs: dPlan.map((x) => {
        const on = dr.exIds.includes(x.id);
        return {
          name: x.name || 'Untitled exercise', on, sets: x.sets.length + ' sets',
          pick: () => setDraft({ exIds: on ? dr.exIds.filter((y) => y !== x.id) : [...dr.exIds, x.id] }),
          box: on ? 'background: #40DBA8; border-color: #40DBA8;' : 'background: transparent; border-color: rgba(var(--w), calc(0.25 * var(--wa)));'
        };
      }),
      showDur: !!dDone, dur: dr.dur,
      durDec: () => setDraft({ dur: Math.max(5, dr.dur - 5) }),
      durInc: () => setDraft({ dur: Math.min(240, dr.dur + 5) }),
      cancel: () => this.setState({ editing: false, draft: null }),
      save: () => this.setState((s) => ({ edits: { ...s.edits, [s.sel]: { ...s.draft } }, editing: false, draft: null })),
      canReset: !!st.edits[st.sel],
      reset: () => this.setState((s) => { const ed = { ...s.edits }; delete ed[s.sel]; return { edits: ed, editing: false, draft: null }; })
    };
    // charts
    const animKey = len + ':' + off;
    const sel = 'd' + st.sel;
    const onSelect = (k) => selectDay(Number(k.slice(1)));
    const short = (x) => (len === 7 ? PG_WD[x.date.getDay()].slice(0, 1) : fmtS(x.date));
    const empt = (x) => { const s = this.stat(x); return s === 'rest' ? 'Rest day' : s === 'missed' ? 'Missed' : 'No sets yet'; };
    const ce = React.createElement;
    return {
      ranges: [[7, 'Last 7 days'], [30, 'Last 30 days'], [90, 'Last 90 days']].map(([r, label]) => ({
        label, on: r === len, pick: () => this.setState({ range: r, off: Math.floor(this.state.sel / r), dd: false }),
        style: r === len ? 'background: rgba(64,219,168,0.10); color: var(--ink); font-weight: 500;' : 'background: transparent; color: var(--ink2);',
        tick: r === len ? '' : 'visibility: hidden;'
      })),
      ddOpen: !!st.dd, ddLabel: len + ' days', ddChev: st.dd ? 'transform: rotate(180deg);' : '',
      ddToggle: () => this.setState({ dd: !this.state.dd }),
      periodName: off === 0 ? 'Last ' + len + ' days' : len + ' days',
      rangeLabel: fmtS(days[0].date) + ' – ' + fmtS(days[days.length - 1].date),
      prev: () => { if ((off + 1) * len < PG_N) this.setState({ off: off + 1, sel: Math.min(PG_N - 1, (off + 1) * len) }); },
      next: () => { if (off > 0) this.setState({ off: off - 1, sel: (off - 1) * len }); },
      prevStyle: (off + 1) * len >= PG_N ? off2 : '', nextStyle: off === 0 ? off2 : '',
      stats: [
        { label: 'Workouts', value: doneN + '/' + training.length, sub: (() => { const m = days.reduce((a, x) => a + (x.dur || 0), 0); return m ? (m >= 60 ? Math.floor(m / 60) + 'h ' + (m % 60) + 'm' : m + ' min') + ' trained' : 'sessions done'; })(), style: '' },
        { label: 'Volume', value: (() => { const v = days.reduce((a, x) => a + (x.vol || 0), 0); return v >= 10000 ? (v / 1000).toFixed(1) + 'k' : v.toLocaleString(); })(), sub: 'kg lifted', style: '' },
        { label: 'Protein', value: avgP + 'g', sub: 'daily avg', style: avgP >= target ? 'color: var(--accT);' : '' },
        { label: 'Weight', value: wDelta == null ? '—' : sign(wDelta), sub: wDelta == null ? 'need 2 weigh-ins' : 'kg change', style: '' }
      ],
      isWeek: len === 7, isGrid: len !== 7, week, cells, d, e,
      target, avgP, hitText: 'Hit target ' + hit + '/' + days.length + ' days',
      volTotal: days.reduce((a, x) => a + (x.vol || 0), 0).toLocaleString(),
      wLatest: latestW == null ? '—' : latestW.toFixed(1),
      wChange: wDelta == null ? 'Not enough weigh-ins' : sign(wDelta) + ' kg this period',
      volChart: ce(ProgChart, { id: 'vol', type: 'bar', animKey, sel, onSelect, color: '#40DBA8', aria: 'Training volume by day', fmt: (v) => v.toLocaleString() + ' kg',
        data: days.map((x) => ({ key: x.key, v: x.vol || 0, label: fmtD(x.date), short: short(x), emptyLabel: empt(x) })) }),
      protChart: ce(ProgChart, { id: 'prot', type: 'bar', animKey, sel, onSelect, target, color: '#6CCBF5', colorFn: (x) => (x.v >= target ? '#6CCBF5' : 'rgba(108,203,245,0.5)'), aria: 'Daily protein', fmt: (v) => v + ' g',
        data: days.map((x) => ({ key: x.key, v: x.protein, label: fmtD(x.date), short: short(x) })) }),
      wtChart: ce(ProgChart, { id: 'wt', type: 'line', animKey, sel, onSelect, color: 'var(--ink)', aria: 'Body weight', fmt: (v) => v.toFixed(1) + ' kg', empty: 'No weigh-ins in this period',
        data: days.map((x) => ({ key: x.key, v: x.weight, label: fmtD(x.date), short: short(x), emptyLabel: 'No weigh-in' })) })
    };
  }
}

