import memoizeWith from "./memoizeWith.js";
const equalsShallow = (xs, ys) =>
  xs.length === ys.length && xs.every((x, index) => x === ys[index]);
export default memoizeWith(equalsShallow);
