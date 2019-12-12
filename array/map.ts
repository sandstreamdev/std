export default (...fs: { (x: any): any }[]) => {
  const f = (x: any) => fs.reduce((x, f) => f(x), x);

  return (xs: any) => xs.map(f);
};
