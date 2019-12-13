import shuffleInPlace from "./shuffleInPlace";

export default (xs: any, random?: () => number) =>
  shuffleInPlace([...xs], random);
