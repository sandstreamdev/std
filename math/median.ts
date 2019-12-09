import sort from "../array/sort";
import subtract from "./subtract";

export default (xs: number[]): number => {
const sorted: number[] = sort(subtract)(xs);
const middle: number = Math.floor(sorted.length / 2);

if (sorted.length % 2 === 0) {
return (sorted[middle - 1] + sorted[middle]) / 2;
}

return sorted[middle];
};
