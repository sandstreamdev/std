export default (predicate, fallback) => xs => {
  const target = xs.find(predicate);
  return target !== undefined ? target : fallback;
};
