import fromHours from "./fromHours.js";
import fromMinutes from "./fromMinutes.js";
import toHours from "./toHours.js";
import toMinutes from "./toMinutes.js";
import toSeconds from "./toSeconds.js";
import displayTime from "./displayTime.js";

export default (duration, showSeconds = false) => {
const hours = Math.floor(toHours(duration));
const minutes = Math.floor(toMinutes(duration - fromHours(hours)));

const seconds = Math.floor(
toSeconds(duration - fromHours(hours) - fromMinutes(minutes))
);

return displayTime([hours, minutes, seconds], showSeconds);
};
