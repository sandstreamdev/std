const { max, min } = Math;

export default ([head, ...tail]) =>
  tail.reduce(([min, max], current) => [min(min, current), max(max, current)], [
    head,
    head
  ]);
