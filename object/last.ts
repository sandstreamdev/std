import type { GenericObject } from "./types";

export default <T>(xs: GenericObject<T>): T | undefined =>
  Object.values(xs).at(-1);
