export default date => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return [
    toString(year).padStart(4, "0"),
    toString(month).padStart(2, "0"),
    toString(day).padStart(2, "0")
  ].join("-");
};
