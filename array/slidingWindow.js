export default count => xs =>
  xs
    .map((_, index, source) => source.slice(index, index + count))
    .filter(element => element.length > 0 && element.length === count);
