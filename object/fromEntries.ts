export default Object.fromEntries ||
  (keyValuePairs =>
    keyValuePairs.reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    ));
