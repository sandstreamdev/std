import findEntry from "./findEntry";
import type { GenericObject } from "./types";

export default <T>(
    predicate: (value: T, key: string, context: object) => boolean
  ) =>
  (xs: GenericObject<T>): T | undefined => {
    const value = findEntry(predicate)(xs)?.[1];

    return value;
  };
