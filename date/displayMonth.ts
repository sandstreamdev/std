import monthNames from "./monthNames";

export default (monthIndex: number) => monthNames[monthIndex % 12];
