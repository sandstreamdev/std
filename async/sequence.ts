export default async (tasks: { (): Promise<any> }[]) => {
  const results = tasks.map(() => undefined);

  await tasks.reduce(async (chain, current, i) => {
    await chain;

    const x = await current();

    results[i] = x;

    return x;
  }, Promise.resolve());

  return results;
};
