import type { GenericObject } from "./types";

type ObjectEntries = <T>(xs: GenericObject<T>) => [string, T][];

export default Object.entries as ObjectEntries;
