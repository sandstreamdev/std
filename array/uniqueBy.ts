export default (selector: (x: any) => any) => (xs: any[]) => [
  ...new Map(xs.map(x => [selector(x), x])).values()
];
