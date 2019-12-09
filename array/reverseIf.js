import reverse from "./reverse.js";

export default predicate => xs => (predicate ? reverse(xs) : xs);
