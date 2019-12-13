export default (
  predicate: (value: any, index: number, context: any[]) => boolean,
  fallback?: any
) => (xs: any[]) => {
  const targetIndex = xs.findIndex(predicate);

  return targetIndex !== -1 ? xs[targetIndex] : fallback;
};
