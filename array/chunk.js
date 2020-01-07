export default size => xs =>
  xs.reduce(
    (acc, _, index) =>
      index % size ? acc : [...acc, xs.slice(index, index + size)],
    []
  );
