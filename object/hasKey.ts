export default (key: string) => (xs?: any) =>
  xs ? Object.prototype.hasOwnProperty.call(xs, key) : false;
