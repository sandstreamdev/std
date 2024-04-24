import entries from "./entries.js";
export default f => xs => {
  const result = {};
  for (const [key, value] of entries(xs)) {
    if (f(value, key, xs)) {
      result[key] = value;
    }
  }
  return result;
};
