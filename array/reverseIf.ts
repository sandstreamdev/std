import reverse from "./reverse";

export default (enabled: boolean) => (xs: any) => (enabled ? reverse(xs) : xs);
