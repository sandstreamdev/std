import reverse from "./reverse";

export default predicate => xs => (predicate ? reverse(xs) : xs);
