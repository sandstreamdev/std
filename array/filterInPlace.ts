export default <T>(f: (value: T, index: number, context: T[]) => boolean) =>
  (xs: T[]): T[] => {
    let i = 0;
    let j = 0;

    while (i < xs.length) {
      const value = xs[i];

      if (f(value, i, xs)) {
        xs[j++] = value;
      }

      i++;
    }

    xs.length = j;

    return xs;
  };
