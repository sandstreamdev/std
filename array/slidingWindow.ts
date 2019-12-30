export default (count: number) => (xs: any[]) =>
  xs
    .map((_, index, source) => source.slice(index, index + count))
    .filter(element => element.length === count);
