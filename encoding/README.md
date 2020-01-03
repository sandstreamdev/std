# base64url

Provides a way to encode strings and bytes from and into Base64URL.

## Type signature

<!-- prettier-ignore-start -->
```typescript
{
  decode: (text: string, context?: DecodeContext | undefined) => string;
  decodeBytes: (
    text: string,
    context?:
      | {
          atob: (byteString: string) => string;
          TextDecoder: new (encoding: string) => {
            decode: (input?: Uint8Array | undefined) => string;
          };
        }
      | undefined
  ) => number[];
  encode: (
    text: string,
    context?:
      | {
          btoa: (byteString: string) => string;
          TextEncoder: new () => {
            encode: (input?: string | undefined) => Uint8Array;
          };
        }
      | undefined
  ) => string;
  encodeBytes: (bytes: number[], context?: EncodeContext | undefined) => string;
  fromByteString: (byteString: string) => number[];
  toByteString: (bytes: number[]) => string;
}
```
<!-- prettier-ignore-end -->
