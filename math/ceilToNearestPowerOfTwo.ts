export default (x: number): number =>
  Math.pow(2, Math.ceil(Math.log(x) / Math.log(2)));
