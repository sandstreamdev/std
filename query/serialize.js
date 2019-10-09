import entries from "../object/entries.js";
export default (xs = {}) =>
  entries(xs)
    .filter(([, value]) => Boolean(value) || value === 0)
    .map(pair => pair.map(encodeURIComponent))
    .reduce((acc, [key, value]) => [...acc, `${key}=${value}`], [])
    .join("&");
