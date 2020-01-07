import flatMap from "../array/flatMap";
import entries from "./entries";

export default (f: (value: any, key: string, context: object) => boolean) => (
  xs: object
): any[] => flatMap(([key, value]) => f(value, key, xs))(entries(xs));
