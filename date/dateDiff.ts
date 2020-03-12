export default (
  a: string | number | Date,
  b: string | number | Date
): number => {
  const d1 = new Date(a);
  const d2 = new Date(b);

  return d1.valueOf() - d2.valueOf();
};
