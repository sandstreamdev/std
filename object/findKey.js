import findEntry from "./findEntry.js";

export default predicate => xs => {
  const [key] = findEntry(predicate)(xs) || [];

  return key;
};
