export default (f: (value: any, index: number, context: any[]) => boolean) => (
  xs: any[]
) => {
  let i = 0;
  let j = 0;

  while (i < xs.length) {
    const value = xs[i];

    if (f(value, i, xs)) {
      xs[j++] = value;
    }

    i++;
  }

  xs.length = j;

  return xs;
};
