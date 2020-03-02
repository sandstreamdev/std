import entries from "./entries";

export default (f: (value: any, key: string, context: object) => boolean) => (
  xs: object
): boolean => entries(xs).some(([key, value]) => f(value, key, xs));
