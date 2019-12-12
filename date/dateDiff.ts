export default (a: string | Date, b: string | Date): number => {
  const d1 = new Date(a);
  const d2 = new Date(b);

  return d1.valueOf() - d2.valueOf();
};
