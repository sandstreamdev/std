export default (index: number) => (xs: any[]) => {
  if (index >= xs.length || index < 0) {
    return xs;
  }

  const ys = [...xs];
  ys.splice(index, 1);

  return ys;
};
