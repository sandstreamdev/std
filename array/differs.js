import isNonNullable from "../is/nonNullable.js";
export default (xs, ys) =>
  Boolean(!xs && ys) ||
  Boolean(!ys && xs) ||
  !isNonNullable(ys) ||
  !isNonNullable(xs) ||
  xs.length !== ys.length ||
  xs.some((x, index) => x !== ys[index]);
