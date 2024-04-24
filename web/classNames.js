import entries from "../object/entries.js";
const booleanKeys = xs =>
  entries(xs)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key);
export default (...xs) => {
  const names = [];
  for (const x of xs) {
    if (!x) {
      continue;
    }
    if (typeof x === "object") {
      for (const booleanKey of booleanKeys(x)) {
        names.push(booleanKey);
      }
    }
    names.push(`${x}`);
  }
  return names.join(" ");
};
