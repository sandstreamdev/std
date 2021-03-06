import flatMap from "../array/flatMap";
import entries from "./entries";

export default (f: (value: any, key: string, context: object) => any) => (
  xs: object
): any[] => flatMap(([key, value]) => f(value, key, xs))(entries(xs));
