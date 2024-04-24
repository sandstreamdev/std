export default date => {
  const [m, a, y] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getFullYear()
  ].map(_ => _ + "");
  return [y.padStart(4, "0"), m.padStart(2, "0"), a.padStart(2, "0")].join("-");
};
