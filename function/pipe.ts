export default (...fs) => x => fs.reduce((x, f) => f(x), x);
