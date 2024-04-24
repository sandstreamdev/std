export default (x?: unknown): boolean => (x ? Array.isArray(x) : false);
