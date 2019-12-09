export default (text = "") => {
  const [hoursString, minutesString] = text.split(":");
  const hours = parseInt(hoursString || "0", 10);
  const minutes = parseInt(minutesString || "0", 10);

  return [hours, minutes];
};
