export default (xs: number[]) => {
  const [head, ...tail] = xs;

  return tail.reduce(
    ([min, max], current) => [Math.min(min, current), Math.max(max, current)],
    [head, head]
  );
};
