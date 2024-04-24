export default <T>(...fs: ((x: T) => T)[]) =>
  (x: T): T =>
    fs.reduce((x, f) => f(x), x);
