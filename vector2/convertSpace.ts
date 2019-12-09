import mul from "./mul";

export default space => ([x, y]) => {
  const [outX, outY] = mul(space, [x, y]);

  return [outX, outY];
};
