import monthNames from "./monthNames";

export default monthIndex => monthNames[monthIndex % 12];
