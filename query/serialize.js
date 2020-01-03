import entries from "../object/entries.js";

export default (xs = {}) =>
  entries(xs)
    .filter(([, value]) => Boolean(value) || value === 0)
    .map(pair => pair.map(value => encodeURIComponent(value)))
    .reduce(
      (acc, [key, value]) => [
        ...acc,
        xs[key] === true ? key : `${key}=${value}`
      ],
      []
    )
    .join("&");
