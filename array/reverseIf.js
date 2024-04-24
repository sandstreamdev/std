import reverse from "./reverse.js";
export default enabled => xs => (enabled ? reverse(xs) : xs);
