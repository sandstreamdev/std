export default (text: string) => {
  if (!text) {
    return "";
  }

  const [first, ...rest] = text;

  return [first.toUpperCase(), ...rest].join("");
};
