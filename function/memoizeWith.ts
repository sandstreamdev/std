export default <T>(equals: (x: T[], y: T[]) => boolean) =>
  <TResult>(f: (...xs: T[]) => TResult) => {
    let memoized: TResult | undefined = undefined;
    let memoizedArgs: T[] | undefined = undefined;

    return (...args: T[]): TResult => {
      if (memoized && memoizedArgs && equals(args, memoizedArgs)) {
        return memoized;
      }

      memoized = f(...args);
      memoizedArgs = args;

      return memoized;
    };
  };
