# includes

Checks if the given substring is present in the source string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(search: string) => (text: string) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
includes("brown fox")("The quick brown fox jumps over the lazy dog");
// ⇒ true
```

```javascript
includes("brown dog")("The quick brown fox jumps over the lazy dog");
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a string contains a given substring?
