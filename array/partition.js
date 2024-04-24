export default predicate => xs =>
  xs.reduce(
    ([left, right], current) => {
      const pass = predicate(current);
      const result = pass
        ? [left, [...right, current]]
        : [[...left, current], right];
      return result;
    },
    [[], []]
  );
