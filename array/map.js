export default (...fs) => {
  const f = x => fs.reduce((x, f) => f(x), x);
  return xs => xs.map(f);
};
