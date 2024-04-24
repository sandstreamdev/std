export default <T>(xs: T[]): T | undefined => xs[Math.floor(xs.length / 2)];
