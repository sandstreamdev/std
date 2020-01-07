import entries from "./entries";
import fromEntries from "./fromEntries";

export default (f: (value: any, key: string, context: object) => any) => (
  xs: object
): object =>
  fromEntries(entries(xs).map(([key, value]) => [f(value, key, xs), value]));
