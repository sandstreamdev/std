export default selector => xs => [
  ...new Map(xs.map(x => [selector(x), x])).values()
];
