# base64url

Provides a way to encode strings and bytes from and into Base64URL.

## Type signature

<!-- prettier-ignore-start -->
```typescript
{
  decode: (text: string) => string;
  decodeBytes: (text: string) => number[];
  encode: (text: string) => string;
  encodeBytes: (bytes: number[]) => string;
  fromByteString: (byteString: string) => number[];
  toByteString: (bytes: any) => any;
}
```
<!-- prettier-ignore-end -->
