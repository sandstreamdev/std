type Result<T> = { [index: string]: T };

export const implementation = <T>(entries: [string, T][]): Result<T> => {
  const result: Result<T> = {};

  for (const [key, value] of entries) {
    result[key] = value;
  }

  return result;
};

export default <T>(entries: [string, T][]): Result<T> =>
  Object.fromEntries ? Object.fromEntries(entries) : implementation(entries);
