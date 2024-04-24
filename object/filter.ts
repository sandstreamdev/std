import entries from "./entries";
import type { GenericObject } from "./types";

export default <T>(f: (value: T, key: string, context: object) => boolean) =>
  (xs: GenericObject<T>): GenericObject<T> => {
    const result: GenericObject<T> = {};

    for (const [key, value] of entries(xs)) {
      if (f(value, key, xs)) {
        result[key] = value;
      }
    }

    return result;
  };
