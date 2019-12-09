export default xs =>
  xs.filter((value, index, self) => self.indexOf(value) !== index);
