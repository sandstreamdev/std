export default (year: number): boolean =>
  new Date(year, 1, 29).getMonth() === 1;
