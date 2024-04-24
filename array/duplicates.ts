export default <T>(xs: T[]): T[] =>
  xs.filter((value, index, self) => self.indexOf(value) !== index);
