export default index => xs => {
  if (index >= xs.length || index < 0) {
    return xs;
  }

  const ys = [...xs];
  ys.splice(index, 1);

  return ys;
};
