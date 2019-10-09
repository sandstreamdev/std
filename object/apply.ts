import entries from "./entries";
import fromEntries from "./fromEntries";

export default fs => (...xs) =>
  fromEntries(entries(fs).map(([key, value]) => [key, value(...xs)]));
