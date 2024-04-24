import flatMap from "../array/flatMap";
import entries from "./entries";
import type { GenericObject } from "./types";

export default <T, TResult>(
    f: (value: T, key: string, context: GenericObject<T>) => TResult[]
  ) =>
  (xs: GenericObject<T>): TResult[] =>
    flatMap<[string, T], TResult>(input => {
      const keyValuePair = input;
      const [key, value] = keyValuePair;

      return f(value, key, xs);
    })(entries(xs));
