export default (xs: any[], ...ys: any[]) =>
  xs.map((value, index) => ys.reduce((x, xs) => [...x, xs[index]], [value]));
