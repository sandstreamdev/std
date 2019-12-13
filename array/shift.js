export default count => xs =>
  xs.map(
    (_, index) => xs[(index + (count % xs.length) + xs.length) % xs.length]
  );
