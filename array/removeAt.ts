export default (index: number) =>
  <T>(xs: T[]): T[] => {
    if (index >= xs.length || index < 0) {
      return xs;
    }

    const ys = [...xs];
    ys.splice(index, 1);

    return ys;
  };
