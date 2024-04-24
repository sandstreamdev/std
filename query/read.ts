type Result = { [index: string]: string };

export default (source: string): Result => {
  const result: Result = {};

  const urlSearchParams = new URLSearchParams(source);

  for (const [key, value] of urlSearchParams.entries()) {
    result[key] = value;
  }

  return result;
};
