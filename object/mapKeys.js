import entries from "./entries.js";
import fromEntries from "./fromEntries.js";

export default f => xs =>
fromEntries(entries(xs).map(([key, value]) => [f(value, key, xs), value]));
