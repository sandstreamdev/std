export default (...xs) => {
  const names = [];

  for (const x of xs) {
    if (!x) {
      continue;
    }

    if (typeof x === "object") {
      for (const [key, value] of Object.entries(x)) {
        if (value) {
          names.push(key);
        }
      }

      continue;
    }

    names.push(`${x}`);
  }

  return names.join(" ");
};
