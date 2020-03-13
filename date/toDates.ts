export default (xs: (string | number | Date)[]): Date[] =>
  xs.map(x => new Date(x));
