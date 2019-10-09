import shift from "./shift.js";
export default array => angle => {
  const margin = Math.PI / 8;
  const angleWithMargin = angle + margin;
  const unit = Math.PI / 4;
  const ratio = angleWithMargin / unit;
  const offset = Math.floor(ratio);
  return shift(offset)(array);
};
