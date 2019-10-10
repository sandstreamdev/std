import sort from "../array/sort.js";
import entries from "./entries.js";
import fromEntries from "./fromEntries.js";

export default f => xs =>
  fromEntries(sort(([, a], [, b]) => f(a, b))(entries(xs)));
