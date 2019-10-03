export default n => source =>
  Array(n)
    .fill()
    .map((_, i) => source[i]);
