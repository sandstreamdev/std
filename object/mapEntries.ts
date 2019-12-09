import entries from "./entries";

export default (f: (value: any, key: string, context: object) => any) => (
xs: object
): [string, any][] =>
entries(xs).map(([key, value]) => [key, f(value, key, xs)]);
