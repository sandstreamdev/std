export default <T>(xs: T[]): T[] => [...new Set<T>(xs)];
