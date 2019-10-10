import entries from "../object/entries.js";
import isString from "../is/string.js";

const booleanKeys = x =>
  entries(x)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key);

export default (...xs) =>
  xs
    .filter(Boolean)
    .reduce((acc, curr) => {
      const names = isString(curr) ? [curr] : booleanKeys(curr);

      return [...acc, ...names];
    }, [])
    .join(" ");
