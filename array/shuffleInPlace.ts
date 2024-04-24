export default <T>(xs: T[], random = Math.random): T[] => {
  for (let i = 0; i < xs.length; i++) {
    const j = Math.floor(random() * (i + 1));

    [xs[i], xs[j]] = [xs[j], xs[i]];
  }

  return xs;
};
