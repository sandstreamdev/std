import fromSeconds from "./fromSeconds";

const SECOND = fromSeconds(1);

export default date => new Date(date - SECOND);
