# maximumBy

Calculates the maximum by a given selector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (x: number) => number) => (xs: number[]) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
maximumBy(({ age }) => age)([{ age: 13 }, { age: 20 }, { age: 7 }, { age: 18 }]);
// ⇒ { age: 20 }
```
<!-- prettier-ignore-end -->

## Questions

- How to find a maximum element by a given function?
