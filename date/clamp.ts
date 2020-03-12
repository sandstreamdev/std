export default (min: Date, max: Date) => (date: Date): Date => {
  const clamped = new Date(
    Math.min(max.valueOf(), Math.max(min.valueOf(), date.valueOf()))
  );

  return clamped;
};
