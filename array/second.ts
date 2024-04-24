export default <T>(xs: T[]): T | undefined => {
  const [, x] = xs;

  return x;
};
