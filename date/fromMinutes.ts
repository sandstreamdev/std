import fromSeconds from "./fromSeconds";

export default (minutes: number): number => fromSeconds(minutes * 60);
