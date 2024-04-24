import entries from "./entries";
import type { GenericObject } from "./types";

export default <T>(
    predicate: (value: T, key: string, context: GenericObject<T>) => boolean
  ) =>
  (xs: GenericObject<T>): [string, T] | undefined =>
    entries(xs).find(([key, value]) => predicate(value, key, xs));
