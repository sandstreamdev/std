export default (...fs: { (x: any): any }[]) => (x: any) =>
  fs.reduce((x, f) => f(x), x);
