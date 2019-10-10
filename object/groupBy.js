export default selector => xs =>
  xs.reduce((acc, x) => {
    const key = selector(x);

    return { ...acc, [key]: [...(acc[key] || []), x] };
  }, {});
