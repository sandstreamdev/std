import add from "./add.js";
import sign from "./sign.js";
const filterOutZeros = xs => xs.filter(_ => _ !== 0);
export default xs => {
  const filteredXs = filterOutZeros(xs);
  return Math.abs(filteredXs.map(sign).reduce(add, 0)) === filteredXs.length;
};
