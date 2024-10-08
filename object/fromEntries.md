# fromEntries

Creates an object from an array of key-value pairs (entries).

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(entries: [string, T][]) => Result<T>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
fromEntries([["a", 1], ["b", 2], ["c", 3]]);
// ⇒ { a: 1, b: 2, c: 3 }
```
<!-- prettier-ignore-end -->

## Questions

- How to create an object from an array of key-value pairs?
- How to create an object from an array of entries?
