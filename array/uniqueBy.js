export default f => xs => [...new Map(xs.map(x => [f(x), x])).values()];
