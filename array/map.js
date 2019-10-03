export default (...fs) => {
  const f = x => fs.reduce((x, f) => f(x), x);
  return x => x.map(f);
};
