export default (f = (x, y) => [x, y]) =>
  (xs, ys) =>
    xs.map((x, index) => f(x, ys[index]));
