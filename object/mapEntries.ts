import entries from "./entries";
import type { GenericObject } from "./types";

export default <T, TResult>(
    f: (value: T, key: string, context: object) => TResult
  ) =>
  (xs: GenericObject<T>): [string, TResult][] =>
    entries(xs).map(([key, value]) => [key, f(value, key, xs)]);
