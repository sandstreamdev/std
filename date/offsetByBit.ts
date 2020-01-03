import fromSeconds from "./fromSeconds";

const SECOND = fromSeconds(1);

export default (date: Date | number) => new Date(date.valueOf() - SECOND);
