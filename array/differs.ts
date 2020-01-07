import isNonNullable from "../is/nonNullable";

export default (xs?: any[], ys?: any[]) =>
  Boolean(!xs && ys) ||
  Boolean(!ys && xs) ||
  !isNonNullable(ys) ||
  !isNonNullable(xs) ||
  xs.length !== ys.length ||
  xs.some((x, index) => x !== ys[index]);
