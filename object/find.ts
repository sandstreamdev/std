import entries from "./entries";

export default (
  predicate: (value: any, key: string, context: object) => boolean
) => (xs: object): any => {
  const [, value] =
    entries(xs).find(([key, value]) => predicate(value, key, xs)) || [];

  return value;
};
