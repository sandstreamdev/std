# clampNormal

Clamps the given value to the [0, 1] range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
clampNormal(0.5);
// ⇒ 0.5
```

```javascript
clampNormal(-0.5);
// ⇒ 0
```

```javascript
clampNormal(1.5);
// ⇒ 1
```
<!-- prettier-ignore-end -->

## Questions

- How to clamp a value to be in 0 to 1 inclusive range?
- How to clamp a value to be in the normal range?
