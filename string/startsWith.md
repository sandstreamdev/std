# startsWith

Checks if the given string starts with the given substring.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(prefix: string) => (xs: string) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
startsWith("The")("The quick brown fox jumps over the lazy dog");
// ⇒ true
```

```javascript
startsWith("Quick")("The quick brown fox jumps over the lazy dog");
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a string starts with a given substring?
