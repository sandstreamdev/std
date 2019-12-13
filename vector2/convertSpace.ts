import mul from "./mul";

export default (space: {
  a: number;
  c: number;
  e: number;
  b: number;
  d: number;
  f: number;
}) => ([x, y]: [number, number]) => {
  const [outX, outY] = mul(space, [x, y]);

  return [outX, outY];
};
