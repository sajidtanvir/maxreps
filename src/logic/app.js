import { makeSets, pad2 } from './shared.js';
import { LoginScreen, SignupScreen } from './auth.js';
import { SessionScreen } from './session.js';
import { WorkoutScreen, VariantScreen, ImportScreen } from './workout.js';
import { PG_N, PG_NAME, PG_TAG, ProgressScreen } from './progress.js';
import { NutriScreen, NutritionScreen } from './nutrition.js';
import { DietScreen } from './diet.js';
import { ProfileScreen } from './profile.js';
import { GUIDES, IMG_BASE, ALIAS, loadDB, bestMatch } from './exercises.js';
import { DCLogic } from './runtime';

export const NAV = [
  ['dashboard', 'Home', 'M3.5 11 12 3.8 20.5 11M5.5 9.7V20h13V9.7M10 20v-5.5h4V20'],
  ['log-workout', 'Workouts', 'M6.5 6.5v11M17.5 6.5v11M3.5 9.5v5M20.5 9.5v5M6.5 12h11'],
  ['progress', 'Progress', 'M3 17l6-6 4 4 8-8M15 7h6v6'],
  ['nutrition', 'Nutrition', 'M6 3v7a2.5 2.5 0 0 0 5 0V3M8.5 3v18M17.5 21V3c-2.2 1.4-3.5 4-3.5 7v3h3.5'],
  ['profile', 'Profile', 'M15.6 8a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 1 1 7.2 0M4.8 20c.9-3.7 3.6-5.6 7.2-5.6s6.3 1.9 7.2 5.6']
];
export const navFor = (active) => NAV.map(([id, label, d]) => ({ href: '#' + id, label, d, on: id === active, off: id !== active }));

export class AppLogic extends DCLogic {
  constructor(props) {
    super(props);
    this.state = this.initDash();
    const legs = this.state.dashLists.legs;
    legs[0].sets[0].done = true; legs[0].sets[1].done = true;
    this.state.sesExId = legs[0].id; this.state.sesQueue = legs.map((x) => x.id);
    this.screens = {
      login: new LoginScreen(this, 'login'), su: new SignupScreen(this, 'su'), ses: new SessionScreen(this, 'ses'), wk: new WorkoutScreen(this, 'wk'), imp: new ImportScreen(this, 'imp'), vx: new VariantScreen(this, 'vx'),
      prog: new ProgressScreen(this, 'prog'), nut: new NutritionScreen(this, 'nut'), prof: new ProfileScreen(this, 'prof'), diet: new DietScreen(this, 'diet'), nx: new NutriScreen(this, 'nx')
    };
    this.nav = { dash: navFor('dashboard'), log: navFor('log-workout'), prog: navFor('progress'), nut: navFor('nutrition'), diet: navFor('nutrition'), prof: navFor('profile') };
  }
  restLen() { return Number(this.props.restSeconds) || 90; }
  applyDesignState(v) {
    const id = this.state.sesExId;
    if (!v || v === 'Interactive' || !id) return;
    this.setState((s) => {
      const out = {};
      for (const k in s.dashLists) out[k] = s.dashLists[k].map((x) => {
        if (x.id !== id) return x;
        const n = x.sets.length, part = n > 1 ? Math.max(1, Math.floor(n / 2)) : 0;
        return { ...x, sets: x.sets.map((y, i) => ({ ...y, done: v === 'Review' ? true : v === 'In progress' ? i < part : false })) };
      });
      return { dashLists: out };
    });
    const r = this.restLen();
    const now = Date.now(), idle = { tmState: 'idle', tmEnd: null, tmLeft: r * 1000, tmDur: r };
    if (v === 'Live') this.screens.ses.setState({ ...idle, mode: 'stopwatch', swAcc: 0, swStart: now, laps: [] });
    if (v === 'In progress') this.screens.ses.setState({ mode: 'timer', swAcc: 0, swStart: now - 754000, laps: [], tmDur: r, tmState: 'running', tmEnd: now + Math.round(r * 0.8) * 1000, tmLeft: 0 });
    if (v === 'Review') this.screens.ses.setState({ ...idle, mode: 'stopwatch', swAcc: 2610000, swStart: null, laps: [] });
  }
  applyTheme() { document.documentElement.setAttribute('data-theme', (this.props.theme || 'Dark') === 'Light' ? 'light' : 'dark'); }
  componentDidUpdate(prev) {
    if (prev.sessionState !== this.props.sessionState) this.applyDesignState(this.props.sessionState);
    if (prev.theme !== this.props.theme) this.applyTheme();
    if (prev.restSeconds !== this.props.restSeconds && this.screens.ses.state.tmState === 'idle') { const r = this.restLen(); this.screens.ses.setState({ tmDur: r, tmLeft: r * 1000 }); }
  }
  componentDidMount() {
    setTimeout(() => this.screens.nx.setState({ anim: true }), 400);
    this.applyTheme();
    this.applyDesignState(this.props.sessionState);
    this.timer = setInterval(() => this.screens.ses.tick(), 1000);
    this.frameTimer = setInterval(() => { if (this.state.dashOpen) this.setState((s) => ({ frame: !s.frame })); }, 1400);
  }
  componentWillUnmount() { clearInterval(this.timer); clearInterval(this.frameTimer); }
  initDash() {
    let id = 0;
    const mk = (arr) => arr.map((name) => ({ id: 'ex' + (++id), name, sets: makeSets(name) }));
    this.nextId = 100;
    return {
      skipMemo: { legs: [{ name: 'Calf Raises', date: 'Sun 27 Sep' }], pull: [{ name: 'Face Pulls', date: 'Thu 1 Oct' }] }, memoHide: {}, dashSplit: 'legs', planSplit: 'legs', schedPick: null, dashEdit: false, dashDay: 4, weekPlan: ['cardio', 'rest', 'push', 'pull', 'legs', 'push', 'rest'], weekOver: {}, schedOpen: false, missedSkip: {}, dashOpen: null, dashNew: '', guides: {},
      dashLists: {
        push: mk(['Bench Press', 'Overhead Press', 'Incline Dumbbell Press', 'Tricep Pushdown']),
        pull: mk(['Deadlift', 'Pull-ups', 'Barbell Row', 'Bicep Curl']),
        legs: mk(['Back Squat', 'Romanian Deadlift', 'Walking Lunges', 'Calf Raises']),
        cardio: mk(['Warm-up walk, 5 min', 'Running, 30 min', 'Cool-down walk, 5 min']),
        rest: mk(['Mobility flow, 10 min', 'Light walk, 20 min', 'Stretching, 10 min'])
      }
    };
  }
  go(hash) { if (location.hash === hash) location.hash = ''; location.hash = hash; }
  patchSet(id, i, patch) {
    this.setState((s) => {
      const out = {};
      let memo = s.skipMemo || {};
      for (const k in s.dashLists) out[k] = s.dashLists[k].map((x) => {
        if (x.id !== id) return x;
        if (patch.done) memo = { ...memo, [k]: (memo[k] || []).filter((m) => m.name.toLowerCase() !== (x.name || '').toLowerCase()) };
        return { ...x, skipped: patch.done ? false : x.skipped, sets: x.sets.map((y, j) => (j === i ? { ...y, ...patch } : y)) };
      });
      return { dashLists: out, skipMemo: memo };
    });
  }
  openSession(id) { this.setState({ sesExId: id, sesQueue: [id] }); this.screens.ses.setState({ rest: 0 }); this.go('#session'); }
  startSession() {
    const list = this.state.dashLists[this.state.dashSplit];
    const sel = list.filter((x) => x.sel !== false);
    const pending = sel.filter((x) => !x.sets.every((y) => y.done));
    const q = (pending.length ? pending : sel).map((x) => x.id);
    if (!q.length) return;
    this.setState({ sesQueue: q, sesExId: q[0] });
    this.screens.ses.setState({ elapsed: 0, rest: 0 });
  }
  skipExercise(id) {
    this.setState((s) => {
      let split = null, name = '';
      const lists = {};
      for (const k in s.dashLists) lists[k] = s.dashLists[k].map((x) => { if (x.id !== id) return x; split = k; name = x.name || 'Untitled exercise'; return { ...x, skipped: true }; });
      const all = Object.values(lists).flat();
      const isDone = (eid) => { const e = all.find((x) => x.id === eid); return !e || e.sets.every((y) => y.done); };
      const q = (s.sesQueue || []).filter((x) => x !== id).concat([id]);
      const next = q.find((x) => x !== id && !isDone(x)) || id;
      const memo = { ...(s.skipMemo || {}) };
      if (split) { const list = (memo[split] || []).filter((m) => m.name.toLowerCase() !== name.toLowerCase()); memo[split] = list.concat([{ name, date: 'Fri 2 Oct' }]); }
      return { dashLists: lists, sesQueue: q, sesExId: next, skipMemo: memo };
    });
    this.screens.ses.setState({ rest: 0 });
  }
  setPlanList(fn) { const k = this.state.planSplit || this.state.dashSplit; this.setState((s) => ({ dashLists: { ...s.dashLists, [k]: fn(s.dashLists[k]) } })); }
  pickPlanSplit(k) {
    this.setState((s) => {
      const out = { planSplit: k, dashOpen: null }, pk = s.schedPick;
      if (pk != null) {
        const wp = [...s.weekPlan]; wp[pk] = k;
        const wo = { ...(s.weekOver || {}) }; delete wo[pk];
        out.weekPlan = wp; out.weekOver = wo;
        if (4 - pk - 7 * (s.schedWeek || 0) === 0) out.dashSplit = k;
      }
      return out;
    });
  }
  setList(fn) { const k = this.state.dashSplit; this.setState((s) => ({ dashLists: { ...s.dashLists, [k]: fn(s.dashLists[k]) } })); }
  async fetchGuide(name) {
    const k = name.trim().toLowerCase();
    if (!k || GUIDES[k]) return;
    const g = this.state.guides[k];
    if (g && g.status !== 'error') return;
    this.setState((s) => ({ guides: { ...s.guides, [k]: { status: 'loading' } } }));
    try {
      const r = await window.claude.complete(`You are a certified strength coach. For the exercise "${name.trim()}", reply with ONLY a JSON object, no prose: {"muscles":"2-4 target muscles, comma separated","steps":["3 or 4 short imperative steps explaining how to perform it with correct form"],"tip":"one key form cue or common mistake to avoid"}`);
      const j = JSON.parse(r.slice(r.indexOf('{'), r.lastIndexOf('}') + 1));
      if (!Array.isArray(j.steps) || !j.steps.length) throw new Error('bad');
      this.setState((s) => ({ guides: { ...s.guides, [k]: { status: 'ready', m: String(j.muscles || ''), s: j.steps.slice(0, 5).map(String), t: String(j.tip || '') } } }));
    } catch (e) {
      this.setState((s) => ({ guides: { ...s.guides, [k]: { status: 'error' } } }));
    }
  }
  setIllus(k, v) { this.setState((s) => ({ illus: { ...s.illus, [k]: v } })); }
  async fetchIllus(name) {
    const k = name.trim().toLowerCase();
    if (!k) return;
    const cur = (this.state.illus || {})[k];
    if (cur && cur.status !== 'none') return;
    this.setIllus(k, { status: 'loading', msg: 'Finding an illustration…' });
    try {
      const db = await loadDB();
      const known = ALIAS[k];
      let m = bestMatch(db, known || k);
      const strong = (x) => x && x.score >= (known ? 0.5 : 0.95);
      if (!strong(m) && !known && window.claude) {
        try {
          const std = (await window.claude.complete(`Give the most common standard gym name for the exercise "${name.trim()}" as it would appear in an exercise database (e.g. "Barbell Squat", "Dumbbell Bicep Curl"). Reply with the name only.`)).trim().replace(/["\n].*$/s, '');
          const m2 = bestMatch(db, std);
          if (m2 && m2.score >= 0.6) m = m2; else m = null;
        } catch (e) { m = null; }
      }
      if (m && (strong(m) || m.score >= 0.6)) {
        const imgs = m.e.images.map((p) => IMG_BASE + p);
        this.setIllus(k, { status: 'photo', srcs: [imgs[0], imgs[1] || imgs[0]], ref: m.e.name });
        return;
      }
    } catch (e) { /* fall through to AI drawing */ }
    if (!window.claude) { this.setIllus(k, { status: 'none' }); return; }
    this.setIllus(k, { status: 'loading', msg: 'Drawing an illustration with AI…' });
    try {
      const r = await window.claude.complete(`Draw a clean, minimal line-art illustration of a person performing the exercise "${name.trim()}" at its key position, as an SVG. Requirements: viewBox="0 0 300 180", no background rect, stroke="#40DBA8", stroke-width 4, stroke-linecap round, fill none except a filled circle for the head, any equipment drawn in stroke="#A3ADAA". Anatomically plausible proportions. Reply with ONLY the <svg>…</svg> markup.`);
      const svg = r.slice(r.indexOf('<svg'), r.lastIndexOf('</svg>') + 6);
      if (svg.length < 30) throw new Error('no svg');
      this.setIllus(k, { status: 'svg', src: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg) });
    } catch (e) { this.setIllus(k, { status: 'none' }); }
  }
  addExercise() {
    const name = this.state.dashNew.trim();
    if (!name) return;
    const id = 'ex' + (++this.nextId);
    const split = this.state.dashSplit;
    this.setList((l) => [...l, { id, name, sets: makeSets(name, split) }]);
    this.setState({ dashNew: '' });
    this.fetchGuide(name);
    this.fetchIllus(name);
  }
  dashVals() {
    const meta = {
      push: ['Push', 'Push Day', 'Chest, shoulders, triceps'],
      pull: ['Pull', 'Pull Day', 'Back, biceps, rear delts'],
      legs: ['Legs', 'Leg Day', 'Quads, hamstrings, glutes, calves'],
      cardio: ['Cardio', 'Cardio Day', 'Heart and endurance'],
      rest: ['Rest', 'Rest Day', 'Recovery']
    };
    const st = this.state;
    const cur = st.dashSplit;
    const editing = st.dashEdit;
    const list = st.dashLists[cur];
    const nSel = list.filter((x) => x.sel !== false).length;
    const TK = 4, WDS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], WDF = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const prog = this.screens.prog;
    const dk = st.dashDay == null ? TK : st.dashDay;
    const wkDate = (k) => new Date(2026, 8, 28 + k);
    const dLabel = (k) => WDS[k] + ' ' + wkDate(k).getDate() + ' ' + MON[wkDate(k).getMonth()];
    const futureSplit = (k) => (st.weekOver || {})[k] || st.weekPlan[k];
    const info = (k) => {
      if (k <= TK) { const d = prog.day(TK - k); return { split: k === TK ? cur : d.split, status: prog.stat(d), d }; }
      return { split: futureSplit(k), status: 'upcoming' };
    };
    const editPast = (k, patch) => {
      const i = TK - k, inf = info(k);
      prog.setState((s) => {
        const base = s.edits[i] || { split: inf.split, status: inf.status === 'missed' ? 'missed' : 'done', exIds: prog.planFor(inf.split).map((x) => x.id), dur: (inf.d && inf.d.dur) || (inf.split === 'cardio' ? 35 : 50) };
        const nx = { ...base, ...patch };
        if (patch.split && patch.split !== base.split) { nx.exIds = prog.planFor(patch.split).map((x) => x.id); nx.dur = patch.split === 'cardio' ? 35 : 50; }
        return { edits: { ...s.edits, [i]: nx } };
      });
    };
    const sel = info(dk), selSplit = sel.split;
    const isToday = dk === TK, isPast = dk < TK;
    const ST = { done: 'Done', partial: 'In progress', planned: 'Planned', rest: 'Rest day', missed: 'Missed', upcoming: 'Upcoming' };
    const week = WDS.map((wd, k) => {
      const inf = info(k), s = inf.status, on = k === dk;
      let css = s === 'done' ? 'background: #40DBA8; color: #02120C; border: 1.5px solid #40DBA8;'
        : s === 'partial' ? 'background: rgba(64,219,168,0.18); color: var(--accT); border: 1.5px solid #40DBA8;'
        : s === 'planned' ? 'background: transparent; color: var(--accT); border: 1.5px solid #40DBA8;'
        : s === 'missed' ? 'background: #FF6B57; color: #1A0703; border: 1.5px solid #FF6B57; box-shadow: 0 0 14px -3px rgba(255,107,87,0.7);'
        : s === 'rest' || inf.split === 'rest' ? 'background: transparent; color: var(--ink3); border: 1.5px dashed var(--ink3);'
        : 'background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink2); border: 1.5px solid var(--line);';
      if (on) css += ' box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--ink);';
      return {
        wd: k === TK ? 'Today' : wd, num: wkDate(k).getDate(), tag: s === 'missed' ? 'Missed' : PG_TAG[inf.split], on, style: css,
        wdStyle: on || k === TK ? 'color: var(--ink); font-weight: 600;' : 'color: var(--ink3);',
        aria: dLabel(k) + ', ' + PG_NAME[inf.split] + ', ' + ST[s === 'upcoming' && inf.split === 'rest' ? 'rest' : s],
        pick: () => this.setState({ dashDay: k, dashEdit: false, dashOpen: null })
      };
    });
    let dayRows = [], dayNote = '';
    if (isPast) {
      const d = sel.d, s = sel.status;
      if (s === 'done' || s === 'partial') {
        dayRows = d.ex.map((e, j) => ({ n: pad2(j + 1), name: e.name, meta: e.sets.length + ' sets', style: '', done: true }));
        if (d.cardio) dayRows.push({ n: '01', name: d.cardio.name, meta: d.cardio.min + ' min · ' + d.cardio.km + ' km', style: '', done: true });
        dayNote = 'Logged as done. Change the type or mark it missed if that is wrong.';
      } else if (s === 'missed') {
        dayRows = prog.planFor(selSplit).map((e, j) => ({ n: pad2(j + 1), name: e.name || 'Untitled exercise', meta: e.sets.length + ' sets', style: 'opacity: 0.45;' }));
        dayNote = 'Marked as missed. Tap "Yes, done" if you actually trained.';
      } else dayNote = 'Rest day. Pick a workout type above if you trained.';
    } else if (!isToday) {
      dayRows = selSplit === 'rest' ? [] : (st.dashLists[selSplit] || []).map((e, j) => ({ n: pad2(j + 1), name: e.name || 'Untitled exercise', meta: e.sets.length + ' sets', style: '' }));
      dayNote = selSplit === 'rest' ? 'Rest day. Nothing scheduled.' : 'Changes here apply to this ' + WDF[dk] + ' only. Use Schedule to change every week.';
    }
    const missedK = [0, 1, 2, 3].find((k) => info(k).status === 'missed' && !(st.missedSkip || {})[k]);
    const missedSplit = missedK != null ? info(missedK).split : null;
    return {
      ...(() => {
        const memos = ((st.skipMemo || {})[cur] || []).filter((m) => m.date !== 'Fri 2 Oct');
        const show = isToday && memos.length > 0 && !(st.memoHide || {})[cur];
        const have = new Set(list.map((x) => (x.name || '').toLowerCase()));
        const missing = memos.filter((m) => !have.has(m.name.toLowerCase()));
        const names = memos.map((m) => m.name);
        return {
          hasMemo: show,
          memoTitle: show ? (memos.length === 1 ? 'You skipped ' + names[0] + ' last ' + PG_NAME[cur] : 'You skipped ' + memos.length + ' exercises last ' + PG_NAME[cur]) : '',
          memoSub: show ? memos[0].date + (memos.length > 1 ? ' · ' + names.join(', ') : '') + (missing.length ? ' · Not in today\'s list' : ' · Try to fit it in today') : '',
          memoCanAdd: show && missing.length > 0,
          memoAdd: () => this.setState((s) => ({ dashLists: { ...s.dashLists, [cur]: [...s.dashLists[cur], ...missing.map((m) => ({ id: 'ex' + (++this.nextId), name: m.name, sets: makeSets(m.name, cur) }))] }, memoHide: { ...(s.memoHide || {}), [cur]: true } })),
          memoLater: () => this.setState((s) => ({ memoHide: { ...(s.memoHide || {}), [cur]: true } })),
          memoStop: () => this.setState((s) => ({ skipMemo: { ...(s.skipMemo || {}), [cur]: [] } }))
        };
      })(),
      showChips: isToday && !!editing,
      cardLabel: isToday ? "Today's suggested workout" : dLabel(dk) + ' · ' + (isPast ? ST[sel.status] : 'Scheduled'),
      isToday, notToday: !isToday, isPast,
      cardLabelStyle: isPast && sel.status === 'missed' ? 'color: #FF6B57;' : 'color: var(--accT);',
      showStatus: isPast && selSplit !== 'rest',
      statuses: [['done', 'Yes, done'], ['missed', 'Missed it']].map(([k, label]) => {
        const on = k === 'done' ? ['done', 'partial'].includes(sel.status) : sel.status === 'missed';
        return { label, on, pick: () => editPast(dk, { status: k }),
          style: on ? (k === 'done' ? 'background: #40DBA8; color: #02120C;' : 'background: rgba(255,138,122,0.18); color: var(--danger);') : 'background: transparent; color: var(--ink2);' };
      }),
      ...(() => {
        const isM = isPast && sel.status === 'missed';
        const rec = (st.recovered || {})[dk];
        const opts = [TK, 5, 6];
        const spOf = (k) => (k === TK ? cur : futureSplit(k));
        const ok = opts.filter((k) => spOf(k) !== selSplit);
        const pick = (st.recPick != null && ok.includes(st.recPick)) ? st.recPick : (ok[0] != null ? ok[0] : null);
        const plan = isM ? prog.planFor(selSplit) : [];
        return {
          isMissedDay: isM, notMissedDay: !isM, isFuture: !isPast && !isToday,
          missTitle: isM ? 'You missed ' + PG_NAME[selSplit] : '',
          missSub: isM ? dLabel(dk) + ' · ' + plan.length + ' exercise' + (plan.length === 1 ? '' : 's') + ' not done' : '',
          missRows: plan.map((e, j) => ({ n: pad2(j + 1), name: e.name || 'Untitled exercise', meta: e.sets.length + ' sets' })),
          isRecovered: isM && rec != null, canRecover: isM && rec == null && pick != null && !(st.recClosed || {})[dk],
          recClose: () => this.setState((s) => ({ recClosed: { ...(s.recClosed || {}), [dk]: true }, missedSkip: { ...(s.missedSkip || {}), [dk]: true } })),
          recTitle: rec != null ? 'Recovered on ' + (rec === TK ? 'today, ' : '') + dLabel(rec) : '',
          recDays: opts.map((k) => ({
            wd: k === TK ? 'Today' : WDS[k], num: wkDate(k).getDate(), on: k === pick,
            now: spOf(k) === selSplit ? 'Already ' + PG_TAG[selSplit] : 'Now ' + PG_TAG[spOf(k)],
            style: spOf(k) === selSplit ? 'background: transparent; border-color: var(--line); border-style: dashed; color: var(--ink3); opacity: 0.6; cursor: default;'
              : k === pick ? 'background: rgba(64,219,168,0.14); border-color: #40DBA8; color: var(--ink); box-shadow: 0 0 18px -6px rgba(64,219,168,0.7);' : 'background: rgba(var(--w), calc(0.03 * var(--wa))); border-color: var(--line); color: var(--ink2);',
            pick: () => { if (spOf(k) !== selSplit) this.setState({ recPick: k }); }
          })),
          recNote: pick == null ? '' : spOf(pick) === 'rest' ? 'Uses your rest day on ' + (pick === TK ? 'today' : dLabel(pick)) + ' for ' + PG_NAME[selSplit] + '.' : 'Replaces ' + (pick === TK ? 'today\'s ' : dLabel(pick) + '\'s ') + PG_NAME[spOf(pick)] + ' with ' + PG_NAME[selSplit] + '.',
          recLabel: pick == null ? '' : 'Recover on ' + (pick === TK ? 'today' : dLabel(pick)),
          recDo: () => pick != null && this.setState((s) => {
            const out = { recovered: { ...(s.recovered || {}), [dk]: pick }, missedSkip: { ...(s.missedSkip || {}), [dk]: true } };
            if (pick === TK) { out.dashSplit = selSplit; out.recPrev = { ...(s.recPrev || {}), [dk]: { k: pick, split: s.dashSplit } }; }
            else { out.weekOver = { ...(s.weekOver || {}), [pick]: selSplit }; out.recPrev = { ...(s.recPrev || {}), [dk]: { k: pick, split: (s.weekOver || {})[pick] } }; }
            return out;
          }),
          recUndo: () => this.setState((s) => {
            const p = (s.recPrev || {})[dk], r = { ...(s.recovered || {}) }; delete r[dk];
            const out = { recovered: r };
            if (p && p.k === TK) out.dashSplit = p.split;
            else if (p) { const wo = { ...(s.weekOver || {}) }; if (p.split) wo[p.k] = p.split; else delete wo[p.k]; out.weekOver = wo; }
            return out;
          })
        };
      })(),
      dayRows: dayRows.map((r) => ({ ...r, done: !!r.done, dot: r.done ? 'background: #40DBA8; border-color: #40DBA8;' : 'background: transparent; border-color: rgba(var(--w), calc(0.25 * var(--wa)));' })),
      hasRows: dayRows.length > 0, noRows: dayRows.length === 0, dayNote,
      dayEmptyTitle: selSplit === 'rest' ? 'Rest day' : 'No workout planned yet',
      dayEmptySub: selSplit === 'rest' ? 'Nothing scheduled for ' + dLabel(dk) + '. Add a workout if you plan to train.' : 'Your ' + PG_NAME[selSplit] + ' plan has no exercises. Add your own, or import a plan.',
      dayAdd: () => this.setState({ planSplit: selSplit, schedPick: null, dashOpen: null, planFrom: { split: selSplit, label: dLabel(dk) + ' · ' + PG_NAME[selSplit] } }),
      backToday: () => this.setState({ dashDay: TK }),
      openProgress: () => { const i = TK - dk; prog.setState({ sel: i, off: Math.floor(i / prog.state.range), editing: false, draft: null }); this.go('#progress'); },
      week,
      schedOpen: !!st.schedOpen, schedClosed: !st.schedOpen,
      schedLabel: st.schedOpen ? 'Close' : 'Schedule',
      schedBtnStyle: st.schedOpen ? 'border-color: rgba(64,219,168,0.45); color: var(--accT);' : '',
      toggleSched: () => this.setState({ schedOpen: !this.state.schedOpen }),
      sched: WDF.map((day, k) => ({
        day, value: st.weekPlan[k], muscles: meta[st.weekPlan[k]][2],
        set: (e) => { const v = e.target.value; this.setState((s) => { const wp = [...s.weekPlan]; wp[k] = v; const wo = { ...(s.weekOver || {}) }; delete wo[k]; return { weekPlan: wp, weekOver: wo }; }); }
      })),
      hasMissed: missedK != null,
      missedTitle: missedK != null ? 'You missed ' + PG_NAME[missedSplit] + ' on ' + WDF[missedK] : '',
      missedSub: missedK != null ? 'Do it today and move the rest of this week back one day, or skip it and stay on schedule.' : '',
      missedDo: () => {
        const seq = [cur, futureSplit(5), futureSplit(6)];
        this.setState((s) => ({ dashSplit: missedSplit, dashDay: TK, weekOver: { ...(s.weekOver || {}), 5: seq[0], 6: seq[1] }, missedSkip: { ...(s.missedSkip || {}), [missedK]: true } }));
      },
      missedSkip: () => this.setState((s) => ({ missedSkip: { ...(s.missedSkip || {}), [missedK]: true } })),
      selCount: (st.dashDay == null || st.dashDay === 4) ? `${nSel} of ${list.length} selected` : '',
      noneSel: nSel === 0,
      startLabel: list.length === 0 && !editing ? '+ Add workout' : nSel === 0 ? 'Select exercises to start' : `Start session · ${nSel} exercise${nSel === 1 ? '' : 's'}`,
      startHref: list.length === 0 && !editing ? '#log-workout' : '#session',
      startOff: list.length > 0 && nSel === 0,
      start: () => { if (list.length === 0) this.setState({ planSplit: cur, schedPick: null, dashOpen: null, planFrom: { split: cur, label: 'Today · ' + PG_NAME[cur] } }); else this.startSession(); },
      startStyle: list.length > 0 && nSel === 0 ? 'opacity: 0.4; pointer-events: none; box-shadow: none;' : '',
      showEditBtn: isToday && (list.length > 0 || !!editing),
      emptySub: 'Your ' + PG_NAME[cur] + ' plan has no exercises. Add your own, or import a plan from a photo or text.',
      title: meta[selSplit][1], muscles: meta[selSplit][2],
      editing, editLabel: editing ? 'Done' : 'Edit',
      editStyle: editing ? 'background: #40DBA8; color: #02120C; border-color: #40DBA8;' : 'background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); border-color: rgba(var(--w), calc(0.1 * var(--wa)));',
      toggleEdit: () => this.setState({ dashEdit: !this.state.dashEdit, dashOpen: null }),
      empty: list.length === 0 && !editing,
      newName: st.dashNew,
      setNew: (e) => { const v = e.target.value; this.setState({ dashNew: v }); },
      newKey: (e) => { if (e.key === 'Enter') { e.preventDefault(); this.addExercise(); } },
      add: () => this.addExercise(),
      addStyle: st.dashNew.trim() ? '' : 'opacity: 0.4;',
      items: list.map((ex, i) => {
        const key = ex.name.trim().toLowerCase();
        const builtIn = GUIDES[key];
        const g = builtIn ? { status: 'ready', ...builtIn } : (st.guides[key] || { status: 'loading' });
        const open = st.dashOpen === ex.id && !editing;
        return {
          n: String(i + 1).padStart(2, '0'), name: ex.name, view: !editing, open,
          ...(() => {
            const sel = ex.sel !== false;
            const done = ex.sets.every((x) => x.done);
            const nd = ex.sets.filter((x) => x.done).length;
            const toggleSel = () => this.setList((l) => l.map((x) => (x.id === ex.id ? { ...x, sel: x.sel === false } : x)));
            const toggleOpen = () => { const o = this.state.dashOpen === ex.id; this.setState({ dashOpen: o ? null : ex.id }); if (!o) { this.fetchGuide(ex.name); this.fetchIllus(ex.name); } };
            const skipped = !!ex.skipped && !done;
            return {
              sel: sel || done, done, skippedX: skipped,
              cardStyle: done ? 'border-color: rgba(64,219,168,0.22); background: rgba(64,219,168,0.05);'
                : skipped ? 'border-color: rgba(255,107,87,0.28); background: rgba(255,107,87,0.05);'
                : sel ? 'border-color: var(--line); background: rgba(var(--w), calc(0.03 * var(--wa)));'
                : 'border-color: var(--line); background: transparent; opacity: 0.7;',
              prog: done ? 'DONE' : skipped ? 'SKIPPED' : nd ? `${nd}/${ex.sets.length}` : '',
              progStyle: done ? 'color: var(--accT);' : skipped ? 'color: var(--danger);' : 'color: var(--ink3);',
              radioLabel: done ? `Review ${ex.name} session` : `Include ${ex.name}`,
              radioClick: done ? () => this.openSession(ex.id) : skipped ? () => this.setList((l) => l.map((x) => (x.id === ex.id ? { ...x, skipped: false, sel: true } : x))) : toggleSel,
              nameClick: done ? () => this.openSession(ex.id) : toggleOpen,
              radioStyle: skipped ? 'background: #FF6B57; border-color: #FF6B57; box-shadow: 0 0 12px -2px rgba(255,107,87,0.6);'
                : done ? 'background: #40DBA8; border-color: #40DBA8; box-shadow: 0 0 12px -2px rgba(64,219,168,0.6);'
                : sel ? 'background: rgba(64,219,168,0.08); border-color: #40DBA8;' : 'background: transparent; border-color: rgba(var(--w), calc(0.25 * var(--wa)));',
              dotStyle: done || skipped ? 'display: none;' : sel ? 'background: #40DBA8;' : 'opacity: 0;'
            };
          })(),
          showGuide: open,
          chev: open ? 'transform: rotate(180deg);' : '',
          ...(() => {
            const il = (st.illus || {})[key] || { status: 'loading', msg: 'Finding an illustration…' };
            const f = !!st.frame;
            return {
              illLoading: il.status === 'loading', illMsg: il.msg || '',
              illPhoto: il.status === 'photo', illSvg: il.status === 'svg', illNone: il.status === 'none',
              img0: il.srcs ? il.srcs[0] : '', img1: il.srcs ? il.srcs[1] : '',
              op0: f ? 'opacity: 0;' : 'opacity: 1;', op1: f ? 'opacity: 1;' : 'opacity: 0;',
              illLabel: f ? 'Finish position' : 'Start position',
              bg0: (il.srcs ? `background-image: url("${il.srcs[0]}");` : '') + (f ? 'opacity: 0;' : 'opacity: 1;'),
              bg1: (il.srcs ? `background-image: url("${il.srcs[1]}");` : '') + (f ? 'opacity: 1;' : 'opacity: 0;'),
              svgBg: il.src ? `background-image: url("${il.src}");` : '',
              illRetry: () => this.fetchIllus(ex.name)
            };
          })(),
          toggle: () => { const o = this.state.dashOpen === ex.id; this.setState({ dashOpen: o ? null : ex.id }); if (!o) { this.fetchGuide(ex.name); this.fetchIllus(ex.name); } },
          setName: (e) => { const v = e.target.value; this.setList((l) => l.map((x) => (x.id === ex.id ? { ...x, name: v } : x))); },
          remove: () => this.setList((l) => l.filter((x) => x.id !== ex.id)),
          loading: g.status === 'loading', failed: g.status === 'error', ready: g.status === 'ready',
          retry: () => this.fetchGuide(ex.name),
          ai: !builtIn,
          muscles: g.m || '', tip: g.t || '',
          steps: (g.s || []).map((text, j) => ({ n: j + 1, text }))
        };
      }),
      chips: Object.keys(meta).map((k) => ({
        label: meta[k][0], on: k === selSplit,
        style: k === selSplit ? 'background: #40DBA8; color: #02120C;' : 'background: transparent; color: var(--ink2);',
        pick: () => {
          if (isToday) this.setState({ dashSplit: k, dashOpen: null });
          else if (isPast) editPast(dk, { split: k });
          else this.setState((s) => ({ weekOver: { ...(s.weekOver || {}), [dk]: k } }));
        }
      }))
    };
  }
  schedVals() {
    const st = this.state, TK = 4;
    const WDS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], WDF = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const pk = st.schedPick;
    const prog = this.screens.prog;
    const wo = Math.max(-25, Math.min(8, st.schedWeek || 0));
    const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dt = (k) => new Date(2026, 8, 28 + 7 * wo + k);
    const ago = (k) => TK - k - 7 * wo;
    const info = (k) => {
      const i = ago(k);
      if (i > 0 && i < PG_N) { const d = prog.day(i); return { split: d.split, status: prog.stat(d) }; }
      if (i === 0) { const d = prog.day(0); return { split: st.dashSplit, status: prog.stat(d) }; }
      return { split: (wo === 0 && (st.weekOver || {})[k]) || st.weekPlan[k], status: 'upcoming' };
    };
    const days = WDS.map((wd, k) => {
      const inf = info(k), s = inf.status, on = pk === k;
      let css = s === 'done' ? 'background: #40DBA8; color: #02120C; border: 1.5px solid #40DBA8;'
        : s === 'partial' ? 'background: rgba(64,219,168,0.18); color: var(--accT); border: 1.5px solid #40DBA8;'
        : s === 'planned' ? 'background: transparent; color: var(--accT); border: 1.5px solid #40DBA8;'
        : s === 'missed' ? 'background: #FF6B57; color: #1A0703; border: 1.5px solid #FF6B57; box-shadow: 0 0 14px -3px rgba(255,107,87,0.7);'
        : s === 'rest' || inf.split === 'rest' ? 'background: transparent; color: var(--ink3); border: 1.5px dashed var(--ink3);'
        : 'background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink2); border: 1.5px solid var(--line);';
      if (on) css += ' box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--ink);';
      return {
        wd: ago(k) === 0 ? 'Today' : wd, num: dt(k).getDate(), tag: PG_TAG[inf.split], on, style: css,
        aria: WDF[k] + ': ' + PG_NAME[st.weekPlan[k]] + ' every week. Tap to change.',
        pick: () => this.setState((s) => (on ? { schedPick: null } : { schedPick: k, planSplit: inf.split, dashOpen: null })),
        wdStyle: on || ago(k) === 0 ? 'color: var(--ink); font-weight: 600;' : 'color: var(--ink3);',
        tagStyle: 'color: var(--ink3);'
      };
    });
    return {
      days, picking: pk != null,
      weekName: wo === 0 ? 'This week' : wo === -1 ? 'Last week' : wo === 1 ? 'Next week' : Math.abs(wo) + (wo < 0 ? ' weeks ago' : ' weeks ahead'),
      range: dt(0).getDate() + ' ' + MON[dt(0).getMonth()] + ' – ' + dt(6).getDate() + ' ' + MON[dt(6).getMonth()],
      prev: () => { if (wo > -25) this.setState({ schedWeek: wo - 1 }); },
      next: () => { if (wo < 8) this.setState({ schedWeek: wo + 1 }); },
      prevStyle: wo <= -25 ? 'opacity: 0.35; cursor: default;' : '',
      nextStyle: wo >= 8 ? 'opacity: 0.35; cursor: default;' : '',
      hint: pk == null ? 'Tap a day to change it' : (wo < 0 || (wo === 0 && pk < TK)) ? 'Applies from next week' : 'Repeats every week',
      dayName: pk != null ? 'Every ' + WDF[pk] : '',
      types: ['push', 'pull', 'legs', 'cardio', 'rest'].map((k) => ({
        label: PG_TAG[k], on: pk != null && st.weekPlan[pk] === k,
        style: pk != null && st.weekPlan[pk] === k ? 'background: #40DBA8; color: #02120C;' : 'background: transparent; color: var(--ink2);',
        pick: () => this.setState((s) => {
          const wp = [...s.weekPlan]; wp[pk] = k;
          const wo = { ...(s.weekOver || {}) }; delete wo[pk];
          return pk === TK ? { weekPlan: wp, weekOver: wo, dashSplit: k } : { weekPlan: wp, weekOver: wo };
        })
      }))
    };
  }
  renderVals() {
    const out = { nav: this.nav, dash: this.dashVals(), sch: this.schedVals() };
    for (const k in this.screens) out[k] = this.screens[k].renderVals();
    return out;
  }
}
