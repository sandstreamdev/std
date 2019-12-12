const add = (a: number, b: number) => a + b;

export default (xs: number[]): number => xs.reduce(add, 0);
