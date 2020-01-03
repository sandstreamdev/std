import sort from "../array/sort";
import entries from "./entries";
import fromEntries from "./fromEntries";

export default (f: (a: any, b: any) => number) => (xs: object): object =>
  fromEntries(sort(([, a], [, b]) => f(a, b))(entries(xs)));
