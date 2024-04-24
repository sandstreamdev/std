# whenTrue

Runs the given function only when the condition is exactly true.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(action: (...xs: unknown[]) => unknown) => (...args: unknown[]) => unknown
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
whenTrue(x => console.log(x))(false);
when(x => x > 0)(x => console.log(x))(true);
```
<!-- prettier-ignore-end -->

## Questions

- How to run a function only if its argument is true?
- How to execute function only if a variable is true?
