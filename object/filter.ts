import entries from "./entries";
import fromEntries from "./fromEntries";

export default f => xs =>
  fromEntries(entries(xs).filter(([key, value]) => f(value, key, xs)));
