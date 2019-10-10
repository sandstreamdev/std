export default (min, max) => dateStringOrDate => {
  const date = new Date(dateStringOrDate);

  const clamped = new Date(
    Math.min(max.valueOf(), Math.max(min.valueOf(), date.valueOf()))
  );

  return clamped;
};
