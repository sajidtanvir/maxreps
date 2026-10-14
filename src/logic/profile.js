import { Sub, bind } from './shared.js';
import { NX_GOALS, nxTargets } from './nutrition.js';

export class ProfileScreen extends Sub {
  constructor(host, key) { super(host, key); this.state = { name: 'Neo', goal: 'cut', target: '140', weekly: '5', weight: '77.6' }; }
  renderVals() {
    const st = this.state;
    const noWeight = String(st.weight).trim() === '';
    const nxs = this.host.screens.nx, np = nxs.state.profile, NT = np ? nxTargets(np) : null;
    const nGoal = np ? NX_GOALS.find((g) => g[0] === np.goal)[1] : 'Not set';
    const nTargets = NT ? NT.kcal.toLocaleString() + ' kcal · ' + NT.p + 'g protein a day' : 'Answer 5 quick questions to set targets';
    const changeGoals = () => { nxs.setState({ quizOpen: true, step: 0, draft: { ...(np || { goal: 'gain', gender: 'male', age: 25, height: 170, weight: 70, act: 1.375, diet: 'all', avoid: [], budget: 2 }) } }); this.host.go('#nutrition'); };
    return {
      nGoal, nTargets, changeGoals,
      goals: [['bulk', 'Bulk'], ['cut', 'Cut'], ['maintain', 'Maintain']].map(([key, label]) => ({
        label, on: key === st.goal, pick: () => this.setState({ goal: key }),
        style: key === st.goal ? 'background: #40DBA8; color: #02120C;' : 'background: transparent; color: var(--ink2);'
      })),
      name: st.name, target: st.target, weekly: st.weekly, weight: st.weight,
      noWeight, weightStyle: noWeight ? 'opacity: 0.4;' : '',
      setName: bind(this, 'name'), setTarget: bind(this, 'target'), setWeekly: bind(this, 'weekly'), setWeight: bind(this, 'weight')
    };
  }
}

