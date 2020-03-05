# assert

Asserts given conditions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  condition: boolean,
  callbackOrMessage: string | (() => void)
) => void
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
assert(true === false);
// ⇒ TypeError("Assertion failed!")
```
<!-- prettier-ignore-end -->

## Questions

- How to assert a condition?
- How to throw when a condition is not satisfied?
