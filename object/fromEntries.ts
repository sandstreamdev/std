const fromEntries = (keyValuePairs: [string, any][]): object =>
  keyValuePairs.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

export default Object.fromEntries || fromEntries;
