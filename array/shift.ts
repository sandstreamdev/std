export default (count: number) => (xs: any[]) =>
  xs.map(
    (_, index) => xs[(index + (count % xs.length) + xs.length) % xs.length]
  );
