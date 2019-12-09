export default ([head, ...tail]) =>
  tail.reduce(
    ([min, max], current) => [Math.min(min, current), Math.max(max, current)],
    [head, head]
  );
