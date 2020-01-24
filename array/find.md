# find

Finds an element by a predicate function within given array, otherwise returns the given fallback value or undefined when fallback is not present.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (value: any, index: number, context: any[]) => boolean,
  fallback?: any
) => (xs: any[]) => any
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
find(x => x > 2)([1, 2, 3, 5, 7]); // ⇒ 3
```

```javascript
find(x => x > 2)([1, 2, -3, -5, -7]); // ⇒ undefined
```
<!-- prettier-ignore-end -->
