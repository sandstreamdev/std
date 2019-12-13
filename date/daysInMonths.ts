export default (leapYear): number[] => [
  31,
  leapYear ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
