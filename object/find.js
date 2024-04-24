import findEntry from "./findEntry.js";

export default predicate => xs => {
  const value = findEntry(predicate)(xs)?.[1];

  return value;
};
