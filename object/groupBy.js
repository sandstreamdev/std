export default selector => xs => {
  const result = {};
  for (const x of xs) {
    const key = selector(x);
    let slot = result[key];
    if (!slot) {
      slot = [];
      result[key] = slot;
    }
    slot.push(x);
  }
  return result;
};
