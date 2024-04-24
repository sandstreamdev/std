import findEntry from "./findEntry";
import type { GenericObject } from "./types";

export default <T>(
    predicate: (value: T, key: string, context: object) => boolean
  ) =>
  (xs: GenericObject<T>): string | undefined => {
    const key = findEntry(predicate)(xs)?.[0];

    return key;
  };
