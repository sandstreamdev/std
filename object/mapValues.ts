import entries from "./entries";

export default f => xs => entries(xs).map(([key, value]) => f(value, key, xs));
