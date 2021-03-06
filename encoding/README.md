# base64url

## decode

Decodes the given Base64URL back into a string.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string, context?: DecodeContext) => string
```
<!-- prettier-ignore-end -->

### Examples

<!-- prettier-ignore-start -->
```javascript
decode("PDw_Pz8-Pg");
// ⇒ "<<???>>"
```
<!-- prettier-ignore-end -->

### Questions

- How to decode Base64URL?

## decodeBytes

Decodes the given Base64URL back into a byte array.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string, context?: DecodeContext) => number[]
```
<!-- prettier-ignore-end -->

### Examples

<!-- prettier-ignore-start -->
```javascript
decodeBytes("w4Jnw6vCp20-bBsQfA");
// ⇒ [0xc2, 0x67, 0xeb, 0xa7, 0x6d, 0x3e, 0x6c, 0x1b, 0x10, 0x7c]
```
<!-- prettier-ignore-end -->

### Questions

- How to decode Base64URL into a byte array?

## encode

Encodes the given string into Base64URL.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string, context?: EncodeContext) => string
```
<!-- prettier-ignore-end -->

### Examples

<!-- prettier-ignore-start -->
```javascript
encode("<<???>>");
// ⇒ "PDw_Pz8-Pg"
```
<!-- prettier-ignore-end -->

### Questions

- How to encode a string as Base64URL?

## encodeBytes

Encodes the given bytes into Base64URL.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(bytes: number[], context?: EncodeContext) => string
```
<!-- prettier-ignore-end -->

### Examples

<!-- prettier-ignore-start -->
```javascript
encodeBytes([0xc2, 0x67, 0xeb, 0xa7, 0x6d, 0x3e, 0x6c, 0x1b, 0x10, 0x7c]);
// ⇒ "w4Jnw6vCp20-bBsQfA"
```
<!-- prettier-ignore-end -->

### Questions

- How to encode bytes as Base64URL?

## fromBase64

Converts Base64 string into Base64URL one.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(base64: string) => string
```
<!-- prettier-ignore-end -->

### Examples

<!-- prettier-ignore-start -->
```javascript
fromBase64("PDw/Pz8+Pg==");
// ⇒ "PDw_Pz8-Pg"
```
<!-- prettier-ignore-end -->

### Questions

- How to convert Base64 to Base64URL?

## toBase64

Converts Base64URL string into Base64 one.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(base64Url: string) => string
```
<!-- prettier-ignore-end -->

### Examples

<!-- prettier-ignore-start -->
```javascript
toBase64("PDw_Pz8-Pg");
// ⇒ "PDw/Pz8+Pg=="
```
<!-- prettier-ignore-end -->

### Questions

- How to convert Base64URL to Base64?

# byteString

## from

Converts a string to a byte array.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(byteString: string) => number[]
```
<!-- prettier-ignore-end -->

### Examples

<!-- prettier-ignore-start -->
```javascript
from("PQR");
// ⇒ [80, 81, 82]
```
<!-- prettier-ignore-end -->

### Questions

- How to convert a string into a byte array?

## to

Coverts a byte array into a string.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(bytes: number[]) => string
```
<!-- prettier-ignore-end -->

### Examples

<!-- prettier-ignore-start -->
```javascript
to([0x50, 0x51, 0x52]);
// ⇒ "PQR"
```
<!-- prettier-ignore-end -->

### Questions

- How to convert a byte array to string?
