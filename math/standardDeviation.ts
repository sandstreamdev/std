import average from "./average";

export default (xs, origin = average(xs)) => {
  const sumOfSquareDifferences = xs.reduce(
    (squareDiffs, x) => squareDiffs + Math.pow(x - origin, 2),
    0
  );

  return Math.sqrt(sumOfSquareDifferences / (xs.length - 1));
};
