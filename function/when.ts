export default (predicate: (...xs: unknown[]) => boolean) =>
  (action: (...xs: unknown[]) => unknown) =>
  (...args: unknown[]) => {
    if (predicate(...args)) {
      return action(...args);
    }
  };
