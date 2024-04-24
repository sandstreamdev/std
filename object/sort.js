import sort from "../array/sort.js";
import entries from "./entries.js";
import fromEntries from "./fromEntries.js";
export default f => xs => {
  const keyValuePairs = entries(xs);
  const sortedKeyValuePairs = sort(([, a], [, b]) => f(a, b))(keyValuePairs);
  const result = fromEntries(sortedKeyValuePairs);
  return result;
};
