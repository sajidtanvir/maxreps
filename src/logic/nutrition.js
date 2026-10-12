import { Sub, bind } from './shared.js';

export const BD_FOODS = [
  ['rice', 'Plain rice', '1 cup cooked', 205, 4.3, 45, 0.4, [], 1], ['ruti', 'Atta ruti', '1 piece', 110, 3.5, 22, 1, [], 1],
  ['paratha', 'Paratha', '1 piece', 260, 5, 34, 12, [], 1], ['dal', 'Masoor dal', '1 bowl', 180, 12, 30, 1, [], 1],
  ['egg', 'Boiled egg', '1 egg', 78, 6.3, 0.6, 5.3, ['egg'], 1], ['omelette', 'Egg omelette', '2 eggs', 190, 13, 1, 15, ['egg'], 1],
  ['chicken', 'Chicken curry', '150 g', 280, 32, 6, 14, ['meat'], 2], ['chickbreast', 'Grilled chicken breast', '150 g', 230, 46, 0, 5, ['meat'], 2],
  ['rui', 'Rui fish curry', '1 piece', 190, 22, 3, 10, ['fish'], 2], ['ilish', 'Ilish fish', '1 piece', 300, 22, 0, 23, ['fish'], 3],
  ['pangas', 'Pangas fish curry', '1 piece', 210, 20, 3, 13, ['fish'], 1], ['beef', 'Beef curry', '150 g', 350, 34, 5, 21, ['meat', 'beef'], 3],
  ['chola', 'Chola (chickpeas)', '1 cup', 270, 15, 45, 4, [], 1], ['khichuri', 'Khichuri', '1 plate', 420, 14, 65, 12, [], 1],
  ['doi', 'Tok doi (plain yogurt)', '200 g', 120, 7, 9, 6, ['dairy'], 1], ['mishtidoi', 'Mishti doi', '100 g', 150, 4, 25, 4, ['dairy'], 1],
  ['milk', 'Milk', '1 glass, 250 ml', 150, 8, 12, 8, ['dairy'], 1], ['banana', 'Banana', '1 medium', 105, 1.3, 27, 0.4, [], 1],
  ['badam', 'Peanuts (badam)', '30 g', 170, 7.5, 5, 14, ['nuts'], 1], ['chira', 'Chira with doi', '1 bowl', 300, 9, 55, 5, ['dairy'], 1],
  ['muri', 'Muri', '1 cup', 55, 1.6, 12, 0.1, [], 1], ['bhaji', 'Mixed vegetable bhaji', '1 cup', 120, 3, 12, 7, [], 1],
  ['shak', 'Shak (leafy greens)', '1 cup', 60, 3, 6, 3, [], 1], ['soya', 'Soybean chunks', '50 g dry', 170, 26, 16, 0.3, [], 1],
  ['chhana', 'Chhana / paneer', '100 g', 265, 18, 3, 20, ['dairy'], 2], ['whey', 'Whey protein shake', '1 scoop', 120, 24, 3, 1.5, ['dairy'], 3],
  ['oats', 'Oats with milk', '1 bowl', 300, 12, 45, 8, ['dairy'], 2], ['mango', 'Mango', '1 medium', 200, 2.8, 50, 1.3, [], 2],
  ['mishtialu', 'Sweet potato (mishti alu)', '1 medium', 115, 2, 27, 0.1, [], 1], ['tea', 'Tea with milk and sugar', '1 cup', 60, 1.5, 10, 1.5, ['dairy'], 1]
].map(([id, name, portion, kcal, p, c, f, tags, cost]) => ({ id, name, portion, kcal, p, c, f, tags, cost }));
export const NX_FOOD = Object.fromEntries(BD_FOODS.map((f) => [f.id, f]));
export const NX_MEALS = [['breakfast', 'Breakfast'], ['lunch', 'Lunch'], ['snack', 'Snack'], ['dinner', 'Dinner']];
export const NX_GOALS = [['gain', 'Gain muscle', 'Eat a little above maintenance and lift'], ['lose', 'Lose fat', 'Eat below maintenance, keep protein high'], ['maintain', 'Stay the same', 'Hold your weight and build habits']];
export const NX_ACTS = [[1.2, 'Mostly sitting', 'Desk job, little exercise'], [1.375, 'Lightly active', 'Train 1–3 days a week'], [1.55, 'Active', 'Train 3–5 days a week'], [1.725, 'Very active', 'Train 6–7 days or a physical job']];
export const NX_DIETS = [['all', 'Everything', 'Meat, fish, eggs, dairy'], ['nobeef', 'No beef', 'Everything except beef'], ['eggveg', 'Eggs + veg', 'No meat or fish'], ['veg', 'Vegetarian', 'No meat, fish or eggs']];
export const NX_AVOID = [['dairy', 'Dairy'], ['fish', 'Fish'], ['nuts', 'Nuts'], ['egg', 'Eggs']];
export const NX_BUDGET = [[1, 'Low', 'Rice, dal, eggs, local fish, seasonal veg'], [2, 'Medium', 'Adds chicken, chhana, fruit'], [3, 'Flexible', 'Adds beef, ilish, protein powder']];
export const NX_MAC = [['p', 'Protein', '#6CCBF5'], ['c', 'Carbs', '#F5C46C'], ['f', 'Fat', '#C7A8FF']];
export const NX_PKG = { gain: 1.2, lose: 1.2, maintain: 1.0 };
export const nxTargets = (p) => {
  const bmr = 10 * p.weight + 6.25 * p.height - 5 * p.age + (p.gender === 'male' ? 5 : -161);
  const tdee = Math.round(bmr * p.act);
  const adj = p.goal === 'gain' ? 300 : p.goal === 'lose' ? -450 : 0;
  const kcal = p.kcalOverride ? Math.round(p.kcalOverride) : Math.round((tdee + adj) / 10) * 10;
  const pr = Math.round(p.weight * NX_PKG[p.goal]);
  const f = Math.round((kcal * 0.27) / 9);
  const c = Math.max(0, Math.round((kcal - pr * 4 - f * 9) / 4));
  return { tdee, kcal, p: pr, c, f };
};
export const nxAllowed = (f, pr) => {
  const t = f.tags;
  if (pr.diet === 'nobeef' && t.includes('beef')) return false;
  if ((pr.diet === 'eggveg' || pr.diet === 'veg') && (t.includes('meat') || t.includes('fish'))) return false;
  if (pr.diet === 'veg' && t.includes('egg')) return false;
  if ((pr.avoid || []).some((a) => t.includes(a))) return false;
  return f.cost <= (pr.budget || 2);
};
export const r0 = (v) => Math.round(v);
export const fmtK = (v) => Math.round(v).toLocaleString('en-US');

export const NX_TODAY = 6;
export const NX_SHARE = { breakfast: 0.25, lunch: 0.35, snack: 0.15, dinner: 0.25 };
export const NX_TPL = {
  breakfast: [[['ruti', 'paratha', 'ruti'], 2], [['omelette', 'egg', 'chola', 'doi'], 1], [['tea', 'banana'], 1]],
  lunch: [[['rice'], 2], [['dal'], 1], [['rui', 'chicken', 'pangas', 'soya', 'chola'], 1], [['shak', 'bhaji'], 1]],
  snack: [[['banana', 'mango', 'muri'], 1], [['badam', 'doi', 'chola'], 1]],
  dinner: [[['rice', 'ruti'], 1], [['chicken', 'rui', 'chhana', 'pangas', 'soya'], 1], [['bhaji', 'shak'], 1], [['doi', 'dal', 'milk'], 1]]
};
export const nxTot = (l) => l.reduce((a, x) => ({ k: a.k + x.food.kcal * x.qty, p: a.p + x.food.p * x.qty, c: a.c + x.food.c * x.qty, f: a.f + x.food.f * x.qty }), { k: 0, p: 0, c: 0, f: 0 });

export class NutriScreen extends Sub {
  planOf(i) {
    const cur = this.host.screens.diet.state.plan;
    if (i >= NX_TODAY) return cur;
    if (this._snap === undefined) this._snap = cur ? JSON.parse(JSON.stringify(cur)) : null;
    return this._snap;
  }
  dayList(i) {
    const plan = this.planOf(i), ov = (this.state.ov || {})[i] || {};
    const E = ov.eaten || {}, Q = ov.qty || {}, R = ov.removed || {};
    const meals = plan ? plan.meals : [];
    const last = meals.length ? meals[meals.length - 1].id : null;
    const l = [];
    meals.forEach((m) => m.items.forEach((it) => {
      const id = 'p' + it.id;
      if (R[id]) return;
      l.push({ id, meal: m.id, fromPlan: true, qty: Q[id] || 1,
        food: { name: it.name || 'Untitled food', portion: it.portion || '', kcal: Number(it.kcal) || 0, p: Number(it.protein) || 0, c: Number(it.carbs) || 0, f: Number(it.fat) || 0, tags: [], cost: 1 },
        eaten: E[id] !== undefined ? E[id] : (i < NX_TODAY || (i === NX_TODAY && m.id !== last)) });
    }));
    (ov.extra || []).forEach((x) => l.push({ ...x, qty: Q[x.id] || x.qty || 1, eaten: E[x.id] !== undefined ? E[x.id] : false }));
    return l;
  }
  setOv(i, fn) { this.setState((s) => { const all = s.ov || {}; return { ov: { ...all, [i]: fn(all[i] || {}) } }; }); }
  mealNeed(i, k) {
    const pr = this.state.profile, T = nxTargets(pr), dl = this.dayList(i);
    const day = nxTot(dl), m = nxTot(dl.filter((x) => x.meal === k));
    const sh = day.k > 0 ? m.k / day.k : 0.25;
    const share = sh > 0 ? sh : 0.25;
    return { k: Math.max(0, (T.kcal - day.k) * share), p: Math.max(0, (T.p - day.p) * share), c: Math.max(0, (T.c - day.c) * share), f: Math.max(0, (T.f - day.f) * share), dayK: day.k, T };
  }
  openPop(k) {
    const pr = this.state.profile;
    const need = this.mealNeed(this.state.date, k);
    const plan = this.planOf(this.state.date);
    const meal = plan && plan.meals.find((x) => x.id === k);
    const items = this.dayList(this.state.date).filter((x) => x.meal === k);
    const tok = (this.ideaTok = (this.ideaTok || 0) + 1);
    const dflt = this.defaultOpen();
    this.setState((s) => ({ pop: k, popSel: {}, popQ: '', popSave: false, ideas: [], ideasStatus: window.claude ? 'loading' : 'error', openMeals: { ...(s.openMeals || dflt), [k]: true } }));
    if (!window.claude) return;
    const pref = NX_DIETS.find((x) => x[0] === pr.diet)[1] + ((pr.avoid || []).length ? ', avoid ' + pr.avoid.join(', ') : '') + ', ' + NX_BUDGET.find((x) => x[0] === pr.budget)[1].toLowerCase() + ' budget';
    const mealName = (meal ? meal.name : 'a meal').toLowerCase();
    window.claude.complete('Suggest 3 foods easy to find in Bangladesh for ' + mealName + '. The day still needs about ' + r0(need.k) + ' kcal, ' + r0(need.p) + ' g protein, ' + r0(need.c) + ' g carbs, ' + r0(need.f) + ' g fat from this meal. Already in the meal: ' + (items.map((x) => x.food.name).join(', ') || 'nothing') + '. Preferences: ' + pref + '. Reply with ONLY JSON: {"ideas":[{"name":"food","portion":"amount","kcal":0,"protein":0,"carbs":0,"fat":0,"why":"one short reason, max 8 words"}]}')
      .then((r) => {
        const j = JSON.parse(r.slice(r.indexOf('{'), r.lastIndexOf('}') + 1));
        const num = (v) => Math.max(0, Number(v) || 0);
        const ideas = (j.ideas || []).filter((x) => x && x.name).slice(0, 3).map((x) => ({ name: String(x.name), portion: String(x.portion || ''), kcal: num(x.kcal), p: num(x.protein), c: num(x.carbs), f: num(x.fat), why: String(x.why || ''), tags: [], cost: 1, ai: true }));
        if (!ideas.length) throw new Error('none');
        if (tok === this.ideaTok) this.setState({ ideas, ideasStatus: 'idle' });
      })
      .catch(() => { if (tok === this.ideaTok) this.setState({ ideasStatus: 'error' }); });
  }
  defaultOpen() {
    const plan = this.planOf(this.state.date);
    const ms = plan ? plan.meals : [];
    return ms.length ? { [ms[ms.length - 1].id]: true } : {};
  }
  constructor(host, key) {
    super(host, key);
    let n = 0;
    const it = (meal, id, qty) => ({ id: 'nl' + (++n), meal, food: NX_FOOD[id], qty });
    this.nid = 100;
    this.state = {
      profile: { goal: 'gain', gender: 'male', age: 26, height: 175, weight: 77.8, act: 1.375, diet: 'all', avoid: [], budget: 2 },
      date: NX_TODAY, ov: {}, openMeals: null, pop: null, popSel: {}, popQ: '', popSave: false,
      draft: null, quizOpen: false, step: 0, meal: 'lunch', q: '', desc: '', descStatus: 'idle', ideas: [], ideasStatus: 'idle', sel: 6, anim: false, flash: '',
      log: [it('breakfast', 'ruti', 2), it('breakfast', 'omelette', 1), it('breakfast', 'tea', 1), it('lunch', 'rice', 2), it('lunch', 'dal', 1), it('lunch', 'rui', 1), it('lunch', 'shak', 1), it('snack', 'banana', 1)]
    };
  }
  addFood(food, qty) {
    const meal = this.state.meal;
    const ex = this.state.log.find((x) => x.meal === meal && x.food.name === food.name);
    const log = ex ? this.state.log.map((x) => (x === ex ? { ...x, qty: x.qty + (qty || 1) } : x)) : [...this.state.log, { id: 'nl' + (++this.nid), meal, food, qty: qty || 1 }];
    this.setState({ log, flash: 'Added ' + food.name + ' to ' + NX_MEALS.find((m) => m[0] === meal)[1] + '.' });
    clearTimeout(this.ft); this.ft = setTimeout(() => this.setState({ flash: '' }), 2500);
  }
  async describe() {
    const d = this.state.desc.trim();
    if (!d || this.state.descStatus === 'loading') return;
    this.setState({ descStatus: 'loading' });
    try {
      const r = await window.claude.complete('A person in Bangladesh describes what they ate: "' + d + '". Estimate nutrition using typical Bangladeshi home portions. Reply with ONLY JSON: {"items":[{"name":"short food name","portion":"amount","kcal":0,"protein":0,"carbs":0,"fat":0}]} with one entry per food, numbers in grams for macros, totals for the stated amount.');
      const j = JSON.parse(r.slice(r.indexOf('{'), r.lastIndexOf('}') + 1));
      const items = (j.items || []).filter((x) => x && x.name);
      if (!items.length) throw new Error('none');
      const num = (v) => Math.max(0, Number(v) || 0);
      items.forEach((x) => this.addFood({ name: String(x.name), portion: String(x.portion || ''), kcal: num(x.kcal), p: num(x.protein), c: num(x.carbs), f: num(x.fat), tags: [], cost: 1, ai: true }, 1));
      this.setState({ desc: '', descStatus: 'idle', flash: 'Added ' + items.length + ' item' + (items.length === 1 ? '' : 's') + ' with AI.' });
    } catch (e) { this.setState({ descStatus: 'error' }); }
  }
  async getIdeas(rem, pr) {
    if (this.state.ideasStatus === 'loading') return;
    this.setState({ ideasStatus: 'loading' });
    try {
      const pref = NX_DIETS.find((x) => x[0] === pr.diet)[1] + ((pr.avoid || []).length ? ', avoid ' + pr.avoid.join(', ') : '') + ', ' + NX_BUDGET.find((x) => x[0] === pr.budget)[1].toLowerCase() + ' budget';
      const r = await window.claude.complete('Suggest 3 foods easy to find in Bangladesh to help someone finish today. They still need about ' + r0(rem.k) + ' kcal, ' + r0(rem.p) + ' g protein, ' + r0(rem.c) + ' g carbs, ' + r0(rem.f) + ' g fat. Preferences: ' + pref + '. Reply with ONLY JSON: {"ideas":[{"name":"food","portion":"amount","kcal":0,"protein":0,"carbs":0,"fat":0,"why":"one short reason, max 8 words"}]}');
      const j = JSON.parse(r.slice(r.indexOf('{'), r.lastIndexOf('}') + 1));
      const num = (v) => Math.max(0, Number(v) || 0);
      const ideas = (j.ideas || []).filter((x) => x && x.name).slice(0, 3).map((x) => ({ name: String(x.name), portion: String(x.portion || ''), kcal: num(x.kcal), p: num(x.protein), c: num(x.carbs), f: num(x.fat), why: String(x.why || ''), tags: [], cost: 1, ai: true }));
      if (!ideas.length) throw new Error('none');
      this.setState({ ideas, ideasStatus: 'idle' });
    } catch (e) { this.setState({ ideasStatus: 'error' }); }
  }
  renderVals() {
    const st = this.state, pr = st.profile;
    const T = pr ? nxTargets(pr) : null;
    const dl = this.dayList(st.date);
    const eat = nxTot(dl.filter((x) => x.eaten));
    const eatT = nxTot(this.dayList(NX_TODAY).filter((x) => x.eaten));
    const out = {
      noProfile: !pr, hasProfile: !!pr,
      headSub: pr ? 'Fri 2 Oct · Goal: ' + NX_GOALS.find((g) => g[0] === pr.goal)[1] : 'Fri 2 Oct',
      quizBtn: pr ? 'Goals' : 'Set up',
      openQuiz: () => this.setState({ quizOpen: true, step: 0, draft: { ...(st.profile || { goal: 'gain', gender: 'male', age: 25, height: 170, weight: 70, act: 1.375, diet: 'all', avoid: [], budget: 2 }) } }),
      closeQuiz: () => this.setState({ quizOpen: false }),
      quizOpen: st.quizOpen
    };
    // quiz
    const dr = st.draft || {};
    const setD = (patch) => this.setState({ draft: { ...this.state.draft, ...patch } });
    const optStyle = (on) => on ? 'background: rgba(64,219,168,0.12); border-color: #40DBA8; color: var(--ink); box-shadow: 0 0 22px -10px rgba(64,219,168,0.8);' : 'background: rgba(var(--w), calc(0.03 * var(--wa))); border-color: var(--line); color: var(--ink);';
    const STEPS = [['What is your goal?', 'This sets whether you eat above or below what your body uses.'], ['About you', 'Used to estimate how much energy your body burns.'], ['How active are you?', 'Count gym sessions, sport and physical work.'], ['What do you eat?', 'We only suggest foods that fit.'], ['Your food budget', 'Suggestions stick to foods in this range.'], ['Your daily targets', 'You can change these any time from Goals.']];
    const s = st.step;
    const dT = st.draft ? nxTargets(dr) : null;
    Object.assign(out, {
      qStepLbl: s < 5 ? 'Question ' + (s + 1) + ' of 5' : 'All set',
      qDots: STEPS.map((_, i) => ({ style: i <= s ? 'background: #40DBA8;' : 'background: rgba(var(--w), calc(0.1 * var(--wa)));' })),
      qTitle: STEPS[s][0], qSub: STEPS[s][1],
      qs0: s === 0, qs1: s === 1, qs2: s === 2, qs3: s === 3, qs4: s === 4, qs5: s === 5,
      qGoals: NX_GOALS.map(([k, label, desc]) => ({ label, desc, on: dr.goal === k, style: optStyle(dr.goal === k), pick: () => setD({ goal: k }) })),
      qGenders: [['male', 'Male'], ['female', 'Female']].map(([k, label]) => ({ label, on: dr.gender === k, seg: dr.gender === k ? 'background: #40DBA8; color: #02120C;' : 'background: transparent; color: var(--ink2);', pick: () => setD({ gender: k }) })),
      qNums: [['age', 'Age', 'yrs', 1, 14, 80], ['height', 'Height', 'cm', 1, 140, 210], ['weight', 'Weight', 'kg', 0.5, 35, 180]].map(([k, label, unit, step0, lo, hi]) => {
        const ft = k === 'height' && dr.hUnit === 'ft';
        const step = ft ? 2.54 : step0;
        const inches = Math.round((dr.height || 0) / 2.54);
        return {
        label, unit: ft ? '' : unit,
        hasUnits: k === 'height',
        units: k === 'height' ? [['cm', 'CM'], ['ft', 'FT']].map(([u, ul]) => { const on = (dr.hUnit || 'cm') === u; return { label: ul, on, style: on ? 'background: #40DBA8; color: #02120C;' : 'background: transparent; color: var(--ink2);', pick: () => setD({ hUnit: u }) }; }) : [],
        val: k === 'weight' ? Number(dr[k] || 0).toFixed(1) : ft ? Math.floor(inches / 12) + '′ ' + (inches % 12) + '″' : Math.round(dr[k]),
        dec: () => setD({ [k]: Math.max(lo, Math.round((this.state.draft[k] - step) * 10) / 10) }),
        inc: () => setD({ [k]: Math.min(hi, Math.round((this.state.draft[k] + step) * 10) / 10) })
      }; }),
      qActs: NX_ACTS.map(([k, label, desc]) => ({ label, desc, on: dr.act === k, style: optStyle(dr.act === k), pick: () => setD({ act: k }) })),
      qDiets: NX_DIETS.map(([k, label, desc]) => ({ label, desc, on: dr.diet === k, style: optStyle(dr.diet === k), pick: () => setD({ diet: k }) })),
      qAvoid: NX_AVOID.map(([k, label]) => { const on = (dr.avoid || []).includes(k); return { label, on, style: on ? 'background: rgba(255,138,122,0.12); border-color: rgba(255,138,122,0.5); color: var(--danger);' : 'background: rgba(var(--w), calc(0.03 * var(--wa))); border-color: var(--line); color: var(--ink2);', pick: () => setD({ avoid: on ? dr.avoid.filter((x) => x !== k) : [...(dr.avoid || []), k] }) }; }),
      qBudgets: NX_BUDGET.map(([k, label, desc]) => ({ label, desc, on: dr.budget === k, style: optStyle(dr.budget === k), pick: () => setD({ budget: k }) })),
      qKcal: dT ? fmtK(dT.kcal) : '',
      qRes: dT ? NX_MAC.map(([k, label, col]) => ({ label, val: dT[k], dot: 'background: ' + col + ';' })) : [],
      qResNote: dT ? 'Your body uses about ' + fmtK(dT.tdee) + ' kcal a day. ' + (dr.goal === 'gain' ? 'Eating 300 more supports slow, lean muscle gain.' : dr.goal === 'lose' ? 'Eating 450 less means losing about 0.4 kg a week.' : 'Eating about the same keeps your weight steady.') + ' Protein is set to ' + NX_PKG[dr.goal].toFixed(1) + ' g per kg of body weight, within the 0.8–1.2 g range.' : '',
      qCanBack: s > 0,
      qBack: () => this.setState({ step: Math.max(0, s - 1) }),
      qNextLabel: s < 4 ? 'Next' : s === 4 ? 'See my targets' : this.host.screens.diet.state.plan ? 'Save targets' : 'Save and make my meal plan',
      qNext: () => {
        if (s < 5) { this.setState({ step: s + 1 }); return; }
        this.setState({ profile: { ...this.state.draft, kcalOverride: null }, quizOpen: false, ideas: [] });
        const dz = this.host.screens.diet;
        if (!dz.state.plan) { dz.setState({ sheet: true, tab: 'quiz', qz: 0, step: 'input', err: '', delAsk: false }); this.host.go('#diet'); }
      }
    });
    if (!T) return out;
    // today
    const rem = { k: Math.max(0, T.kcal - eat.k), p: Math.max(0, T.p - eat.p), c: Math.max(0, T.c - eat.c), f: Math.max(0, T.f - eat.f) };
    const pct = eat.k / T.kcal;
    const over = eat.k - T.kcal;
    Object.assign(out, {
      kcal: fmtK(eat.k), kcalT: fmtK(T.kcal),
      kcalLeft: over > 0 ? '+' + fmtK(over) : fmtK(rem.k), kcalLeftLbl: over > 0 ? 'kcal over goal' : 'kcal left to eat',
      kcalBar: 'width: ' + (st.anim ? Math.min(100, pct * 100).toFixed(1) : 0) + '%;',
      todayPill: Math.round(pct * 100) + '% eaten',
      todayPillStyle: over > T.kcal * 0.1 ? 'background: rgba(245,196,108,0.14); color: var(--amberT);' : 'background: rgba(64,219,168,0.12); color: var(--accT);',
      macros: NX_MAC.map(([k, label, col]) => {
        const v = eat[k], tg = T[k], left = tg - v;
        return { label, val: r0(v), tgt: tg, dot: 'background: ' + col + ';', bar: 'width: ' + (st.anim ? Math.min(100, (v / tg) * 100).toFixed(1) : 0) + '%; background: ' + col + ';', left: left > 0 ? r0(left) + 'g to go' : 'Target hit' };
      })
    });
    // meal plan
    const WDN = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], DTN = [26, 27, 28, 29, 30, 1, 2];
    const dateTxt = (i) => WDN[i] + ' ' + DTN[i] + (i < 5 ? ' Sep' : ' Oct');
    const planned = nxTot(dl);
    const plan = this.planOf(st.date);
    const pk = st.pop;
    const isToday = st.date === NX_TODAY;
    const boxOn = 'background: #40DBA8; border-color: #40DBA8;';
    const boxOff = 'background: transparent; border-color: rgba(var(--w), calc(0.28 * var(--wa)));';
    const closePop = () => { this.ideaTok = (this.ideaTok || 0) + 1; this.setState({ pop: null, popSel: {}, popQ: '', popSave: false }); };
    const dflt = this.defaultOpen();
    const om = st.openMeals || dflt;
    const dz = this.host.screens.diet;
    Object.assign(out, {
      dayLbl: isToday ? 'Calories eaten today' : 'Calories eaten · ' + dateTxt(st.date),
      mealsTitle: isToday ? "Today's meals" : 'Meals · ' + dateTxt(st.date),
      ...(() => {
        const tl = this.dayList(NX_TODAY), tp = this.planOf(NX_TODAY);
        const pk2 = nxTot(tl).k, ek = nxTot(tl.filter((x) => x.eaten)).k;
        const ms = tp ? tp.meals.filter((m) => tl.some((x) => x.meal === m.id)) : [];
        const done = ms.filter((m) => tl.filter((x) => x.meal === m.id).every((x) => x.eaten)).length;
        const pc = pk2 ? Math.min(100, Math.round((ek / pk2) * 100)) : 0;
        return { dpBar: 'width: ' + (st.anim ? pc : 0) + '%;', dpPct: pc + '%', dpText: tp ? "Today's plan · " + done + ' of ' + ms.length + ' meals done' : 'No plan yet' };
      })(),
      editPlanLabel: plan ? 'Edit plan' : 'Diet plan',
      noPlan: !plan,
      createPlan: () => dz.setState({ sheet: true, tab: 'quiz', qz: 0, step: 'input', err: '', delAsk: false }),
      emptyPlan: () => dz.manual(),
      planSum: plan ? fmtK(planned.k) + ' / ' + fmtK(T.kcal) + ' kcal planned' : 'Goal ' + fmtK(T.kcal) + ' kcal',
      dates: WDN.map((wd, i) => {
        const on = i === st.date, today = i === NX_TODAY, l = this.dayList(i);
        const all = l.length > 0 && l.every((x) => x.eaten), some = l.some((x) => x.eaten);
        return {
          wd: today ? 'Today' : wd, num: DTN[i], on,
          style: on ? 'background: #40DBA8; border-color: #40DBA8; color: #02120C; box-shadow: 0 0 20px -6px rgba(64,219,168,0.7);'
            : today ? 'background: rgba(64,219,168,0.06); border-color: rgba(64,219,168,0.4); color: var(--ink);'
            : 'background: rgba(var(--w), calc(0.03 * var(--wa))); border-color: var(--line); color: var(--ink);',
          wdStyle: on ? 'color: #02120C; opacity: 0.75;' : 'color: var(--ink3);',
          dot: (on ? 'background: #02120C;' : 'background: #40DBA8;') + (all ? '' : some ? ' opacity: 0.45;' : ' opacity: 0;'),
          pick: () => { this.ideaTok = (this.ideaTok || 0) + 1; this.setState({ date: i, pop: null, openMeals: null }); }
        };
      }),
      mealList: (plan ? plan.meals : []).map((m) => {
        const k = m.id;
        const items = dl.filter((x) => x.meal === k);
        const pl = nxTot(items), et = nxTot(items.filter((x) => x.eaten));
        const open = !!om[k];
        const setMap = (x, key, val) => this.setOv(st.date, (o) => ({ ...o, [key]: { ...(o[key] || {}), [x.id]: val } }));
        return {
          name: m.name || 'Meal', time: m.time || '', open, empty: items.length === 0, popOpen: pk === k,
          kcal: fmtK(et.k) + ' / ' + fmtK(pl.k) + ' kcal',
          bar: 'width: ' + (pl.k ? Math.min(100, (et.k / pl.k) * 100) : 0).toFixed(0) + '%;',
          chev: open ? 'transform: rotate(180deg);' : '',
          toggle: () => { if (pk === k) closePop(); this.setState((s) => { const cur = s.openMeals || dflt; return { openMeals: { ...cur, [k]: !cur[k] } }; }); },
          ideas: () => this.openPop(k),
          items: items.map((x) => ({
            name: x.food.name, eaten: x.eaten, qty: '×' + x.qty,
            macro: (x.food.portion ? x.food.portion + ' · ' : '') + r0(x.food.kcal * x.qty) + ' kcal · P ' + r0(x.food.p * x.qty) + 'g',
            box: x.eaten ? boxOn : boxOff,
            textStyle: x.eaten ? '' : 'opacity: 0.72;',
            toggle: () => setMap(x, 'eaten', !x.eaten),
            dec: () => setMap(x, 'qty', Math.max(1, x.qty - 1)),
            inc: () => setMap(x, 'qty', x.qty + 1),
            remove: () => x.fromPlan ? setMap(x, 'removed', true) : this.setOv(st.date, (o) => ({ ...o, extra: (o.extra || []).filter((y) => y.id !== x.id) }))
          }))
        };
      }),
      popClose: closePop
    });
    if (pk && plan) {
      const need = this.mealNeed(st.date, pk);
      const inMeal = new Set(dl.filter((x) => x.meal === pk).map((x) => x.food.name));
      const loc = BD_FOODS.filter((f) => nxAllowed(f, pr) && !inMeal.has(f.name))
        .map((f) => ({ f, sc: 2.2 * Math.min(f.p, need.p) / Math.max(need.p, 1) + Math.min(f.c, need.c) / Math.max(need.c, 1) + 0.8 * Math.min(f.f, need.f) / Math.max(need.f, 1) - (f.kcal > need.k + 150 ? 2 : 0) + f.p / 100 }))
        .sort((a, b) => b.sc - a.sc).slice(0, 4).map((x) => ({ f: x.f, ai: false }));
      const sel = st.popSel || {};
      const row = ({ f, ai }) => {
        const on = !!sel[f.name];
        return {
          name: f.name, ai, on,
          why: ai && f.why ? f.why : 'Adds ' + r0(f.p) + 'g protein, ' + r0(f.kcal) + ' kcal',
          macro: (f.portion ? f.portion + ' · ' : '') + 'P ' + r0(f.p) + ' · C ' + r0(f.c) + ' · F ' + r0(f.f),
          style: on ? 'background: rgba(64,219,168,0.1); border-color: #40DBA8;' : 'background: rgba(var(--w), calc(0.03 * var(--wa))); border-color: var(--line);',
          box: on ? boxOn : boxOff,
          toggle: () => this.setState((s) => { const n = { ...(s.popSel || {}) }; if (n[f.name]) delete n[f.name]; else n[f.name] = f; return { popSel: n }; })
        };
      };
      const q = (st.popQ || '').trim().toLowerCase();
      const res = q ? BD_FOODS.filter((f) => f.name.toLowerCase().includes(q) || f.id.includes(q)).slice(0, 5) : [];
      const n = Object.keys(sel).length;
      const meal = plan.meals.find((x) => x.id === pk);
      const mealName = meal ? meal.name : 'meal';
      const canSave = isToday;
      Object.assign(out, {
        popSub: need.k > 60 ? 'This meal should add about ' + fmtK(need.k) + ' kcal and ' + r0(need.p) + 'g protein to reach your goal.' : 'Your day already covers your goal. These are lighter extras.',
        popItems: [...loc, ...st.ideas.map((f) => ({ f, ai: true }))].map(row),
        popLoading: st.ideasStatus === 'loading', popErr: st.ideasStatus === 'error',
        popQ: st.popQ || '', setPopQ: (e) => { const v = e.target.value; this.setState({ popQ: v }); },
        popHasRes: res.length > 0, popRes: res.map((f) => row({ f, ai: false })),
        popCanSave: canSave, popSave: !!st.popSave,
        popSaveBox: st.popSave ? boxOn : boxOff,
        togglePopSave: () => this.setState({ popSave: !this.state.popSave }),
        popAddLabel: n ? 'Add ' + n + ' to ' + mealName : 'Choose foods to add',
        popAddStyle: n ? '' : 'opacity: 0.4; pointer-events: none; box-shadow: none;',
        popAdd: () => {
          const foods = Object.values(this.state.popSel || {});
          if (!foods.length) return;
          if (canSave && this.state.popSave) {
            const h = this.host;
            const newItems = foods.map((f) => ({ id: 'di' + (++h.nextId), name: f.name, portion: f.portion || '', protein: r0(f.p), kcal: r0(f.kcal), carbs: r0(f.c), fat: r0(f.f) }));
            dz.patchMeal(pk, (m) => ({ ...m, items: [...m.items, ...newItems] }));
            this.setOv(st.date, (o) => { const e = { ...(o.eaten || {}) }; newItems.forEach((x) => { e['p' + x.id] = false; }); return { ...o, eaten: e }; });
          } else {
            this.setOv(st.date, (o) => ({ ...o, extra: [...(o.extra || []), ...foods.map((f) => ({ id: 'u' + (++this.nid), meal: pk, food: f, qty: 1, fromPlan: false }))] }));
          }
          closePop();
        }
      });
    }
    // analytics
    const scale = T.kcal / 2700;
    const past = [[2780, 150], [2610, 138], [2840, 162], [2390, 121], [2720, 149], [2905, 158]].map(([k, p]) => ({ k: Math.round(k * scale), p: Math.round(p * T.p / 156) }));
    const WD = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], DT = [26, 27, 28, 29, 30, 1, 2];
    const days = [...past, { k: eatT.k, p: eatT.p }];
    const max = Math.max(...days.map((d) => d.k), T.kcal) * 1.12;
    const onT = (d) => Math.abs(d.k - T.kcal) <= T.kcal * 0.1 && d.p >= T.p * 0.9;
    const avgK = past.reduce((a, d) => a + d.k, 0) / past.length, avgP = past.reduce((a, d) => a + d.p, 0) / past.length;
    const perWk = ((avgK - T.tdee) * 7) / 7700;
    let status, good;
    if (pr.goal === 'gain') { good = perWk >= 0.1 && perWk <= 0.6; status = perWk > 0.6 ? 'Gaining too fast' : perWk >= 0.1 ? 'On track to gain' : 'Not enough to gain'; }
    else if (pr.goal === 'lose') { good = perWk <= -0.2 && perWk >= -1; status = perWk < -1 ? 'Losing too fast' : perWk <= -0.2 ? 'On track to lose' : 'Not in a deficit'; }
    else { good = Math.abs(perWk) < 0.15; status = good ? 'On track to maintain' : perWk > 0 ? 'Drifting up' : 'Drifting down'; }
    const sel = st.sel, sd = days[sel];
    Object.assign(out, {
      wkStatus: status,
      wkStyle: good ? 'background: rgba(64,219,168,0.14); color: var(--accT);' : 'background: rgba(245,196,108,0.14); color: var(--amberT);',
      wkPace: (perWk >= 0 ? '+' : '−') + Math.abs(perWk).toFixed(2) + ' kg / week',
      wkSub: 'At your average of ' + fmtK(avgK) + ' kcal a day, about ' + fmtK(Math.abs(avgK - T.tdee)) + ' ' + (avgK >= T.tdee ? 'above' : 'below') + ' what your body uses. ' + (good ? 'Keep it up.' : pr.goal === 'gain' ? 'Add a snack like chola or doi with chira.' : pr.goal === 'lose' ? 'Cut back on rice or paratha portions.' : 'Adjust portions slightly.'),
      selLabel: (sel === 6 ? 'Today' : WD[sel]) + ' ' + DT[sel] + (sel >= 5 ? ' Oct' : ' Sep'),
      selVal: fmtK(sd.k) + ' kcal · ' + r0(sd.p) + 'g protein' + (sel === 6 ? ' so far' : ''),
      tgtLine: 'bottom: ' + ((T.kcal / max) * 100).toFixed(1) + '%;',
      bars: days.map((d, i) => {
        const on = i === sel, today = i === 6;
        const col = today ? 'rgba(64,219,168,0.45)' : onT(d) ? '#40DBA8' : d.k < T.kcal ? 'rgba(64,219,168,0.55)' : '#F5C46C';
        return {
          on, wd: today ? 'Today' : WD[i], aria: WD[i] + ' ' + DT[i] + ': ' + fmtK(d.k) + ' kcal',
          wdStyle: on ? 'color: var(--ink); font-weight: 600;' : 'color: var(--ink3);',
          style: 'height: ' + (st.anim ? ((d.k / max) * 100).toFixed(1) : 2) + '%; background: ' + col + ';' + (on ? ' box-shadow: 0 0 18px -4px rgba(64,219,168,0.8); opacity: 1;' : ' opacity: 0.6;') + (today ? ' border: 1.5px dashed #40DBA8;' : ''),
          pick: () => this.setState({ sel: i })
        };
      }),
      tiles: [
        { label: 'Avg calories', val: fmtK(avgK), sub: 'target ' + fmtK(T.kcal) },
        { label: 'Avg protein', val: r0(avgP) + 'g', sub: 'target ' + T.p + 'g' },
        { label: 'On target', val: past.filter(onT).length + '/6', sub: 'days this week' }
      ],
      wTrend: (pr.weight - (pr.goal === 'lose' ? -0.5 : 0.4)).toFixed(1) + ' → ' + Number(pr.weight).toFixed(1) + ' kg · 2 wks'
    });
    return out;
  }
}

export class NutritionScreen extends Sub {
  constructor(host, key) {
    super(host, key);
    this.foods = [
      { name: 'Grilled chicken breast (150g)', proteinG: 46, calories: 231 },
      { name: 'Greek yogurt (200g)', proteinG: 20, calories: 133 },
      { name: '2 whole eggs + 3 egg whites', proteinG: 27, calories: 220 },
      { name: 'Whey protein shake (1 scoop)', proteinG: 24, calories: 120 },
      { name: 'Paneer (100g)', proteinG: 18, calories: 265 },
      { name: 'Cooked lentils (1 cup)', proteinG: 18, calories: 230 },
      { name: 'Canned tuna (1 can)', proteinG: 27, calories: 128 },
      { name: 'Cottage cheese (1 cup)', proteinG: 25, calories: 206 },
      { name: 'Salmon fillet (150g)', proteinG: 34, calories: 280 },
      { name: 'Tofu, firm (150g)', proteinG: 12, calories: 114 },
      { name: 'Almonds (30g)', proteinG: 6, calories: 174 },
      { name: 'Protein bar', proteinG: 20, calories: 200 },
      { name: 'Turkey breast (150g)', proteinG: 42, calories: 216 },
      { name: 'Edamame (1 cup)', proteinG: 17, calories: 189 },
      { name: 'Milk, 1 glass (250ml)', proteinG: 8, calories: 122 }
    ];
    this.state = { quick: 'Whey protein shake (1 scoop)', name: 'Whey protein shake (1 scoop)', protein: '24', calories: '120' };
  }
  applyPreset(foodName) {
    const f = this.foods.find((x) => x.name === foodName);
    if (f) this.setState({ quick: f.name, name: f.name, protein: String(f.proteinG), calories: String(f.calories) });
  }
  renderVals() {
    const st = this.state;
    const noName = st.name.trim() === '';
    const picks = ['Grilled chicken breast (150g)', 'Turkey breast (150g)', 'Salmon fillet (150g)', '2 whole eggs + 3 egg whites', 'Canned tuna (1 can)'];
    return {
      suggestions: picks.map((n) => { const f = this.foods.find((x) => x.name === n); return { name: f.name, protein: f.proteinG, pick: () => this.applyPreset(f.name) }; }),
      quick: st.quick, name: st.name, protein: st.protein, calories: st.calories,
      noName, saveStyle: noName ? 'opacity: 0.4;' : '',
      pickQuick: (e) => { const v = e.target.value; if (v) this.applyPreset(v); else this.setState({ quick: '' }); },
      setName: bind(this, 'name'), setProtein: bind(this, 'protein'), setCalories: bind(this, 'calories')
    };
  }
}

