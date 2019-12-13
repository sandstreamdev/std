export default (xs: any[], ys: any[]) => {
  const zs = new Set(ys);

  return xs.filter(x => !zs.has(x));
};
