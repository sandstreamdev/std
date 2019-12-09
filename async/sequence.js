export default async tasks => {
  const results = tasks.map(() => undefined);
  await tasks.reduce((chain, current, i) => {
    return chain.then(() =>
      current().then(x => {
        results[i] = x;

        return x;
      })
    );
  }, Promise.resolve());

  return results;
};
