export default f => (xs, ys) => xs.map((x, index) => f(x, ys[index]));
