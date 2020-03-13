# dayRange

Returns a local day range at a particular Date

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const date = new Date("2018-12-31T13:54:33.232Z");

dayRange(date);
// ⇒ [startOfDay(date), endOfDay(date)]
```
<!-- prettier-ignore-end -->

## Questions

- How to find a date range of a given day?
