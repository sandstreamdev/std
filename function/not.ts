export default (f: (...xs: unknown[]) => unknown) =>
  (...args: unknown[]) =>
    !f(...args);
