# dateInRange

Checks if the given date is between the given date range (inclusive).

## Type signature

<!-- prettier-ignore-start -->
```typescript
(from: Date, to: Date) => (date: Date) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
dateInRange(new Date("2018-06-10T12:00:00.000Z"), new Date("2018-06-20T12:00:00.000Z"))(new Date("2018-06-15T12:00:00.000Z"));
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a date is within given date range?
