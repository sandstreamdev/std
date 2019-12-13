import entries from "../object/entries";
import isString from "../is/string";

const booleanKeys = (xs: object) =>
  entries(xs)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key);

export default (...xs: any[]) =>
  xs
    .filter(Boolean)
    .reduce((acc, curr) => {
      const names = isString(curr) ? [curr] : booleanKeys(curr);

      return [...acc, ...names];
    }, [])
    .join(" ");
