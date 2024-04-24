import entries from "../object/entries.js";
export default (xs = {}) =>
  entries(xs)
    .filter(([, value]) => Boolean(value) || value === 0)
    .map(pair => pair.map(value => encodeURIComponent(`${value}`)))
    .map(([key, value]) => (xs[key] === true ? key : `${key}=${value}`))
    .join("&");
