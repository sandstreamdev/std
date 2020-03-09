import take from "./take";

export default (xs: any[]): any[] => take(xs.length - 1)(xs);
