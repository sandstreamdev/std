export default f => xs =>
  xs.reduce(
    (ys, value, index, context) => ys.concat(f(value, index, context)),
    []
  );
