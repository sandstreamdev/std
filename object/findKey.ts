import findEntry from "./findEntry";

export default predicate => xs => (findEntry(predicate)(xs) || [])[0];
