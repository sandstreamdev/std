export default (count: number): ((xs: any[]) => any[]) => (xs: any[]): any[] =>
xs.slice(0, count);
