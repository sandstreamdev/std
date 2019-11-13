export default ([a, b]: [number, number]): [number, number] =>
  a > b ? [b, a] : [a, b];
