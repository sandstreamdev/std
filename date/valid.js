export default date =>
  date ? date instanceof Date && !Number.isNaN(date.valueOf()) : false;
