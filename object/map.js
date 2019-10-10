import fromEntries from "./fromEntries.js";
import mapEntries from "./mapEntries.js";

export default f => xs => fromEntries(mapEntries(f)(xs));
