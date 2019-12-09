export default (...xs) =>
  xs.reduce((acc, curr) => ({ ...acc, [curr]: curr }), {});
