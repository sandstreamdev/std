# find

Finds an element by a predicate function within the given array, otherwise, it returns the given fallback value or undefined when fallback is not present.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, index: number, context: T[]) => boolean, fallback?: T) => (xs: T[]) => T
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
find(x => x > 2)([1, 2, 3, 5, 7]);
// ⇒ 3
```

```javascript
find(x => x > 2)([1, 2, -3, -5, -7]);
// ⇒ undefined
```
<!-- prettier-ignore-end -->

## Questions

- How to find an element of an array by a given predicate?
