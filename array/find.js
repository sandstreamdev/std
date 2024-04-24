export default (predicate, fallback) => xs => {
  const targetIndex = xs.findIndex(predicate);
  return targetIndex !== -1 ? xs[targetIndex] : fallback;
};
