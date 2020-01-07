import findEntry from "./findEntry.js";

export default predicate => xs => {
  const [, value] = findEntry(predicate)(xs) || [];

  return value;
};
