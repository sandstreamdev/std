import add from "./add";
import safeNormalize from "./safeNormalize";

const filterOutZeros = (xs: number[]): number[] =>
xs.filter((_: number): boolean => _ !== 0);

export default (xs: number[]): boolean => {
const filteredXs: number[] = filterOutZeros(xs);

return (
Math.abs(filteredXs.map(safeNormalize).reduce(add, 0)) === filteredXs.length
);
};
