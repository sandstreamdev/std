export default (f?: (a: any, b: any) => number) => (xs: any[]) =>
  [...xs].sort(f);
