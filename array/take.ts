export default (n: number): ((xs: any[]) => any[]) => (xs: any[]): any[] =>
  xs.slice(0, n);
