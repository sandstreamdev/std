export default (date?: any): boolean =>
  date ? date instanceof Date && !Number.isNaN(date.valueOf()) : false;
