import entries from "../object/entries";

export default (xs = {}) =>
  entries(xs)
    .filter(([, value]) => Boolean(value) || value === 0)
    .map(pair => pair.map(encodeURIComponent))
    .reduce(
      (acc, [key, value]) => [
        ...acc,
        xs[key] === true ? key : `${key}=${value}`
      ],
      []
    )
    .join("&");
