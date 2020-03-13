# displayTime

Displays padded time string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  source: [number, number, number],
  showSeconds: boolean
) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
displayTime([5, 12, 16], false);
// ⇒ 05:12
```

```javascript
displayTime([5, 12, 16], true);
// ⇒ 05:12:16
```
<!-- prettier-ignore-end -->

## Questions

- How to display padded time?
