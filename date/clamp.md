# clamp

Clamps the given date to the given date range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(min: Date, max: Date) => (date: Date) => Date
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const date = new Date("2019-06-15T13:54:33.232Z");
const min = new Date("2019-02-23T13:54:33.232Z");
const max = new Date("2019-03-13T13:54:33.232Z");

clamp(min, max)(date);
// => new Date("2019-03-13T13:54:33.232Z")
```
<!-- prettier-ignore-end -->

## Questions

- How to clamp a date to the desired date range?
- How to enforce a date to be in a given date range?
