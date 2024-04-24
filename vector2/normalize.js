import length from "./length.js";
export default vector => {
  const magnitude = length(vector);
  const [x, y] = vector;
  return magnitude !== 0 ? [x / magnitude, y / magnitude] : vector;
};
