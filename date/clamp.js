export default (min, max) => date => {
  const clamped = new Date(
    Math.min(max.valueOf(), Math.max(min.valueOf(), date.valueOf()))
  );
  return clamped;
};
