export default (xs, origin = average(data)) => {
  const sumOfSquareDifferences = xs.reduce(
    (squareDiffs, x) => squareDiffs + Math.pow(x - origin, 2),
    0
  );

  return Math.sqrt(sumOfSquareDifferences / (xs.length - 1));
};
