import entries from "./entries.js";

export default f => xs => entries(xs).some(([key, value]) => f(value, key, xs));
