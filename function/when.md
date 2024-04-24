# when

Runs the given function only when the condition is met.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: (...xs: unknown[]) => boolean) => (action: (...xs: unknown[]) => unknown) => (...args: unknown[]) => unknown
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
when(x => x > 0)(x => console.log(x))(5);
when(x => x > 0)(x => console.log(x))(-3);
```
<!-- prettier-ignore-end -->

## Questions

- How to run a function only when a condition is satisfied?
