export default (...fs: { (x: any): any }[]) => (x: any) =>
  fs.reduceRight((x, f) => f(x), x);
