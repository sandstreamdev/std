export default f => xs =>
  xs.reduce((acc, curr) => (f(curr) > f(acc) ? curr : acc));
