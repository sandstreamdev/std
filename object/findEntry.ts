import entries from "./entries";

export default predicate => xs =>
entries(xs).find(([key, value]) => predicate(value, key, xs));
