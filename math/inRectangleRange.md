# inRectangleRange

Checks if the given value is in the rectangular range of [0, width] and [0, height]

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  width: number,
  height: number
) => (x: number, y: number) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
inRectangleRange(50, 100)(25, 50);
// ⇒ true
```

```javascript
inRectangleRange(50, 100)(-25, 50);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a point is inside a rectangle defined by width and height?
