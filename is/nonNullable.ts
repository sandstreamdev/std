export default <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null;
