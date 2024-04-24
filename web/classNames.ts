export default (...xs: unknown[]) => {
  const names: string[] = [];

  for (const x of xs) {
    if (!x) {
    } else if (typeof x === "string") {
      const trimmedValue = x.trim();

      if (trimmedValue) {
        names.push(trimmedValue);
      }
    } else if (Array.isArray(x)) {
      for (const className of x) {
        if (typeof className === "string") {
          const trimmedValue = className.trim();

          if (trimmedValue) {
            names.push(trimmedValue);
          }
        }
      }
    } else if (typeof x === "object") {
      for (const [key, value] of Object.entries(x)) {
        if (value) {
          names.push(key);
        }
      }
    }
  }

  return names.join(" ");
};
