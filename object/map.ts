import fromEntries from "./fromEntries";
import mapEntries from "./mapEntries";

export default (f: (value: any, key: string, context: object) => any) => (
  xs: object
): object => fromEntries(mapEntries(f)(xs));
