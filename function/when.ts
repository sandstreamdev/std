export default (predicate: (...xs: any[]) => boolean) => (
  action: (...xs: any[]) => any
) => (...args: any[]) => {
  if (predicate(...args)) {
    return action(...args);
  }
};
