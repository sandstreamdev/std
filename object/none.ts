import any from "./any";
import type { GenericObject } from "./types";

export default <T>(xs?: GenericObject<T>): boolean =>
  xs && typeof xs === "object" ? !any(xs) : true;
