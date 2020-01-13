export default (f: (x: any) => any) => (xs: any[]) => [
  ...new Map(xs.map(x => [f(x), x])).values()
];
