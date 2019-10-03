import entries from "./entries";

export default f => xs =>
  entries(xs).map(([key, value]) => [key, f(value, key, xs)]);
