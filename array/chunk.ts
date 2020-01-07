export default (size: number) => (xs: any[]) =>
  xs.reduce(
    (acc, _, index) =>
      index % size ? acc : [...acc, xs.slice(index, index + size)],
    []
  );
