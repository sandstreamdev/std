# constant

Returns the given constant no matter the input.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(x: T) => () => T
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
constant(3)("anything");
// ⇒ 3
```
<!-- prettier-ignore-end -->

## Questions

- How to create a function that always returns the same value despite given arguments?
