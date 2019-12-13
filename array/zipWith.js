const pair = (x, y) => [x, y];

export default (f = pair) => (xs, ys) => xs.map((x, index) => f(x, ys[index]));
