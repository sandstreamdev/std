export default <T1, T2>(
    f: (x: T1, y: T2) => [T1, T2] = (x: T1, y: T2) => [x, y]
  ) =>
  (xs: T1[], ys: T2[]): [T1, T2][] =>
    xs.map((x, index) => f(x, ys[index]));
