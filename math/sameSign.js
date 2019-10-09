import add from "./add";
import safeNormalize from "./safeNormalize";

const filterOutZeros = xs => xs.filter(_ => _ !== 0);

export default xs => {
  const filteredXs = filterOutZeros(xs);

  return (
    Math.abs(filteredXs.map(safeNormalize).reduce(add, 0)) === filteredXs.length
  );
};
