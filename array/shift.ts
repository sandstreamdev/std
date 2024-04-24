export default (count: number) =>
  <T>(xs: T[]): T[] =>
    xs.map(
      (_, index) => xs[(index + (count % xs.length) + xs.length) % xs.length]
    );
