export interface DecodeContext {
  atob: (byteString: string) => string;
  TextDecoder: new (encoding: string) => {
    decode: (input?: Uint8Array) => string;
  };
}
