import reverse from "./reverse";

export default (enabled: boolean) =>
  <T>(xs: T[]): T[] =>
    enabled ? reverse(xs) : xs;
