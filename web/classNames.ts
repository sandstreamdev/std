import entries from "../object/entries";
import type { GenericObject } from "../object/types";

const booleanKeys = <T>(xs: GenericObject<T>) =>
  entries(xs)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key);

export default (...xs: unknown[]) => {
  const names: string[] = [];

  for (const x of xs) {
    if (!x) {
      continue;
    }

    if (typeof x === "object") {
      for (const booleanKey of booleanKeys(x as GenericObject<unknown>)) {
        names.push(booleanKey);
      }
    }

    names.push(`${x}`);
  }

  return names.join(" ");
};
