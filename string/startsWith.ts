export default (prefix: string) => (xs: string): boolean =>
  xs.indexOf(prefix) === 0;
