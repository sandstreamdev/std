import entries from "./entries.js";

export default predicate => xs => {
  const [, value] =
    entries(xs).find(([key, value]) => predicate(value, key, xs)) || [];

  return value;
};
