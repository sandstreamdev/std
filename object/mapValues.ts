import entries from "./entries";
import type { GenericObject } from "./types";

export default <T, TResult>(
    f: (value: T, key: string, context: object) => TResult
  ) =>
  (xs: GenericObject<T>): TResult[] =>
    entries(xs).map(([key, value]) => f(value, key, xs));
