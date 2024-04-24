export default <T>(f?: (a: T, b: T) => number) =>
  (xs: T[]): T[] =>
    [...xs].sort(f);
