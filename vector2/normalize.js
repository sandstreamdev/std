import length from "./length.js";

export default vector => {
  const magnitude = length(vector);

  return magnitude !== 0 ? vector.map(_ => _ / magnitude) : vector;
};
