import entries from "../object/entries";
import type { GenericObject } from "../object/types";

export default <T>(xs: GenericObject<T> = {}): string =>
  entries(xs)
    .filter(([, value]) => Boolean(value) || value === 0)
    .map(pair => pair.map(value => encodeURIComponent(`${value}`)))
    .map(([key, value]) => (xs[key] === true ? key : `${key}=${value}`))
    .join("&");
