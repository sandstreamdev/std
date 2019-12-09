export default xs => Object.keys(xs[0]).map(key => [xs.map(x => x[key]), key]);
