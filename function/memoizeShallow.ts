import memoizeWith from "./memoizeWith";

const equalsShallow = (xs: any[], ys: any[]) =>
  xs.length === ys.length && xs.every((x, index) => x === ys[index]);

export default memoizeWith(equalsShallow);
