export default (key: string) =>
  (xs?: unknown): boolean =>
    xs ? Object.prototype.hasOwnProperty.call(xs, key) : false;
