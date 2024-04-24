import type { GenericObject } from "./types";

export default <T>(xs: GenericObject<T>): number => Object.keys(xs).length;
