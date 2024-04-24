export default (count: number) =>
  <T>(value: T) =>
    Array<T>(count).fill(value);
