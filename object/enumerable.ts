export default (...xs: string[]): object =>
  xs.reduce((acc, curr) => ({ ...acc, [curr]: curr }), {});
