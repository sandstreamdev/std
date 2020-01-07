import findEntry from "./findEntry";

export default (
  predicate: (value: any, key: string, context: object) => boolean
) => (xs: object): any => {
  const [key] = findEntry(predicate)(xs) || [];

  return key;
};
