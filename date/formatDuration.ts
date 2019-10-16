import fromHours from "./fromHours";
import fromMinutes from "./fromMinutes";
import toHours from "./toHours";
import toMinutes from "./toMinutes";
import toSeconds from "./toSeconds";
import displayTime from "./displayTime";

export default (duration, showSeconds = false) => {
  const hours = Math.floor(toHours(duration));
  const minutes = Math.floor(toMinutes(duration - fromHours(hours)));

  const seconds = Math.floor(
    toSeconds(duration - fromHours(hours) - fromMinutes(minutes))
  );

  return displayTime([hours, minutes, seconds], showSeconds);
};
