export default (
  {
    a,
    b,
    c,
    d,
    e,
    f
  }: { a: number; c: number; e: number; b: number; d: number; f: number },
  [x, y]: [number, number]
) => [a * x + c * y + e, b * x + d * y + f];
