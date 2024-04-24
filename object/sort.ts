import sort from "../array/sort";
import entries from "./entries";
import fromEntries from "./fromEntries";
import type { GenericObject } from "./types";

export default <T>(f: (a: T, b: T) => number) =>
  (xs: GenericObject<T>): GenericObject<T> => {
    const keyValuePairs = entries(xs);

    const sortedKeyValuePairs = sort(([, a]: [string, T], [, b]: [string, T]) =>
      f(a, b)
    )(keyValuePairs);

    const result = fromEntries(sortedKeyValuePairs);

    return result;
  };
