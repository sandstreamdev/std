import add from "./add";
import sign from "./sign";

const filterOutZeros = (xs: number[]): number[] =>
  xs.filter((_: number): boolean => _ !== 0);

export default (xs: number[]): boolean => {
  const filteredXs: number[] = filterOutZeros(xs);

  return Math.abs(filteredXs.map(sign).reduce(add, 0)) === filteredXs.length;
};
