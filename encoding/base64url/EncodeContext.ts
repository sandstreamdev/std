export interface EncodeContext {
  btoa: (byteString: string) => string;
  TextEncoder: new () => {
    encode: { (input?: string): Uint8Array };
  };
}
