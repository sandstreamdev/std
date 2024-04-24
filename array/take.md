# take

Takes up to a given count of elements.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
take(2)([1, 2, 3, 4, 5]);
// ⇒ [1, 2]
```

```javascript
take(10)([1, 2, 3, 4, 5]);
// ⇒ [1, 2, 3, 4, 5]
```
<!-- prettier-ignore-end -->

## Questions

- How to get the first N number of elements from an array?
