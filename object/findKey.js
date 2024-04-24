import findEntry from "./findEntry.js";

export default predicate => xs => {
  const key = findEntry(predicate)(xs)?.[0];

  return key;
};
