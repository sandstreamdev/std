export default xs => {
  for (let i = 0; i < xs.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [xs[i], xs[j]] = [xs[j], xs[i]];
  }

  return xs;
};
