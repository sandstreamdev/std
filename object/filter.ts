import entries from "./entries";
import fromEntries from "./fromEntries";

export default (f: (value: any, key: string, context: object) => boolean) => (
  xs: object
): object =>
  fromEntries(entries(xs).filter(([key, value]) => f(value, key, xs)));
