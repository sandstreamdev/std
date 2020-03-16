import displayTime from "./displayTime";

export default (date: Date, showSeconds = false) => {
  const [hours, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];

  return displayTime([hours, minutes, seconds], showSeconds);
};
