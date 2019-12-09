import monthNames from "./monthNames.js";

export default monthIndex => monthNames[monthIndex % 12];
