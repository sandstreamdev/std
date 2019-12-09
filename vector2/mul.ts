export default (matrix, point) => [
matrix.a * point[0] + matrix.c * point[1] + matrix.e,
matrix.b * point[0] + matrix.d * point[1] + matrix.f
];
