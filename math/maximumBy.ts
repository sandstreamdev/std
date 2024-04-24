export default (f: (x: number) => number): ((xs: number[]) => number) =>
  (xs: number[]): number =>
    xs.reduce((acc, curr) => (f(curr) > f(acc) ? curr : acc));
