import fromEntries from "./fromEntries";
import mapEntries from "./mapEntries";
import type { GenericObject } from "./types";

export default <T, TResult>(
    f: (value: T, key: string, context: object) => TResult
  ) =>
  (xs: GenericObject<T>): GenericObject<TResult> =>
    fromEntries(mapEntries(f)(xs));
