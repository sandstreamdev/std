export default (index: number) =>
  <T>(item: T) =>
  ([...xs]: T[]): T[] => {
    xs.splice(index, 0, item);

    return xs;
  };
