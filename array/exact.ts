import range from "./range";

export default (count: number) => (xs: any[]) =>
  range(count).map(index => xs[index]);
