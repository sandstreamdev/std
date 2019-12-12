export default (n: any) =>
  Array(n)
    .fill(0)
    .map((_, index) => index);
