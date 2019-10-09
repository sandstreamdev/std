export default (xs, ys) =>
  (!xs && ys) ||
  (!ys && xs) ||
  xs.length !== ys.length ||
  xs.some((x, index) => x !== ys[index]);
