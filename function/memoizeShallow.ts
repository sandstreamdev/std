import memoizeWith from "./memoizeWith";

const equalsShallow = <T>(xs: T[], ys: T[]): boolean =>
  xs.length === ys.length && xs.every((x, index) => x === ys[index]);

export default memoizeWith(equalsShallow);
