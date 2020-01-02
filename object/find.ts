import findEntry from "./findEntry";

export default (
  predicate: (value: any, key: string, context: object) => boolean
) => (xs: object): any => {
  const [, value] = findEntry(predicate)(xs) || [];

  return value;
};
