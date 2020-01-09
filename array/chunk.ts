import range from "./range";

export default (count: number) => (xs: any[]) => {
  if (count > 0) {
    const chunks = Math.ceil(xs.length / count);

    return chunks > 0
      ? range(chunks).map(i => xs.slice(i * count, (i + 1) * count))
      : xs;
  }

  return [];
};
