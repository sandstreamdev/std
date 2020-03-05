# clamp

Clamps the given value to the given range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(min: number, max: number) => (x: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
clamp(0, 10)(5);
// ⇒ 5
```

```javascript
clamp(0, 10)(-5);
// ⇒ 0
```

```javascript
clamp(0, 10)(15);
// ⇒ 10
```
<!-- prettier-ignore-end -->

## Questions

- How to clamp value to the desired range?
- How to enforce a value to be in a given range?
