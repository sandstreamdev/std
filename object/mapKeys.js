import entries from "./entries";
import fromEntries from "./fromEntries";

export default f => xs =>
  fromEntries(entries(xs).map(([key, value]) => [f(value, key, xs), value]));
