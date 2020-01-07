import length from "./length";

export default (vector: [number, number]): [number, number] => {
  const magnitude = length(vector);

  const [x, y] = vector;

  return magnitude !== 0 ? [x / magnitude, y / magnitude] : vector;
};
