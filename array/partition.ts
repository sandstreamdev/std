export default predicate => xs =>
  xs.reduce(
    ([left, right], current) => {
      const pass = predicate(current);

      return pass ? [left, [...right, current]] : [[...left, current], right];
    },
    [[], []]
  );
