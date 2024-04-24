export default (count: number) =>
  <T>(xs: T[]): T[] =>
    xs.slice(count, xs.length);
