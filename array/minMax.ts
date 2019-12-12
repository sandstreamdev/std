export default ([head, ...tail]: number[]) =>
  tail.reduce(
    ([min, max], current) => [Math.min(min, current), Math.max(max, current)],
    [head, head]
  );
