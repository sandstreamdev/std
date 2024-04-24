export default <T, TResult>(...fs: ((x: T) => T)[]) =>
  (x: T) =>
    fs.reduceRight((x, f) => f(x), x);
