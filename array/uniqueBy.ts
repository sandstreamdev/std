export default <T, TResult>(f: (x: T) => TResult) =>
  (xs: T[]) => [...new Map(xs.map(x => [f(x), x])).values()];
