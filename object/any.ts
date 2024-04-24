import length from "./length";
import type { GenericObject } from "./types";

export default <T>(xs?: GenericObject<T>): boolean =>
  xs ? length(xs) > 0 : false;
