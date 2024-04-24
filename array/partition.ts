export default <T>(predicate: (x: T) => boolean) =>
  (xs: T[]) =>
    xs.reduce(
      ([left, right]: [T[], T[]], current) => {
        const pass = predicate(current);

        const result: [T[], T[]] = pass
          ? [left, [...right, current]]
          : [[...left, current], right];

        return result;
      },
      [[] as T[], [] as T[]] as const
    );
