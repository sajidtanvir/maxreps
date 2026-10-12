import { useEffect, useReducer, useRef } from 'react';

// Minimal host for the design's logic classes. Mirrors the prototype runtime:
// setState applies synchronously to `logic.state` and then schedules a React
// re-render, so code that reads `this.state` right after setState keeps working.

export type State = Record<string, any>;
export type Props = Record<string, any>;
type Update = State | ((s: State) => State);

export class DCLogic {
  props: Props;
  state: State = {};
  __rerender: (() => void) | null = null;
  __listeners = new Set<() => void>();

  constructor(props: Props) {
    this.props = props || {};
  }

  setState(update: Update, cb?: () => void) {
    const patch = typeof update === 'function' ? update(this.state) : update;
    this.state = { ...this.state, ...patch };
    this.__rerender?.();
    this.__listeners.forEach((l) => l());
    if (cb) queueMicrotask(cb);
  }

  forceUpdate() {
    this.__rerender?.();
  }

  componentDidMount() {}
  componentDidUpdate(_prev: Props) {}
  componentWillUnmount() {}
  renderVals(): State {
    return {};
  }
}

/** Mounts a DCLogic subclass for the life of the calling component. */
export function useLogic<T extends DCLogic>(create: () => T, props: Props): T {
  const ref = useRef<T | null>(null);
  const [, bump] = useReducer((n: number) => n + 1, 0);
  if (!ref.current) ref.current = create();
  const logic = ref.current;
  const prevProps = useRef(props);

  if (prevProps.current !== props) {
    logic.props = props;
  }

  useEffect(() => {
    logic.__rerender = bump;
    logic.componentDidMount();
    return () => {
      logic.__rerender = null;
      logic.componentWillUnmount();
    };
  }, [logic]);

  useEffect(() => {
    const prev = prevProps.current;
    if (prev !== props) {
      prevProps.current = props;
      logic.componentDidUpdate(prev);
    }
  });

  return logic;
}
