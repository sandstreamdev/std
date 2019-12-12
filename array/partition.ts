export default (predicate: (x: any) => boolean) => (xs: any[]) =>
  xs.reduce(
    ([left, right], current) => {
      const pass = predicate(current);

      return pass ? [left, [...right, current]] : [[...left, current], right];
    },
    [[], []]
  );
