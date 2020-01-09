export default (...xs: any[]) => {
  const [head, ...tail] = xs;

  return head.map((value, index) =>
    tail.reduce((x, xs) => [...x, xs[index]], [value])
  );
};
