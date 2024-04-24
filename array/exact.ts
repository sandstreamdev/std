import range from "./range";

export default (count: number) =>
  <T>(xs: T[]): T[] =>
    range(count).map(index => xs[index]);
