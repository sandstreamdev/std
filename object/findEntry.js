import entries from "./entries.js";

export default predicate => xs =>
  entries(xs).find(([key, value]) => predicate(value, key, xs));
