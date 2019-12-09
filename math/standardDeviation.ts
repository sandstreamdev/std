import average from "./average";

export default (xs: number[], origin: number = average(xs)): number => {
const sumOfSquareDifferences: number = xs.reduce(
(squareDiffs: number, x: number): number =>
squareDiffs + Math.pow(x - origin, 2),
0
);

return Math.sqrt(sumOfSquareDifferences / (xs.length - 1));
};
