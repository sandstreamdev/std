export default (min: Date | number, max: Date | number) => (
  dateStringOrDate: string | number | Date
): Date => {
  const date = new Date(dateStringOrDate);

  const clamped = new Date(
    Math.min(max.valueOf(), Math.max(min.valueOf(), date.valueOf()))
  );

  return clamped;
};
