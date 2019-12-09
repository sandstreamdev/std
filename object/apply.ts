import entries from "./entries";
import fromEntries from "./fromEntries";

export default (fs: { (...xs: any[]): any }[]) => (...xs: any[]) =>
  fromEntries(entries(fs).map(([key, value]) => [key, value(...xs)]));
