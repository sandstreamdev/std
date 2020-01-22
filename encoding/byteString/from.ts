export default (byteString: string): number[] =>
  [...byteString].map(_ => _.codePointAt(0) || 0);
