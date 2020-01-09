export default byteString => [...byteString].map(_ => _.codePointAt(0) || 0);
