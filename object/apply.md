# apply

Applies the given parameters to the given dictionary of functions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(fs: {
    [index: string]: (...xs: T[]) => T;
}) => (...xs: T[]) => GenericObject<T>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const lower = text => text.toLowerCase();
const upper = text => text.toUpperCase();

apply({ lower, upper })("TeSt");
// ⇒ { lower: "test", upper: "TEST" }
```
<!-- prettier-ignore-end -->

## Questions

- How to apply a value over an object of functions?
