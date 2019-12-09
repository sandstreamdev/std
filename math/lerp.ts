export default (t: number): ((a: number, b: number) => number) => (
a: number,
b: number
): number => a * t + b * (1 - t);
