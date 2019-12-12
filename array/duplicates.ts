export default (xs: any[]) =>
  xs.filter((value, index, self) => self.indexOf(value) !== index);
