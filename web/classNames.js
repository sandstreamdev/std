import entries from "../object/entries";
import isString from "../is/string";

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
