export default <T>(...fs: ((x: T) => T)[]) => {
  const f = (x: T) => fs.reduce((x, f) => f(x), x);

  return (xs: T[]) => xs.map(f);
};
