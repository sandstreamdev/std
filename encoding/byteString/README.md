# from

Converts string to byte array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(byteString: string) => number[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
from("PQR"); // ⇒ [80, 81, 82]
```
<!-- prettier-ignore-end -->

# to

Coverts byte array to string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(bytes: number[]) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
to([0x50, 0x51, 0x52]); // ⇒ "PQR"
```
<!-- prettier-ignore-end -->
