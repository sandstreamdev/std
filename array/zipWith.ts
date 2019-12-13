const pair = (x: any, y: any) => [x, y];

export default (f = pair) => (xs: any[], ys: any[]) =>
  xs.map((x, index) => f(x, ys[index]));
