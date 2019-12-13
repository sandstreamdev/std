import length from "./length";

export default (vector: [number, number]) => {
  const magnitude = length(vector);

  return magnitude !== 0 ? vector.map(_ => _ / magnitude) : vector;
};
