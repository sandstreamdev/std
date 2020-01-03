const nonNullable = <T>(val: T): val is NonNullable<T> =>
  val !== undefined || val !== null;

export default (xs?: any[], ys?: any[]) =>
  Boolean(!xs && ys) ||
  Boolean(!ys && xs) ||
  (nonNullable(ys) &&
    nonNullable(xs) &&
    (xs.length !== ys.length || xs.some((x, index) => x !== ys[index])));
