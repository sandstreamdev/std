export const implementation = entries => {
  const result = {};

  for (const [key, value] of entries) {
    result[key] = value;
  }

  return result;
};

export default entries =>
  Object.fromEntries ? Object.fromEntries(entries) : implementation(entries);
