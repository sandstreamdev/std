import isNonNullable from "../is/nonNullable";

export default <T>(xs?: T[], ys?: T[]): boolean =>
  Boolean(!xs && ys) ||
  Boolean(!ys && xs) ||
  !isNonNullable(ys) ||
  !isNonNullable(xs) ||
  xs.length !== ys.length ||
  xs.some((x, index) => x !== ys[index]);
