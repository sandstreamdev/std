export default (f: (x: number) => number): ((xs: number[]) => number) => (
  xs: number[]
): number =>
  xs.reduce((acc: number, curr: number): number =>
    f(curr) > f(acc) ? curr : acc
  );
