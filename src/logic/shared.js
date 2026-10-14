export class Sub {
  constructor(host, key) { this.host = host; this.key = key; }
  get props() { return this.host.props; }
  get state() { return this.host.state[this.key]; }
  set state(v) { this.host.state[this.key] = v; }
  setState(p) { const k = this.key; this.host.setState((s) => ({ [k]: { ...s[k], ...(typeof p === 'function' ? p(s[k]) : p) } })); }
  renderVals() { return {}; }
}
export const bind = (self, key) => (e) => { const v = e.target.value; self.setState({ [key]: v }); };


export const SETS = {
  'back squat': [[8, 80], [8, 80], [6, 85]], 'romanian deadlift': [[10, 60], [10, 60], [10, 60]], 'walking lunges': [[12, 16], [12, 16]], 'calf raises': [[15, 40], [15, 40], [15, 40]],
  'bench press': [[8, 70], [8, 70], [6, 75]], 'overhead press': [[8, 40], [8, 40], [8, 40]], 'incline dumbbell press': [[10, 24], [10, 24], [10, 24]], 'tricep pushdown': [[12, 25], [12, 25], [12, 25]],
  'deadlift': [[5, 120], [5, 120], [5, 120]], 'pull-ups': [[8, 0], [8, 0], [6, 0]], 'barbell row': [[10, 60], [10, 60], [10, 60]], 'bicep curl': [[12, 12], [12, 12], [12, 12]]
};
export const makeSets = (name, split) => {
  const k = name.trim().toLowerCase();
  if (SETS[k]) return SETS[k].map(([reps, kg]) => ({ reps, kg, done: false }));
  if (split === 'cardio' || split === 'rest' || / min\b/.test(k)) return [{ reps: 0, kg: 0, done: false, timed: true }];
  return [{ reps: 10, kg: 0, done: false }, { reps: 10, kg: 0, done: false }, { reps: 10, kg: 0, done: false }];
};
export const setText = (s) => (s.timed ? 'Full duration' : !s.reps ? (s.kg > 0 ? `Reps not set × ${s.kg} kg` : 'Reps not set') : s.kg > 0 ? `${s.reps} reps × ${s.kg} kg` : `${s.reps} reps · bodyweight`);

export const pad2 = (n) => String(n).padStart(2, '0');
