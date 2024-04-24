export default <T, TResult>(
    f: (value: T, index: number, context: T[]) => TResult[]
  ) =>
  (xs: T[]) =>
    xs.reduce(
      (ys: TResult[], value, index, context) =>
        ys.concat(f(value, index, context)),
      []
    );
