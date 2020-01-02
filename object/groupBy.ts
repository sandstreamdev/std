export default (selector: (x: any) => string) => (xs: any[]): object =>
  xs.reduce((acc, x) => {
    const key = selector(x);

    return { ...acc, [key]: [...(acc[key] || []), x] };
  }, {});
