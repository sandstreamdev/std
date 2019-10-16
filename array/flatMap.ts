export default f => xs => xs.reduce((ys, y) => ys.concat(f(y)), []);
