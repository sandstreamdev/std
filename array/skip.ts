export default (index: number): ((xs: any[]) => any[]) => (xs: any[]): any[] =>
  xs.slice(index, xs.length);
