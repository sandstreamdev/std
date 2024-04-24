# flatten

Flattens the nested arrays by a single level.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
flatten([1, [2, 3], 4, [5, 6]]);
// ⇒ [1, 2, 3, 4, 5, 6]
```

```javascript
flatten([1, [2, [3, 6]], 4, [5, 6]]);
// ⇒ [1, 2, [3, 6], 4, 5, 6]
```
<!-- prettier-ignore-end -->

## Questions

- How to flatten an array?
