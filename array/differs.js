export default (xs, ys) =>
  Boolean(!xs && ys) ||
  Boolean(!ys && xs) ||
  xs.length !== ys.length ||
  xs.some((x, index) => x !== ys[index]);