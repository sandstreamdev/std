import entries from "./entries.js";
export default f => xs =>
  entries(xs).every(([key, value]) => f(value, key, xs));
