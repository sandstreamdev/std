import entries from "./entries.js";

export default f => xs =>
entries(xs).map(([key, value]) => [key, f(value, key, xs)]);
