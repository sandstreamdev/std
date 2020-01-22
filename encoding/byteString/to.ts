export default (bytes: number[]) =>
  bytes.map(_ => String.fromCharCode(_)).join("");
