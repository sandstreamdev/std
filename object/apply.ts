import entries from "./entries";
import fromEntries from "./fromEntries";
import type { GenericObject } from "./types";

export default <T>(fs: { [index: string]: (...xs: T[]) => T }) =>
  (...xs: T[]): GenericObject<T> =>
    fromEntries(entries(fs).map(([key, value]) => [key, value(...xs)]));
