import fromEntries from "./fromEntries";
import mapEntries from "./mapEntries";

export default (f: (value: any, key: string, context: object) => boolean) => (
  xs: object
): object => fromEntries(mapEntries(f)(xs));
