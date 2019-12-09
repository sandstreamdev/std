export default (
width: number,
height: number
): ((x: number, y: number) => boolean) => (x: number, y: number): boolean =>
x >= 0 && x <= width && y >= 0 && y <= height;
