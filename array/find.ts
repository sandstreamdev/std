export default <T>(
    predicate: (value: T, index: number, context: T[]) => boolean,
    fallback?: T
  ) =>
  (xs: T[]) => {
    const targetIndex = xs.findIndex(predicate);

    return targetIndex !== -1 ? xs[targetIndex] : fallback;
  };
