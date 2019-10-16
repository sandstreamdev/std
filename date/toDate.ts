export default date => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return [
    `${year}`.padStart(4, "0"),
    `${month}`.padStart(2, "0"),
    `${day}`.padStart(2, "0")
  ].join("-");
};
