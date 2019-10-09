import findEntry from "./findEntry.js";
export default predicate => xs => (findEntry(predicate)(xs) || [])[1];
