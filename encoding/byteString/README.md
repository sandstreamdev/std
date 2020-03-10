# from

Converts a string to a byte array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(byteString: string) => number[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
from("PQR");
// ⇒ [80, 81, 82]
```
<!-- prettier-ignore-end -->

## Questions

- How to convert a string into a byte array?

# to

Coverts a byte array into a string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(bytes: number[]) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
to([0x50, 0x51, 0x52]);
// ⇒ "PQR"
```
<!-- prettier-ignore-end -->

## Questions

- How to convert a byte array to string?
