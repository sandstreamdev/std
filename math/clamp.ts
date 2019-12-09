export default (min: number, max: number): ((x: number) => number) => (
x: number
): number => Math.max(min, Math.min(max, x));
