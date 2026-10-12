import { Sub, bind } from './shared.js';
import { NX_GOALS, NX_ACTS, NX_DIETS, NX_BUDGET, nxTargets } from './nutrition.js';

export const DIET_FOODS = 'Use foods that are common and affordable in Bangladesh, for example bhat, atta ruti, chira, muri, masoor or mug dal, chola, eggs, chicken, rui, tilapia, pangas, ilish in season, shak, seasonal shobji like lau, pepe, kumra and begun, doi, milk and local fruits like kola, peyara and papaya. Write Bangla food names in English letters and add a short English hint in brackets when the name is not obvious, for example "Lau (bottle gourd)". Use household portions such as cup, piece, bowl or grams.';
export const DIET_SCHEMA = 'Reply with ONLY JSON, no prose: {"title":string (short, e.g. "Cut plan"),"kcalTarget":number,"proteinTarget":number,"meals":[{"name":string,"time":string like "8:00 AM","items":[{"name":string,"portion":string,"protein":number,"kcal":number,"carbs":number,"fat":number}]}],"tips":[up to 3 short practical tips in simple English]}. Protein, carbs and fat are grams. Estimate values realistically.';
export const parseJ = (r) => JSON.parse(r.slice(r.indexOf('{'), r.lastIndexOf('}') + 1));
export const DIET_ICONS = { quiz: 'M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01', ai: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z', upload: 'M4 5h16v14H4zM4 15l4.5-4.5 4 4L15 12l5 5M15.5 8.5h.01', manual: 'M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3zM13.5 6.5l3 3' };

export const DQ = [
  { id: 'meals', q: 'How many meals a day?', sub: 'Count snacks too.', opts: ['3 meals', '4 meals', '5 meals', '6 meals'], def: '4 meals' },
  { id: 'wake', q: 'When do you usually wake up?', sub: 'Meal times are set around this.', opts: ['Before 6 AM', '6–8 AM', '8–10 AM', 'After 10 AM'], def: '6–8 AM' },
  { id: 'train', q: 'When do you work out?', sub: 'More carbs and protein go around your training.', opts: ['Morning', 'Afternoon', 'Evening', "I don't train"], def: 'Evening' },
  { id: 'rice', q: 'How much rice do you want?', sub: 'Rice is the main carb in most plans.', opts: ['With every meal', 'Twice a day', 'Once a day', 'Rarely'], def: 'Twice a day' },
  { id: 'like', q: 'Which proteins do you enjoy?', sub: 'Pick as many as you like.', multi: true, opts: ['Fish', 'Chicken', 'Eggs', 'Dal', 'Beef', 'Chhana / doi', 'Soya'], def: ['Fish', 'Eggs', 'Dal'] }
];

export class DietScreen extends Sub {
  constructor(host, key) {
    super(host, key);
    const it = (a) => ({ id: 'di' + (++host.nextId), name: a[0], portion: a[1], protein: a[2], kcal: a[3], carbs: a[4], fat: a[5] });
    const meal = (name, time, items) => ({ id: 'dm' + (++host.nextId), name, time, items: items.map(it) });
    this.state = {
      plan: {
        title: 'My meal plan', source: 'ai', kcalT: 2100, proteinT: 140,
        meals: [
          meal('Breakfast', '8:00 AM', [['Atta ruti', '2 pieces', 6, 240, 48, 2], ['Boiled eggs', '2 whole + 2 whites', 16, 175, 1, 10], ['Mixed shobji bhaji', '1 cup', 3, 90, 12, 4], ['Rong cha, no sugar', '1 cup', 0, 5, 1, 0]]),
          meal('Lunch', '1:30 PM', [['Bhat (cooked rice)', '1 cup', 4, 205, 45, 0], ['Murgir torkari (chicken curry)', '150 g chicken', 38, 300, 6, 14], ['Masoor dal', '1 cup', 12, 180, 28, 3], ['Shosha-tomato salad', '1 bowl', 1, 30, 6, 0]]),
          meal('Afternoon snack', '5:00 PM', [['Doi (plain yogurt)', '200 g', 8, 120, 9, 6], ['Chola boot (chickpeas)', '½ cup', 7, 135, 22, 2], ['Kola (banana)', '1 medium', 1, 105, 27, 0]]),
          meal('Dinner', '9:00 PM', [['Rui mach bhuna', '150 g fish', 29, 190, 2, 8], ['Bhat (cooked rice)', '½ cup', 2, 103, 22, 0], ['Lau (bottle gourd) shobji', '1 cup', 2, 60, 10, 2], ['Masoor dal', '½ cup', 6, 90, 14, 2]])
        ],
        tips: ['Fill half your plate with shobji before adding rice. It keeps you full on fewer calories.', 'Rui, tilapia and pangas are cheap, high-protein swaps for chicken.']
      },
      open: null, edit: null, banner: '', sheet: false, sheetDy: 0, sheetDrag: false,
      tab: 'quiz', qz: 0, qza: {}, delAsk: false, prompt: '', img: '', imgType: '', imgName: '', step: 'input', loadingMsg: '', qs: [], ans: {}, err: ''
    };
  }
  patchPlan(fn) { this.setState((s) => ({ plan: fn(s.plan) })); }
  patchMeal(id, fn) { this.patchPlan((p) => ({ ...p, meals: p.meals.map((m) => (m.id === id ? fn(m) : m)) })); }
  queueEst(mid, iid) {
    this.estT = this.estT || {};
    clearTimeout(this.estT[iid]);
    this.setState((s) => ({ est: { ...(s.est || {}), [iid]: 'queued' } }));
    this.estT[iid] = setTimeout(() => this.estimate(mid, iid), 1100);
  }
  async estimate(mid, iid) {
    const m = this.state.plan && this.state.plan.meals.find((x) => x.id === mid);
    const it = m && m.items.find((x) => x.id === iid);
    if (!it) return;
    const name = it.name.trim(), portion = (it.portion || '').trim();
    if (!name) { this.setState((s) => ({ est: { ...(s.est || {}), [iid]: null } })); return; }
    const key = name + '|' + portion;
    this.estKey = this.estKey || {};
    this.estKey[iid] = key;
    this.setState((s) => ({ est: { ...(s.est || {}), [iid]: 'loading' } }));
    try {
      if (!window.claude) throw new Error('no ai');
      const r = await window.claude.complete('Estimate the nutrition of this food as eaten in Bangladesh: "' + name + '", portion: "' + (portion || '1 typical serving') + '". Use standard food composition values for that exact amount. Reply with ONLY JSON: {"protein":0,"kcal":0,"carbs":0,"fat":0} with grams for protein, carbs and fat.');
      const j = JSON.parse(r.slice(r.indexOf('{'), r.lastIndexOf('}') + 1));
      if (this.estKey[iid] !== key) return;
      const n = (v) => Math.max(0, Math.round(Number(v) || 0));
      this.patchItem(mid, iid, { protein: n(j.protein), kcal: n(j.kcal), carbs: n(j.carbs), fat: n(j.fat) });
      this.setState((s) => ({ est: { ...(s.est || {}), [iid]: null } }));
    } catch (e) {
      if (this.estKey[iid] === key) this.setState((s) => ({ est: { ...(s.est || {}), [iid]: 'error' } }));
    }
  }
  patchItem(mid, iid, patch) { this.patchMeal(mid, (m) => ({ ...m, items: m.items.map((x) => (x.id === iid ? { ...x, ...patch } : x)) })); }
  profileText() {
    const n = this.host.screens.nx.state.profile;
    if (!n) { const p = this.host.screens.prof.state; return 'Goal: ' + p.goal + '. Body weight: ' + p.weight + ' kg.'; }
    const T = nxTargets(n);
    return 'Goal: ' + NX_GOALS.find((g) => g[0] === n.goal)[1] + '. ' + (n.gender === 'male' ? 'Male' : 'Female') + ', ' + n.age + ' years, ' + n.height + ' cm, ' + n.weight + ' kg. Activity: ' + NX_ACTS.find((a) => a[0] === n.act)[1] + '. Eats: ' + NX_DIETS.find((x) => x[0] === n.diet)[1] + ((n.avoid || []).length ? ', avoids ' + n.avoid.join(', ') : '') + '. Budget: ' + NX_BUDGET.find((x) => x[0] === n.budget)[1] + '. Daily targets to match: ' + T.kcal + ' kcal, ' + T.p + ' g protein, ' + T.c + ' g carbs, ' + T.f + ' g fat.';
  }
  normalize(j, source) {
    const h = this.host, num = (v) => Math.max(0, Math.round(Number(v) || 0));
    const meals = (j.meals || []).filter((m) => m && (m.items || []).length).map((m) => ({
      id: 'dm' + (++h.nextId), name: String(m.name || 'Meal'), time: String(m.time || ''),
      items: m.items.filter((x) => x && x.name).map((x) => ({ id: 'di' + (++h.nextId), name: String(x.name), portion: String(x.portion || ''), protein: num(x.protein), kcal: num(x.kcal), carbs: num(x.carbs), fat: num(x.fat) }))
    }));
    if (!meals.length) throw new Error('empty');
    return { title: String(j.title || 'My diet plan'), source, kcalT: num(j.kcalTarget), proteinT: num(j.proteinTarget) || Number(h.screens.prof.state.target) || 0, meals, tips: (j.tips || []).slice(0, 3).map(String) };
  }
  finish(plan, banner) {
    const n = this.host.screens.nx.state.profile;
    const pk = plan.meals.reduce((a, m) => a + m.items.reduce((b, x) => b + (Number(x.kcal) || 0), 0), 0);
    const gk = n ? nxTargets(n).kcal : 0;
    const conflict = gk && pk && Math.abs(pk - gk) > gk * 0.1 ? { planK: pk, goalK: gk } : null;
    this.setState({ conflict });
    this.setState({ plan, open: null, edit: null, banner, sheet: false, step: 'input', qs: [], ans: {}, err: '', prompt: '', img: '', imgName: '' });
  }
  async askAI() {
    const st = this.state;
    if (st.prompt.trim().length < 3 || !window.claude) return;
    this.setState({ step: 'loading', loadingMsg: 'Checking what we need to know…', err: '' });
    try {
      const r = await window.claude.complete('You are a friendly nutrition coach in Bangladesh helping a user build a diet plan. Known profile: ' + this.profileText() + ' User request: "' + st.prompt.trim() + '". The goal, body details, activity, diet type, budget and daily targets are already known, so never ask about them. Decide which plan details are still missing, for example how many meals a day, wake-up and bed time, favourite foods, foods they dislike, or when they train. Ask at most 4 short multiple-choice questions in simple English, only about things that are not already known. Reply with ONLY JSON: {"questions":[{"q":string,"options":[3 to 5 short strings]}]}. If nothing important is missing, reply {"questions":[]}.');
      const j = parseJ(r);
      const qs = (j.questions || []).filter((q) => q && q.q && (q.options || []).length).slice(0, 4).map((q, i) => ({ id: 'q' + i, q: String(q.q), options: q.options.slice(0, 5).map(String) }));
      if (!qs.length) { this.build(); return; }
      this.setState({ step: 'questions', qs, ans: {} });
    } catch (e) { this.setState({ step: 'input', err: "Couldn't reach the AI. Please try again." }); }
  }
  async build(over) {
    const st = { ...this.state, ...(over || {}) };
    this.setState({ step: 'loading', loadingMsg: 'Creating your plan…', err: '' });
    const qa = st.qs.map((q) => q.q + ' ' + (st.ans[q.id] || 'not answered')).join(' | ');
    try {
      const r = await window.claude.complete({ messages: [{ role: 'user', content: 'Create a one-day diet plan for this user. Profile: ' + this.profileText() + ' Request: "' + st.prompt.trim() + '". ' + (qa ? 'Their answers: ' + qa + '. ' : '') + DIET_FOODS + ' ' + DIET_SCHEMA }], max_tokens: 4000 });
      this.finish(this.normalize(parseJ(r), 'ai'), 'Your new plan is ready. Tap Edit on any meal to change it.');
    } catch (e) { this.setState({ step: st.qs.length ? 'questions' : 'input', err: "Couldn't create a plan. Please try again." }); }
  }
  async fromImage() {
    const st = this.state;
    if (!st.img || !window.claude) return;
    this.setState({ step: 'loading', loadingMsg: 'Reading your diet chart…', err: '' });
    try {
      const r = await window.claude.complete({ messages: [{ role: 'user', content: [{ type: 'image', source: { type: 'base64', media_type: st.imgType, data: st.img.split(',')[1] } }, { type: 'text', text: 'This image shows a diet plan or meal chart. Extract every meal and food item. Keep the original food names and write Bangla names in English letters. If nutrition values are not shown, estimate them realistically. ' + DIET_SCHEMA }] }], max_tokens: 4000 });
      this.finish(this.normalize(parseJ(r), 'import'), 'Imported your diet chart. Check the portions and values.');
    } catch (e) { this.setState({ step: 'input', err: "Couldn't read a diet plan from that image. Try a clearer photo." }); }
  }
  manual() {
    const h = this.host;
    const meals = [['Breakfast', '8:00 AM'], ['Lunch', '1:30 PM'], ['Afternoon snack', '5:00 PM'], ['Dinner', '9:00 PM']].map((m) => ({ id: 'dm' + (++h.nextId), name: m[0], time: m[1], items: [] }));
    const plan = { title: 'My diet plan', source: 'manual', kcalT: 0, proteinT: Number(h.screens.prof.state.target) || 0, meals, tips: [] };
    this.setState({ plan, open: { [meals[0].id]: true }, edit: meals[0].id, banner: 'Empty plan created. Add foods to each meal.', sheet: false, step: 'input', err: '' });
  }
  onFile(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      const im = new Image();
      im.onload = () => {
        const k = Math.min(1, 1600 / Math.max(im.width, im.height));
        const c = document.createElement('canvas');
        c.width = Math.round(im.width * k); c.height = Math.round(im.height * k);
        c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
        this.setState({ img: c.toDataURL('image/jpeg', 0.85), imgType: 'image/jpeg', imgName: f.name, err: '' });
      };
      im.src = reader.result;
    };
    reader.readAsDataURL(f);
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
      this.setState({ sheetDrag: false, sheetDy: 0, sheet: !(dy > 140 || (dy > 30 && v > 0.6)) });
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  }
  renderVals() {
    const st = this.state, p = st.plan;
    const sum = (arr, k) => arr.reduce((a, x) => a + (Number(x[k]) || 0), 0);
    const items = p ? p.meals.reduce((a, m) => a.concat(m.items), []) : [];
    const kcal = sum(items, 'kcal'), protein = sum(items, 'protein');
    const bar = (v, tg) => 'width: ' + (tg ? Math.min(100, Math.round((v / tg) * 100)) : 0) + '%;';
    const num = (v) => (v === '' ? 0 : Math.max(0, Math.round(Number(v) || 0)));
    const openMap = st.open || (p && p.meals[0] ? { [p.meals[0].id]: true } : {});
    const onStyle = 'background: #40DBA8; color: #02120C; border-color: #40DBA8;';
    const offStyle = 'background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); border-color: var(--line);';
    const ready = st.tab === 'ai' ? st.prompt.trim().length > 2 : st.tab === 'upload' ? !!st.img : true;
    const openWith = (tab) => () => this.setState({ sheet: true, tab, step: 'input', err: '' });
    const nxs = this.host.screens.nx, np = nxs.state.profile, NT = np ? nxTargets(np) : null;
    const gap = NT ? kcal - NT.kcal : 0;
    const cf = st.conflict;
    return {
      kcalTn: NT ? NT.kcal.toLocaleString() : '—', pTn: NT ? NT.p : '—', cTn: NT ? NT.c : '—', fTn: NT ? NT.f : '—',
      kcalBar2: bar(kcal, NT && NT.kcal), pBar2: bar(protein, NT && NT.p), cBar2: bar(sum(items, 'carbs'), NT && NT.c), fBar2: bar(sum(items, 'fat'), NT && NT.f),
      goalLine: NT ? NT.kcal.toLocaleString() + ' kcal · ' + NT.p + 'g protein' : 'Not set yet',
      gapText: !NT || !p ? 'Answer the Goals questions to set them.' : Math.abs(gap) <= NT.kcal * 0.05 ? 'Plan matches your goal.' : 'Plan is ' + Math.abs(gap).toLocaleString() + ' kcal ' + (gap < 0 ? 'short of' : 'over') + ' your goal.',
      gapStyle: !NT || !p || Math.abs(gap) <= NT.kcal * 0.05 ? 'color: var(--accT);' : 'color: var(--amberT);',
      changeGoals: () => { nxs.setState({ quizOpen: true, step: 0, draft: { ...(np || { goal: 'gain', gender: 'male', age: 25, height: 170, weight: 70, act: 1.375, diet: 'all', avoid: [], budget: 2 }) } }); this.host.go('#nutrition'); },
      hasConflict: !!cf,
      conflictText: cf ? 'This plan is ' + cf.planK.toLocaleString() + ' kcal. Your goal is ' + cf.goalK.toLocaleString() + ' kcal.' : '',
      keepGoal: () => this.setState({ conflict: null }),
      usePlan: () => { if (cf) nxs.setState({ profile: { ...nxs.state.profile, kcalOverride: cf.planK } }); this.setState({ conflict: null }); },
      hasPlan: !!p, noPlan: !p,
      entryTitle: p ? p.title + ' · ' + kcal.toLocaleString() + ' kcal' : 'Create your diet plan',
      entrySub: p ? protein + 'g protein · ' + p.meals.length + ' meals · Bangladeshi foods' : 'With AI, a screenshot or by hand',
      title: p ? p.title : '', source: p ? { ai: 'AI plan', import: 'Imported', manual: 'Manual' }[p.source] : '',
      kcal: kcal.toLocaleString(), kcalT: NT ? '/ ' + NT.kcal.toLocaleString() + ' kcal' : 'kcal', kcalBar: bar(kcal, NT && NT.kcal),
      protein, proteinT: NT ? '/ ' + NT.p + 'g' : '', proteinBar: bar(protein, NT && NT.p),
      carbs: sum(items, 'carbs'), fat: sum(items, 'fat'), mealCount: p ? p.meals.length + ' meals' : '',
      banner: st.banner, hasBanner: !!st.banner, closeBanner: () => this.setState({ banner: '' }),
      meals: p ? p.meals.map((m) => {
        const editing = st.edit === m.id, open = editing || !!openMap[m.id];
        const mp = sum(m.items, 'protein'), mk = sum(m.items, 'kcal');
        return {
          name: m.name, time: m.time, nameOr: m.name || 'Untitled meal',
          view: !editing, editing, open, closed: !open, empty: m.items.length === 0,
          chev: open ? 'transform: rotate(180deg);' : '',
          summary: m.items.length + ' item' + (m.items.length === 1 ? '' : 's') + ' · ' + mp + 'g protein · ' + mk + ' kcal',
          editLabel: editing ? 'Done' : 'Edit', editStyle: editing ? onStyle : offStyle,
          toggleEdit: () => this.setState({ edit: editing ? null : m.id, open: { ...openMap, [m.id]: true } }),
          toggle: () => this.setState({ open: { ...openMap, [m.id]: !open }, edit: editing && open ? null : st.edit }),
          setName: (e) => { const v = e.target.value; this.patchMeal(m.id, (x) => ({ ...x, name: v })); },
          setTime: (e) => { const v = e.target.value; this.patchMeal(m.id, (x) => ({ ...x, time: v })); },
          addItem: () => this.patchMeal(m.id, (x) => ({ ...x, items: [...x.items, { id: 'di' + (++this.host.nextId), name: '', portion: '', protein: 0, kcal: 0, carbs: 0, fat: 0 }] })),
          del: () => { this.patchPlan((pp) => ({ ...pp, meals: pp.meals.filter((x) => x.id !== m.id) })); this.setState({ edit: null }); },
          items: m.items.map((it) => ({
            name: it.name, nameOr: it.name || 'Untitled food', portion: it.portion, protein: it.protein, kcal: it.kcal,
            proteinIn: it.protein ? String(it.protein) : '', kcalIn: it.kcal ? String(it.kcal) : '',
            setName: (e) => { const v = e.target.value; this.patchItem(m.id, it.id, { name: v }); this.queueEst(m.id, it.id); },
            setPortion: (e) => { const v = e.target.value; this.patchItem(m.id, it.id, { portion: v }); this.queueEst(m.id, it.id); },
            ...(() => {
              const es = (st.est || {})[it.id];
              const busy = es === 'loading' || es === 'queued';
              return {
                pTxt: busy ? '…' : it.name.trim() ? it.protein + 'g' : '—',
                kTxt: busy ? '…' : it.name.trim() ? String(it.kcal) : '—',
                estStyle: busy ? 'color: var(--cyanT); background: rgba(108,203,245,0.06);' : 'color: var(--ink); background: rgba(var(--k), calc(0.18 * var(--ka)));',
                estErr: es === 'error',
                retry: () => this.estimate(m.id, it.id)
              };
            })(),
            remove: () => this.patchMeal(m.id, (x) => ({ ...x, items: x.items.filter((y) => y.id !== it.id) }))
          }))
        };
      }) : [],
      addMeal: () => {
        const id = 'dm' + (++this.host.nextId);
        this.patchPlan((pp) => ({ ...pp, meals: [...pp.meals, { id, name: '', time: '', items: [] }] }));
        this.setState({ edit: id, open: { ...openMap, [id]: true } });
      },
      deletePlan: () => this.setState({ plan: null, edit: null, open: null, banner: '' }),
      tips: p ? p.tips.map((x) => ({ text: x })) : [], hasTips: !!(p && p.tips.length),
      starts: [['quiz', 'Answer a few questions', 'We build a plan around your answers'], ['ai', 'Describe it to AI', 'Say what you want in your own words'], ['upload', 'Upload a screenshot', 'Turn a diet chart photo into a plan']].map((x) => ({ icon: DIET_ICONS[x[0]], title: x[1], sub: x[2], pick: openWith(x[0]) })),
      openSheet: () => this.setState({ sheet: true, tab: 'quiz', qz: 0, step: 'input', err: '', delAsk: false }),
      closeSheet: () => this.setState({ sheet: false }),
      sheetTitle: st.step === 'questions' ? 'A few quick questions' : 'Create a diet plan',
      stInput: st.step === 'input', stLoading: st.step === 'loading', stQuestions: st.step === 'questions',
      loadingMsg: st.loadingMsg,
      tabs: [['quiz', 'Questions'], ['ai', 'Describe'], ['upload', 'Upload']].map((x) => ({
        label: x[1], icon: DIET_ICONS[x[0]], on: st.tab === x[0], pick: () => this.setState({ tab: x[0], err: '' }),
        style: st.tab === x[0] ? 'background: #40DBA8; color: #02120C;' : 'background: transparent; color: var(--ink2);'
      })),
      tAI: st.tab === 'ai', tUp: st.tab === 'upload', tQz: st.tab === 'quiz',
      ...(() => {
        const np2 = this.host.screens.nx.state.profile, NT2 = np2 ? nxTargets(np2) : null;
        const veg = np2 && (np2.diet === 'veg' || np2.diet === 'eggveg');
        const qs = DQ.map((q) => q.id !== 'like' ? q : { ...q, opts: q.opts.filter((o) => !(veg && ['Fish', 'Chicken', 'Beef'].includes(o)) && !(np2 && np2.diet === 'veg' && o === 'Eggs') && !(np2 && np2.diet === 'nobeef' && o === 'Beef')) });
        const i = Math.min(st.qz || 0, qs.length - 1), q = qs[i];
        const A = st.qza || {};
        const val = A[q.id] !== undefined ? A[q.id] : q.def;
        const on = (o) => (q.multi ? (val || []).includes(o) : val === o);
        return {
          qzStep: 'Question ' + (i + 1) + ' of ' + qs.length,
          qzDots: qs.map((_, k) => ({ style: k <= i ? 'background: #40DBA8;' : 'background: rgba(var(--w), calc(0.1 * var(--wa)));' })),
          qzQ: q.q, qzSub: q.sub, qzFirst: i === 0, qzCanBack: i > 0,
          qzGoal: NT2 ? NX_GOALS.find((g) => g[0] === np2.goal)[1] + ' · ' + NT2.kcal.toLocaleString() + ' kcal · ' + NT2.p + 'g protein' : 'Set your goals on Nutrition first',
          qzOpts: q.opts.map((o) => ({
            label: o, on: on(o),
            style: on(o) ? 'background: rgba(64,219,168,0.12); border-color: #40DBA8; color: var(--ink); box-shadow: 0 0 22px -10px rgba(64,219,168,0.8);' : 'background: rgba(var(--w), calc(0.03 * var(--wa))); border-color: var(--line); color: var(--ink);',
            pick: () => { const cur = (this.state.qza || {})[q.id] !== undefined ? this.state.qza[q.id] : q.def; const nv = q.multi ? (cur.includes(o) ? cur.filter((x) => x !== o) : [...cur, o]) : o; this.setState({ qza: { ...(this.state.qza || {}), [q.id]: nv } }); }
          })),
          qzBack: () => this.setState({ qz: Math.max(0, i - 1) }),
          qzLast: i === qs.length - 1, qzNotLast: i < qs.length - 1,
          qzNext: () => {
            if (i < qs.length - 1) { this.setState({ qz: i + 1 }); return; }
            const ans = qs.map((x) => { const v = A[x.id] !== undefined ? A[x.id] : x.def; return x.q + ' ' + (Array.isArray(v) ? (v.join(', ') || 'no preference') : v); }).join(' | ');
            this.build({ prompt: 'Build a daily plan from these answers: ' + ans, qs: [] });
          }
        };
      })(),
      prompt: st.prompt, setPrompt: bind(this, 'prompt'),
      examples: ['Lose 5 kg, I eat rice twice a day', 'Gain muscle on 300 tk a day', 'High protein with fish, no beef'].map((x) => ({ text: x, pick: () => this.setState({ prompt: x }) })),
      onFile: (e) => this.onFile(e),
      hasImg: !!st.img, imgBg: st.img ? 'background-image: url("' + st.img + '");' : '',
      imgTitle: st.img ? st.imgName : 'Upload a photo or screenshot', imgSub: st.img ? 'Tap to choose a different image' : 'PNG or JPG',
      hasReplace: !!p, err: st.err, hasErr: !!st.err,
      primaryLabel: st.tab === 'ai' ? 'Continue' : 'Create from image',
      primary: () => { if (!ready) return; if (st.tab === 'ai') this.askAI(); else if (st.tab === 'upload') this.fromImage(); },
      showPrimary: st.tab !== 'quiz',
      askDelete: () => this.setState({ delAsk: true }),
      cancelDelete: () => this.setState({ delAsk: false }),
      confirmDelete: () => this.setState({ plan: null, edit: null, open: null, banner: 'Your plan was deleted. Create a new one any time.', delAsk: false, sheet: false }),
      delAsk: !!st.delAsk, delIdle: !st.delAsk,
      primaryStyle: ready ? '' : 'opacity: 0.45; cursor: default;',
      qs: st.qs.map((q) => ({
        q: q.q,
        opts: q.options.map((o) => ({
          label: o, on: st.ans[q.id] === o,
          pick: () => this.setState((s) => ({ ans: { ...s.ans, [q.id]: s.ans[q.id] === o ? '' : o } })),
          style: st.ans[q.id] === o ? onStyle : 'background: transparent; color: var(--ink); border-color: var(--line);'
        }))
      })),
      answered: Object.values(st.ans).filter(Boolean).length + ' of ' + st.qs.length + ' answered',
      buildNow: () => this.build(),
      backToInput: () => this.setState({ step: 'input', err: '' }),
      sheetDown: (e) => this.sheetDown(e),
      layerStyle: st.sheet ? '' : 'pointer-events: none;',
      scrimStyle: st.sheet ? 'opacity: ' + Math.max(0, 1 - st.sheetDy / 500) + ';' : 'opacity: 0;',
      sheetStyle: st.sheet
        ? 'transform: translateY(' + st.sheetDy + 'px); transition: ' + (st.sheetDrag ? 'none' : 'transform 0.34s cubic-bezier(0.2, 0.8, 0.2, 1)') + ';'
        : 'transform: translateY(105%); transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);'
    };
  }
}

