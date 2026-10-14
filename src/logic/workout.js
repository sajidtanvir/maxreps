import { Sub, bind, makeSets } from './shared.js';
import { PG_NAME } from './progress.js';

export class WorkoutScreen extends Sub {
  constructor(host, key) { super(host, key); this.state = { activity: 'Running', duration: '', distance: '', notes: '', rm: {} }; }
  setRm(id, v) { this.setState((s) => { const rm = { ...s.rm }; if (v === null) delete rm[id]; else rm[id] = v; return { rm }; }); }
  renderVals() {
    const h = this.host, st = this.state;
    const split = h.state.dashSplit;
    const list = h.state.dashLists[split];
    const num = (v) => (v === '' ? 0 : Math.max(0, Number(v) || 0));
    const patchEx = (id, fn) => h.setList((l) => l.map((x) => (x.id === id ? fn(x) : x)));
    const defs = [['push', 'Push Day'], ['pull', 'Pull Day'], ['legs', 'Leg Day'], ['cardio', 'Cardio Day'], ['rest', 'Rest Day']];
    return {
      chips: defs.map(([key, label]) => ({
        label, on: key === split, pick: () => h.setState({ dashSplit: key, dashOpen: null }),
        chipStyle: key === split
          ? 'background: #40DBA8; color: #02120C; border-color: #40DBA8; box-shadow: 0 0 20px -6px rgba(64,219,168,0.7);'
          : 'background: rgba(var(--w), calc(0.03 * var(--wa))); color: var(--ink2); border-color: rgba(var(--w), calc(0.08 * var(--wa)));'
      })),
      exercises: list.map((ex, i) => ({
        n: i + 1, name: ex.name,
        setName: (e) => { const v = e.target.value; patchEx(ex.id, (x) => ({ ...x, name: v })); },
        remove: () => h.setList((l) => l.filter((x) => x.id !== ex.id)),
        ...(() => {
          const sel = st.rm[ex.id];
          const on = !!sel, cnt = on ? sel.length : 0, all = cnt === ex.sets.length;
          return {
            selecting: on, normal: !on,
            selHint: cnt ? `${cnt} of ${ex.sets.length} selected` : 'Select sets to delete',
            allLabel: all ? 'Clear' : 'Select all',
            toggleAll: () => this.setRm(ex.id, all ? [] : ex.sets.map((_, i) => i)),
            startRemove: () => this.setRm(ex.id, []),
            cancelRemove: () => this.setRm(ex.id, null),
            deleteEx: () => { this.setRm(ex.id, null); h.setList((l) => l.filter((x) => x.id !== ex.id)); },
            deleteSel: () => {
              if (!cnt) return;
              this.setRm(ex.id, null);
              if (all) h.setList((l) => l.filter((x) => x.id !== ex.id));
              else patchEx(ex.id, (x) => ({ ...x, sets: x.sets.filter((_, m) => !sel.includes(m)) }));
            },
            delLabel: all ? 'Delete all' : cnt ? `Delete ${cnt}` : 'Delete',
            delStyle: cnt ? '' : 'opacity: 0.4; cursor: default;'
          };
        })(),
        addSet: () => patchEx(ex.id, (x) => { const last = x.sets[x.sets.length - 1] || { reps: 10, kg: 0 }; return { ...x, sets: [...x.sets, { reps: last.reps, kg: last.kg, done: false }] }; }),
        sets: ex.sets.map((s, k) => ({
          n: k + 1, reps: s.reps === 0 ? '' : String(s.reps), weight: s.kg === 0 ? '' : String(s.kg),
          ...(() => {
            const sel = st.rm[ex.id];
            const checked = !!sel && sel.includes(k);
            return {
              selecting: !!sel, checked,
              toggleCheck: () => this.setRm(ex.id, checked ? sel.filter((m) => m !== k) : [...sel, k]),
              boxStyle: checked ? 'background: #FF8A7A; border-color: #FF8A7A;' : 'background: transparent; border-color: rgba(var(--w), calc(0.25 * var(--wa)));',
              rowStyle: checked ? 'background: rgba(255,138,122,0.08);' : ''
            };
          })(),
          setReps: (e) => { const v = num(e.target.value); patchEx(ex.id, (x) => ({ ...x, sets: x.sets.map((y, m) => (m === k ? { ...y, reps: v } : y)) })); },
          setWeight: (e) => { const v = num(e.target.value); patchEx(ex.id, (x) => ({ ...x, sets: x.sets.map((y, m) => (m === k ? { ...y, kg: v } : y)) })); }
        }))
      })),
      isStrength: split === 'push' || split === 'pull' || split === 'legs',
      isCardio: split === 'cardio',
      isRest: split === 'rest',
      addExercise: () => { const id = 'ex' + (++h.nextId); h.setList((l) => [...l, { id, name: '', sets: makeSets('', split) }]); },
      activity: st.activity, duration: st.duration, distance: st.distance, notes: st.notes,
      setActivity: bind(this, 'activity'), setDuration: bind(this, 'duration'), setDistance: bind(this, 'distance'), setNotes: bind(this, 'notes')
    };
  }
}

export const DAY = { push: 'Push Day', pull: 'Pull Day', legs: 'Leg Day', cardio: 'Cardio Day', rest: 'Rest Day' };
export const KIND = { push: 'Push', pull: 'Pull', legs: 'Leg', cardio: 'Cardio', rest: 'Rest' };

export class VariantScreen extends Sub {
  constructor(host, key) { super(host, key); this.state = { aEdit: null, bOpen: 'init', cSel: 'init', dSheet: null, eEdit: null, eOpen: null, drag: null, dropped: false, impOpen: false, sheetDy: 0, sheetDrag: false }; }
  moveEx(from, to) {
    if (from === to) return;
    this.host.setList((l) => { const a = [...l]; const [x] = a.splice(from, 1); a.splice(to, 0, x); return a; });
  }
  pressStart(e, id) {
    if (e.button !== undefined && e.button !== 0) return;
    if (e.target.closest('input, textarea, select')) return;
    const card = e.currentTarget;
    const box = card.closest('[data-drag-list]');
    if (!box) return;
    const x0 = e.clientX, y0 = e.clientY;
    let active = false, info = null;
    const blockTouch = (ev) => { if (active) ev.preventDefault(); };
    const activate = () => {
      const cards = [...box.querySelectorAll('[data-drag-id]')];
      const from = cards.indexOf(card);
      if (from < 0) return;
      active = true;
      info = { from, centers: cards.map((c) => { const r = c.getBoundingClientRect(); return r.top + r.height / 2; }), H: card.getBoundingClientRect().height + 12 };
      document.body.style.userSelect = 'none';
      if (navigator.vibrate) navigator.vibrate(12);
      this.setState({ drag: { id, from, to: from, dy: 0, H: info.H } });
    };
    const timer = setTimeout(activate, 380);
    const move = (ev) => {
      if (!active) { if (Math.hypot(ev.clientX - x0, ev.clientY - y0) > 8) cleanup(); return; }
      ev.preventDefault();
      const dy = ev.clientY - y0, c = info.centers[info.from] + dy;
      let to = info.from;
      for (let i = 0; i < info.centers.length; i++) {
        if (i < info.from && c < info.centers[i]) to = Math.min(to, i);
        if (i > info.from && c > info.centers[i]) to = Math.max(to, i);
      }
      this.setState({ drag: { id, from: info.from, to, dy, H: info.H } });
    };
    const swallow = (ev) => { ev.stopPropagation(); ev.preventDefault(); };
    const cleanup = () => {
      clearTimeout(timer);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      window.removeEventListener('touchmove', blockTouch);
    };
    const up = () => {
      cleanup();
      if (!active) return;
      document.body.style.userSelect = '';
      window.addEventListener('click', swallow, { capture: true, once: true });
      setTimeout(() => window.removeEventListener('click', swallow, { capture: true }), 120);
      const d = this.state.drag;
      this.setState({ drag: null, dropped: true });
      if (d) this.moveEx(d.from, d.to);
      setTimeout(() => this.setState({ dropped: false }), 60);
    };
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    window.addEventListener('touchmove', blockTouch, { passive: false });
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
      const close = dy > 140 || (dy > 30 && v > 0.6);
      this.setState({ sheetDrag: false, sheetDy: 0, impOpen: !close });
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  }
  renderVals() {
    const h = this.host, st = this.state;
    const split = h.state.planSplit || h.state.dashSplit;
    const list = h.state.dashLists[split];
    const patch = (id, fn) => h.setPlanList((l) => l.map((x) => (x.id === id ? fn(x) : x)));
    const patchSet = (id, k, p) => patch(id, (x) => ({ ...x, sets: x.sets.map((y, m) => (m === k ? { ...y, ...p } : y)) }));
    const num = (v) => (v === '' ? 0 : Math.max(0, Number(v) || 0));
    const rng = (a) => { const mn = Math.min(...a), mx = Math.max(...a); return mn === mx ? String(mn) : mn + '–' + mx; };
    const add = (then) => { const id = 'ex' + (++h.nextId); h.setPlanList((l) => [...l, { id, name: '', sets: makeSets('', split) }]); then(id); };
    const openMap = st.eOpen || (list[0] ? { [list[0].id]: true } : {});
    const build = (ex, i) => {
      const reps = ex.sets.map((s) => s.reps), kgs = ex.sets.map((s) => s.kg).filter(Boolean);
      const summary = ex.sets.length + ' set' + (ex.sets.length === 1 ? '' : 's') + ' · ' + (reps.every((r) => !r) ? 'reps not set' : reps.map((r) => r || '–').join(' / ') + ' reps') + (kgs.length ? ' · ' + rng(kgs) + ' kg' : '');
      const aEditing = st.aEdit === ex.id;
      const bOpen = st.bOpen === 'init' ? i === 0 : st.bOpen === ex.id;
      const cSel = st.cSel === 'init' ? (i === 0 ? 0 : -1) : (st.cSel && st.cSel.id === ex.id ? st.cSel.k : -1);
      const sets = ex.sets.map((s, k) => ({
        n: k + 1, reps: s.reps ? String(s.reps) : '', kg: s.kg ? String(s.kg) : '',
        pill: s.reps ? (s.kg ? s.reps + ' × ' + s.kg : s.reps + ' reps') : (s.kg ? s.kg + ' kg' : '—'),
        setReps: (e) => { const v = num(e.target.value); patchSet(ex.id, k, { reps: v }); },
        setKg: (e) => { const v = num(e.target.value); patchSet(ex.id, k, { kg: v }); },
        repsDec: () => patchSet(ex.id, k, { reps: Math.max(0, s.reps - 1) }),
        repsInc: () => patchSet(ex.id, k, { reps: s.reps + 1 }),
        kgDec: () => patchSet(ex.id, k, { kg: Math.max(0, s.kg - 2.5) }),
        kgInc: () => patchSet(ex.id, k, { kg: s.kg + 2.5 }),
        canRemove: ex.sets.length > 1,
        remove: () => { patch(ex.id, (x) => ({ ...x, sets: x.sets.filter((_, m) => m !== k) })); if (cSel >= k) this.setState({ cSel: cSel > 0 ? { id: ex.id, k: cSel - 1 } : null }); },
        cOn: cSel === k,
        cPick: () => this.setState({ cSel: cSel === k ? null : { id: ex.id, k } }),
        cStyle: cSel === k ? 'background: #40DBA8; color: #02120C; border-color: #40DBA8; box-shadow: 0 0 18px -6px rgba(64,219,168,0.7);' : 'background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); border-color: var(--line);'
      }));
      const del = () => { h.setPlanList((l) => l.filter((x) => x.id !== ex.id)); this.setState({ aEdit: null, dSheet: null }); };
      return {
        id: ex.id, n: String(i + 1).padStart(2, '0'), name: ex.name, nameOr: ex.name || 'Untitled exercise', summary, sets,
        rename: (e) => { const v = e.target.value; patch(ex.id, (x) => ({ ...x, name: v })); },
        addSet: () => patch(ex.id, (x) => { const last = x.sets[x.sets.length - 1] || { reps: 10, kg: 0 }; return { ...x, sets: [...x.sets, { reps: last.reps, kg: last.kg, done: false }] }; }),
        deleteEx: del,
        aEditing, aNormal: !aEditing, aEditLabel: aEditing ? 'Done' : 'Edit',
        aBtnStyle: aEditing ? 'background: #40DBA8; color: #02120C; border-color: #40DBA8;' : 'background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); border-color: var(--line);',
        aToggle: () => this.setState({ aEdit: aEditing ? null : ex.id }),
        bOpen, bChev: bOpen ? 'transform: rotate(180deg);' : '',
        bCardStyle: bOpen ? 'border-color: rgba(64,219,168,0.35); background: rgba(64,219,168,0.04);' : 'border-color: var(--line); background: rgba(var(--w), calc(0.03 * var(--wa)));',
        bToggle: () => this.setState({ bOpen: bOpen ? null : ex.id }),
        cHasSel: cSel >= 0 && cSel < sets.length, cNoSel: !(cSel >= 0 && cSel < sets.length), c: sets[cSel] || {},
        dOpen: () => this.setState({ dSheet: ex.id }),
        ...(() => {
          const editing = st.eEdit === ex.id;
          const open = !!openMap[ex.id] || editing;
          const d = st.drag;
          let cardStyle = st.dropped ? 'transition: none;' : '';
          if (d) {
            if (d.id === ex.id) cardStyle = `transform: translateY(${d.dy}px) scale(1.03); z-index: 5; cursor: grabbing; border-color: rgba(64,219,168,0.55); box-shadow: 0 24px 50px -18px rgba(var(--k), calc(0.75 * var(--ka))); transition: box-shadow 0.2s, scale 0.2s;`;
            else {
              let sh = 0;
              if (d.from < d.to && i > d.from && i <= d.to) sh = -d.H;
              if (d.from > d.to && i >= d.to && i < d.from) sh = d.H;
              cardStyle = `transform: translateY(${sh}px); transition: transform 0.2s ease;`;
            }
          }
          return {
            eEditing: editing, eNormal: !editing, eOpen: open, eClosed: !open,
            eChev: open ? 'transform: rotate(180deg);' : '',
            eEditLabel: editing ? 'Done' : 'Edit',
            eBtnStyle: editing ? 'background: #40DBA8; color: #02120C; border-color: #40DBA8;' : 'background: rgba(var(--w), calc(0.04 * var(--wa))); color: var(--ink); border-color: var(--line);',
            eEditToggle: () => this.setState({ eEdit: editing ? null : ex.id, eOpen: editing ? openMap : { ...openMap, [ex.id]: true } }),
            eToggle: () => this.setState({ eOpen: { ...openMap, [ex.id]: !open }, eEdit: editing && open ? null : st.eEdit }),
            eCardStyle: cardStyle,
            ePress: (e) => this.pressStart(e, ex.id),
            eKey: (e) => {
              if (!e.altKey) return;
              if (e.key === 'ArrowUp' && i > 0) { e.preventDefault(); this.moveEx(i, i - 1); }
              if (e.key === 'ArrowDown' && i < list.length - 1) { e.preventDefault(); this.moveEx(i, i + 1); }
            }
          };
        })()
      };
    };
    const exercises = list.map(build);
    const sheet = exercises.find((x) => x.id === st.dSheet);
    const short = { push: 'Push', pull: 'Pull', legs: 'Legs', cardio: 'Cardio', rest: 'Rest' };
    return {
      exercises, empty: exercises.length === 0,
      chips: Object.keys(short).map((k) => ({
        label: short[k], on: k === split,
        style: k === split ? 'background: #40DBA8; color: #02120C;' : 'background: transparent; color: var(--ink2);',
        pick: () => { h.pickPlanSplit(k); this.setState({ aEdit: null, bOpen: 'init', cSel: 'init', dSheet: null }); }
      })),
      sheetOpen: !!sheet, sheet: sheet || { sets: [] },
      closeSheet: () => this.setState({ dSheet: null }),
      addA: () => add((id) => this.setState({ aEdit: id })),
      addB: () => add((id) => this.setState({ bOpen: id })),
      addC: () => add((id) => this.setState({ cSel: { id, k: 0 } })),
      addD: () => add((id) => this.setState({ dSheet: id })),
      addE: () => add((id) => this.setState({ eEdit: id, eOpen: { ...openMap, [id]: true } })),
      openImp: () => this.setState({ impOpen: true }),
      closeImp: () => this.setState({ impOpen: false }),
      impFinish: () => { h.screens.imp.setState({ status: 'idle', msg: '', text: '', img: '', imgName: '' }); this.setState({ impOpen: false }); },
      impTitle: (h.state.imp && h.state.imp.pending && h.state.imp.pending.length) ? 'Mixed exercises found' : 'Import a plan',
      sheetDown: (e) => this.sheetDown(e),
      layerStyle: st.impOpen ? '' : 'pointer-events: none;',
      scrimStyle: st.impOpen ? `opacity: ${Math.max(0, 1 - st.sheetDy / 500)};` : 'opacity: 0;',
      sheetStyle: st.impOpen
        ? `transform: translateY(${st.sheetDy}px); transition: ${st.sheetDrag ? 'none' : 'transform 0.34s cubic-bezier(0.2, 0.8, 0.2, 1)'};`
        : 'transform: translateY(105%); transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);',
      canDelAll: list.length > 0 && !st.delAll,
      confirmDelAll: !!st.delAll && list.length > 0,
      delAllTitle: 'Delete all ' + list.length + ' exercise' + (list.length === 1 ? '' : 's') + ' from ' + (DAY[split] || 'this day') + '?',
      askDelAll: () => { if (list.length) this.setState({ delAll: true, menu: false }); },
      menuOpen: !!st.menu,
      toggleMenu: () => this.setState({ menu: !this.state.menu }),
      delItemStyle: list.length ? '' : 'opacity: 0.4; cursor: default;',
      cancelDelAll: () => this.setState({ delAll: false }),
      doDelAll: () => { h.setPlanList(() => []); this.setState({ delAll: false, eEdit: null }); },
      eCount: list.length + ' exercise' + (list.length === 1 ? '' : 's'),
      isEmpty: list.length === 0, hasList: list.length > 0,
      emptyTag: (() => { const pf = h.state.planFrom, sp = h.state.planSplit || h.state.dashSplit; return pf && pf.split === sp ? pf.label : PG_NAME[sp] || ''; })(),
      eAllLabel: list.some((x) => openMap[x.id]) ? 'Collapse all' : 'Expand all',
      eToggleAll: () => {
        const anyOpen = list.some((x) => openMap[x.id]);
        const m = {}; if (!anyOpen) list.forEach((x) => { m[x.id] = true; });
        this.setState({ eOpen: m, eEdit: null });
      }
    };
  }
}

export class ImportScreen extends Sub {
  constructor(host, key) { super(host, key); this.state = { open: false, mode: 'text', text: '', img: '', imgType: '', imgName: '', status: 'idle', msg: '' }; }
  onFile(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      const im = new Image();
      im.onload = () => {
        const s = Math.min(1, 1280 / Math.max(im.width, im.height));
        const c = document.createElement('canvas');
        c.width = Math.round(im.width * s); c.height = Math.round(im.height * s);
        const cx = c.getContext('2d');
        cx.fillStyle = '#FFFFFF'; cx.fillRect(0, 0, c.width, c.height);
        cx.drawImage(im, 0, 0, c.width, c.height);
        this.setState({ img: c.toDataURL('image/jpeg', 0.82), imgType: 'image/jpeg', imgName: f.name, status: 'idle', msg: '' });
      };
      im.src = reader.result;
    };
    reader.readAsDataURL(f);
  }
  async run() {
    const st = this.state, h = this.host;
    const ready = st.mode === 'text' ? st.text.trim().length > 3 : !!st.img;
    if (!ready || st.status === 'loading') return;
    this.setState({ status: 'loading', msg: '' });
    const instr = 'Extract every exercise from this workout plan ' + (st.mode === 'text' ? 'text' : 'image') + '. Reply with ONLY JSON, no prose: {"exercises":[{"name":string,"split":"push"|"pull"|"legs"|"cardio"|"rest","sets":number|null,"reps":number|null,"kg":number|null}]}. Classify each exercise by muscle group: chest/shoulders/triceps = push, back/biceps/rear delts = pull, quads/hamstrings/glutes/calves = legs, running/cycling/conditioning = cardio, stretching/mobility = rest. Use proper exercise names. Use null for anything not stated. Convert lb to kg (round to 0.5).';
    const content = st.mode === 'text' ? instr + '\n\nPLAN:\n' + st.text
      : [{ type: 'image', source: { type: 'base64', media_type: st.imgType, data: st.img.split(',')[1] } }, { type: 'text', text: instr }];
    if (!window.claude || !window.claude.complete) { this.setState({ status: 'error', msg: 'AI import is not available right now. Please try again later.' }); return; }
    const ask = async () => window.claude.complete({ messages: [{ role: 'user', content }], max_tokens: 8000 });
    const parse = (raw) => {
      const r = String(raw || '').replace(/```(?:json)?/gi, '');
      const a = r.indexOf('{');
      if (a < 0) throw new Error('no json');
      try { return JSON.parse(r.slice(a, r.lastIndexOf('}') + 1)); } catch (e) {
        const body = r.slice(a), cut = body.lastIndexOf('}');
        for (let k = cut; k > 0; k = body.lastIndexOf('}', k - 1)) {
          try { return JSON.parse(body.slice(0, k + 1) + ']}'); } catch (e2) { /* keep trimming */ }
        }
        throw e;
      }
    };
    let r;
    try { r = await ask(); } catch (e1) {
      try { r = await ask(); } catch (e2) {
        console.warn('AI import request failed', e2);
        this.setState({ status: 'error', msg: "Couldn't reach the AI. Check your connection and try again." });
        return;
      }
    }
    try {
      const j = parse(r);
      const valid = ['push', 'pull', 'legs', 'cardio', 'rest'];
      const items = (j.exercises || []).filter((e) => e && e.name).map((e) => ({ ...e, split: valid.includes(e.split) ? e.split : 'legs' }));
      if (!items.length) throw new Error('empty');
      const cur = h.state.planSplit || h.state.dashSplit;
      if (items.some((e) => e.split !== cur)) this.setState({ status: 'idle', pending: items });
      else this.apply(items, 'all');
    } catch (err) {
      console.warn('AI import could not parse response', err, r);
      this.setState({ status: 'error', msg: "Couldn't find any exercises in that. Try clearer text or a sharper photo." });
    }
  }
  apply(items, how) {
    const h = this.host, cur = h.state.planSplit || h.state.dashSplit;
    const lists = {};
    for (const e of items) {
      const sp = how === 'split' ? e.split : how === 'all' ? cur : how;
      const timed = sp === 'cardio' || sp === 'rest';
      const count = Math.min(10, Math.max(1, Number(e.sets) || (timed ? 1 : 3)));
      const reps = Number(e.reps) || 0, kg = Number(e.kg) || 0;
      (lists[sp] = lists[sp] || []).push({ id: 'ex' + (++h.nextId), name: String(e.name), sets: Array.from({ length: count }, () => ({ reps, kg, done: false, timed: timed && !reps })) });
    }
    const keys = Object.keys(lists);
    const first = keys.includes(cur) ? cur : keys[0];
    h.setState((s) => ({ dashLists: { ...s.dashLists, ...lists }, planSplit: first, dashOpen: null }));
    const n = items.length;
    this.setState({ pending: null, target: null, status: 'done', msg: `Imported ${n} exercise${n === 1 ? '' : 's'} into ${keys.map((k) => DAY[k]).join(', ')}. Fill in any missing reps or weight below.` });
  }
  renderVals() {
    const st = this.state;
    const cur = this.host.state.planSplit || this.host.state.dashSplit;
    const pend = st.pending || [];
    const counts = {};
    for (const e of pend) counts[e.split] = (counts[e.split] || 0) + 1;
    const others = Object.keys(counts).filter((k) => k !== cur);
    const joinAnd = (a) => (a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]);
    const popupText = counts[cur]
      ? `You're on ${DAY[cur]}, but this plan also has ${joinAnd(others.map((k) => KIND[k]))} exercises. Where should they go?`
      : `You're on ${DAY[cur]}, but these look like ${joinAnd(others.map((k) => KIND[k]))} exercises. Where should they go?`;
    const ready = st.mode === 'text' ? st.text.trim().length > 3 : !!st.img;
    const loading = st.status === 'loading';
    return {
      open: st.open, openLabel: st.open ? 'Close' : 'Import',
      toggleOpen: () => this.setState({ open: !this.state.open }),
      isText: st.mode === 'text', isImage: st.mode === 'image',
      modes: [['text', 'Paste text', 'M8 4h8l4 4v12H8zM16 4v4h4M11 12h6M11 16h6'], ['image', 'Upload image', 'M4 5h16v14H4zM4 15l4.5-4.5 4 4L15 12l5 5M15.5 8.5h.01']].map(([k, label, icon]) => ({
        label, icon, on: st.mode === k, pick: () => this.setState({ mode: k, status: 'idle', msg: '' }),
        style: st.mode === k ? 'background: #6CCBF5; color: #03131B;' : 'background: transparent; color: var(--ink2);'
      })),
      text: st.text, setText: bind(this, 'text'),
      onFile: (e) => this.onFile(e),
      hasImg: !!st.img, imgBg: st.img ? `background-image: url("${st.img}");` : '',
      imgTitle: st.img ? st.imgName : 'Upload a photo or screenshot',
      imgSub: st.img ? 'Tap to choose a different image' : 'Handwritten notes, a screenshot or a printed plan',
      run: () => this.run(),
      runLabel: loading ? 'Reading your plan…' : 'Import with AI',
      runStyle: !ready || loading ? 'opacity: 0.45; cursor: default;' : '',
      hasMsg: !!st.msg, msg: st.msg,
      isError: st.status === 'error', isDone: st.status === 'done', notDone: st.status !== 'done',
      hasText: st.text.trim().length > 0,
      clearText: () => this.setState({ text: '', status: 'idle', msg: '' }),
      fillExample: () => this.setState({ mode: 'text', status: 'idle', msg: '', text: 'Monday – Push\nBench press 4x8 @ 70kg\nOverhead press 3x10 40kg\nTricep pushdown 3x12\n\nWednesday – Legs\nSquat 5x5 100kg\nRomanian deadlift 3x10 60kg\nCalf raises 3x15' }),
      reset: () => this.setState({ status: 'idle', msg: '', text: '', img: '', imgName: '' }),
      showPopup: pend.length > 0, noPopup: pend.length === 0,
      popupText,
      popupCounts: [cur].concat(Object.keys(counts).filter((k) => k !== cur)).filter((k) => counts[k] || k === cur).map((k) => {
        const on = (st.target || cur) === k, mine = k === cur;
        const c = mine ? ['64,219,168', 'var(--accT)', '#40DBA8'] : ['245,196,108', 'var(--amberT)', '#F5C46C'];
        return {
          day: DAY[k], n: counts[k] || 0, plural: (counts[k] || 0) === 1 ? '' : 's', on,
          pick: () => this.setState({ target: k }),
          style: `color: ${c[1]}; background: rgba(${c[0]}, ${on ? 0.16 : 0.07}); border-color: ${on ? c[2] : 'rgba(' + c[0] + ',0.2)'};`,
          ring: `border-color: ${on ? c[2] : 'rgba(' + c[0] + ',0.45)'};`,
          dot: on ? `background: ${c[2]};` : 'background: transparent;'
        };
      }),
      moveLabel: `Add all ${pend.length} to ${DAY[st.target || cur]}`,
      moveSel: () => this.apply(pend, st.target || cur),
      addAllLabel: `Add all ${pend.length} to ${DAY[cur]}`,
      splitSub: Object.keys(counts).map((k) => `${counts[k]} to ${DAY[k]}`).join(' · '),
      addAll: () => this.apply(pend, 'all'),
      addTargets: [cur].concat(Object.keys(counts).filter((k) => k !== cur)).map((k) => ({
        label: `Add all ${pend.length} to ${DAY[k]}`,
        pick: () => this.apply(pend, k)
      })),
      splitUp: () => this.apply(pend, 'split'),
      cancel: () => this.setState({ pending: null, target: null }),
      msgStyle: st.status === 'error' ? 'background: rgba(255,138,122,0.1); color: var(--danger);' : 'background: rgba(64,219,168,0.1); color: var(--accT);'
    };
  }
}

