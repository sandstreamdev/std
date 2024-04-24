export default (f, wait) => {
  let timeout = undefined;
  return (...args) => {
    const resolve = () => {
      timeout = undefined;
      f(...args);
    };
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(resolve, wait);
  };
};
