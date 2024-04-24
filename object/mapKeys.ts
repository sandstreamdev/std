import entries from "./entries";
import fromEntries from "./fromEntries";
import type { GenericObject } from "./types";

export default <T>(f: (value: T, key: string, context: object) => string) =>
  (xs: GenericObject<T>): GenericObject<T> =>
    fromEntries(entries(xs).map(([key, value]) => [f(value, key, xs), value]));
