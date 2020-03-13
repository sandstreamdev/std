import endOfDay from "./endOfDay";
import startOfDay from "./startOfDay";

export default (date: Date) => [startOfDay(date), endOfDay(date)];
