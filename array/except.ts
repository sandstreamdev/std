export default <T>(y: T) =>
  (xs: T[]) =>
    xs.filter(x => x !== y);
