export default n => xs =>
xs.map((_, index) => xs[(index + (n % xs.length) + xs.length) % xs.length]);
