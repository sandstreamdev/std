export default (equals: (x: any, y: any) => boolean) => (
  f: (...xs: any[]) => any
) => {
  let memoized: any = undefined;
  let memoizedArgs: any[] | undefined = undefined;

  return (...args: any[]) => {
    if (memoized && equals(args, memoizedArgs)) {
      return memoized;
    }

    memoized = f(...args);
    memoizedArgs = args;

    return memoized;
  };
};
