import mul from "./mul.js";
export default space => ([x, y]) => {
  const [outX, outY] = mul(space, [x, y]);
  return [outX, outY];
};
