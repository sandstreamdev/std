export default (count: number) =>
  <T>(xs: T[]): T[] =>
    xs.slice(0, count);
