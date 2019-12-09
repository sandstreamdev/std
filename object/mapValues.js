import entries from "./entries.js";

export default f => xs => entries(xs).map(([key, value]) => f(value, key, xs));
