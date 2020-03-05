# lerp

Linearly interpolates two given values by normal value of their distance.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(t: number) => (a: number, b: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
lerp(0.5)(0, 10);
// ⇒ 5
```

```javascript
lerp(0)(0, 10);
// ⇒ 0
```

```javascript
lerp(1)(0, 10);
// ⇒ 10
```
<!-- prettier-ignore-end -->

## Questions

- How to linearly interpolate between two values?
- How to interpolate two numbers?
