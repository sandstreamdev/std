type Task<T> = () => Promise<T>;

export default async <T>(tasks: Task<T>[]) => {
  const results = [];

  for (const task of tasks) {
    const result = await task();

    results.push(result);
  }

  return results;
};
