export default (t: number): ((a: number, b: number) => number) =>
  (a: number, b: number): number =>
    a * (1 - t) + b * t;
