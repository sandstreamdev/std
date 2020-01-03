import fromSeconds from "./fromSeconds.js";

const SECOND = fromSeconds(1);

export default date => new Date(date.valueOf() - SECOND);
