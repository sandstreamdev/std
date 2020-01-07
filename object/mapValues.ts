import entries from "./entries";

export default (f: (value: any, key: string, context: object) => any) => (
  xs: object
): any[] => entries(xs).map(([key, value]) => f(value, key, xs));
