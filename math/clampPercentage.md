# clampPercentage

Clamps the given value to the [0, 100] range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
clampPercentage(50);
// ⇒ 50
```

```javascript
clampPercentage(-50);
// ⇒ 0
```

```javascript
clampPercentage(150);
// ⇒ 100
```
<!-- prettier-ignore-end -->

## Questions

- How to enforce percentage be between 0% and 100%?
