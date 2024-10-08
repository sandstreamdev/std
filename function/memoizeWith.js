export default equals => f => {
  let memoized = undefined;
  let memoizedArgs = undefined;

  return (...args) => {
    if (memoized && memoizedArgs && equals(args, memoizedArgs)) {
      return memoized;
    }

    memoized = f(...args);
    memoizedArgs = args;

    return memoized;
  };
};
