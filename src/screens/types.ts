// Render values produced by AppLogic.renderVals(). The logic layer is a port
// of the design prototype and is untyped, so screens receive a loose bag.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Vals = Record<string, any>;

export interface ScreenProps {
  v: Vals;
}
