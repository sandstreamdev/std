# shift

Shifts the given array to the left and circulates the elements back by modulo of the array's length.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
shift(1)([1, 2, 3, 4, 5]); // ⇒ [2, 3, 4, 5, 1]
```

```javascript
shift(2)([1, 2, 3, 4, 5]); // ⇒ [3, 4, 5, 1, 2]
```

```javascript
shift(3)([1, 2, 3, 4, 5]); // ⇒ [4, 5, 1, 2, 3]
```
<!-- prettier-ignore-end -->
