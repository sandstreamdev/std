import sort from "../array/sort.js";
import subtract from "./subtract.js";

export default xs => {
  const sorted = sort(subtract)(xs);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
};
