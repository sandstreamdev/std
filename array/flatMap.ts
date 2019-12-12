export default (f: (value: any, index: number, context: any[]) => any) => (
  xs: any[]
) =>
  xs.reduce(
    (ys, value, index, context) => ys.concat(f(value, index, context)),
    []
  );
