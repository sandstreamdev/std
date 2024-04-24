import shuffleInPlace from "./shuffleInPlace";

export default <T>(xs: T[], random?: () => number): T[] =>
  shuffleInPlace([...xs], random);
