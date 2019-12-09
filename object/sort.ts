import sort from "../array/sort";
import entries from "./entries";
import fromEntries from "./fromEntries";

export default f => xs =>
  fromEntries(sort(([, a], [, b]) => f(a, b))(entries(xs)));
