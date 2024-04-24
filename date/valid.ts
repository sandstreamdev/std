export default (date?: unknown): boolean =>
  date ? date instanceof Date && !Number.isNaN(date.valueOf()) : false;
