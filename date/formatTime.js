import displayTime from "./displayTime.js";

export default (date, showSeconds = false) => {
  const [hours, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];

  return displayTime([hours, minutes, seconds], showSeconds);
};
