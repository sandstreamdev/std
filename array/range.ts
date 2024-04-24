export default (n: number): number[] =>
  Array(n)
    .fill(0)
    .map((_, index) => index);
