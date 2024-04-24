# groupBy

Groups the given array of values by the given key selector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(selector: (x: unknown) => string) => (xs: unknown[]) => Result
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
groupBy(x => x % 2 == 0 ? "even" : "odd")([1, 2, 3, 4, 5, 6, 7]);
// ⇒ { even: [2, 4, 6], odd: [1, 3, 5, 7] }
```
<!-- prettier-ignore-end -->

## Questions

- How to group an array by a key function?
