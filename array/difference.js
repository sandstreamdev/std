export default (xs, ys) => {
  const zs = new Set(ys);

  return xs.filter(x => !zs.has(x));
};
