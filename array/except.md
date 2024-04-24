# except

Filters out the given value.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(y: T) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
except(2)([1, 2, 3, 4, 5]);
// ⇒ [1, 3, 4, 5]
```

```javascript
except(2)([1, 2, 2, 4, 2]);
// ⇒ [1, 4]
```
<!-- prettier-ignore-end -->

## Questions

- How to get all the values of an array except the given one?
