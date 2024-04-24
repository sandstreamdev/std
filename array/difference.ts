export default <T>(xs: T[], ys: T[]): T[] => {
  const zs = new Set(ys);

  return xs.filter(x => !zs.has(x));
};
