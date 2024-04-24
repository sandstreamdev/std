export default source => {
  const result = {};
  const urlSearchParams = new URLSearchParams(source);

  for (const [key, value] of urlSearchParams.entries()) {
    result[key] = value;
  }

  return result;
};
