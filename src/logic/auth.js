import { Sub, bind } from './shared.js';

export class LoginScreen extends Sub {
  constructor(host, key) { super(host, key); this.state = { mode: 'login', email: '', password: '' }; }
  renderVals() {
    const login = this.state.mode === 'login';
    return {
      subtitle: login ? 'Log in to keep your streak going.' : 'Create an account to start tracking.',
      cta: login ? 'Log in' : 'Sign up',
      toggleText: login ? "Don't have an account? Sign up" : 'Already have an account? Log in',
      email: this.state.email, password: this.state.password,
      setEmail: bind(this, 'email'), setPassword: bind(this, 'password'),
      toggle: () => this.setState({ mode: login ? 'signup' : 'login' })
    };
  }
}

export class SignupScreen extends Sub {
  constructor(host, key) { super(host, key); this.state = { name: '', email: '', password: '', terms: false }; }
  renderVals() {
    const st = this.state, p = st.password;
    const score = p.length === 0 ? 0 : Math.min(4, (p.length >= 8) + /[A-Z]/.test(p) + /[0-9]/.test(p) + /[^A-Za-z0-9]/.test(p) + (p.length > 0 ? 0 : 0)) || 1;
    const labels = ['Use 8+ characters with a number and a symbol', 'Weak', 'Fair', 'Good', 'Strong'];
    const ready = st.name.trim() && st.email.trim() && p.length >= 8 && st.terms;
    return {
      name: st.name, email: st.email, password: p, terms: st.terms,
      setName: bind(this, 'name'), setEmail: bind(this, 'email'), setPassword: bind(this, 'password'),
      toggleTerms: () => this.setState({ terms: !this.state.terms }),
      boxStyle: st.terms ? 'background: #40DBA8; border-color: #40DBA8;' : 'background: transparent; border-color: rgba(var(--w), calc(0.25 * var(--wa)));',
      bars: [1, 2, 3, 4].map((i) => ({ style: i <= score ? 'background: #40DBA8;' : 'background: rgba(var(--w), calc(0.08 * var(--wa)));' })),
      strength: labels[score],
      ctaStyle: ready ? '' : 'opacity: 0.4; pointer-events: none;'
    };
  }
}

