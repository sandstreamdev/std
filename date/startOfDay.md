# startOfDay

Returns a local Date of a start of the day at a particular Date.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
endOfDay(new Date("2019-01-01T13:54:33.232Z"));
// ⇒ new Date(new Date("2019-01-01T00:00:00.000Z").valueOf() + new Date("2019-01-01T13:54:33.232Z").getTimezoneOffset() * 60 * 1000)
```
<!-- prettier-ignore-end -->

## Questions

- How to find a date of the start of a given day?
