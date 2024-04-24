# zipN

Zips the given arrays together into pairs.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(...xs: T[][]) => T[][]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
zipN([1, 2, 3], [4, 5, 6]);
// ⇒ [[1, 4], [2, 5], [3, 6]]
```

```javascript
zipN([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// ⇒ [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

```javascript
zipN([1, 2], [4, 5, 6], [7, 8, 9]);
// ⇒ [[1, 4, 7],[2, 5, 8]]
```
<!-- prettier-ignore-end -->

## Questions

- How to zip multiple arrays?
