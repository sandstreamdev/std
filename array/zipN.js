export default (xs, ...ys) =>
  xs.map((value, index) => ys.reduce((x, xs) => [...x, xs[index]], [value]));
