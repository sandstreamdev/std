import add from "./add.js";
import safeNormalize from "./safeNormalize.js";

const filterOutZeros = xs => xs.filter(_ => _ !== 0);

export default xs => {
  const filteredXs = filterOutZeros(xs);

  return (
    Math.abs(filteredXs.map(safeNormalize).reduce(add, 0)) === filteredXs.length
  );
};
