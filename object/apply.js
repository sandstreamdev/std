import entries from "./entries.js";
import fromEntries from "./fromEntries.js";

export default fs => (...xs) =>
fromEntries(entries(fs).map(([key, value]) => [key, value(...xs)]));
