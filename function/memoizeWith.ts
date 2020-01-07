export default (equals: (x: any, y: any) => boolean) => (
  f: (...xs: any[]) => any
) => {
  let memoized = undefined;
  let memoizedArgs = undefined;

  return (...args) => {
    if (memoized && equals(args, memoizedArgs)) {
      return memoized;
    }

    memoized = f(...args);
    memoizedArgs = args;

    return memoized;
  };
};
