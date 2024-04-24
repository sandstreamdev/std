import entries from "./entries";
import type { GenericObject } from "./types";

export default <T>(f: (value: T, key: string, context: object) => boolean) =>
  (xs: GenericObject<T>): boolean =>
    entries(xs).every(([key, value]) => f(value, key, xs));
