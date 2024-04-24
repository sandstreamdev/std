export default <T>(xs: T[], ys: T[]): T[] =>
  xs.filter(value => ys.includes(value));
