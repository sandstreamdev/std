import fromEntries from "./fromEntries";
import mapEntries from "./mapEntries";

export default f => xs => fromEntries(mapEntries(f)(xs));
