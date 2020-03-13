# endOfDay

Returns a local Date of an end of the day at a particular Date.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
endOfDay(new Date("2018-12-31T13:54:33.232Z"));
// ⇒ new Date(new Date("2019-01-01T00:00:00.000Z").valueOf() + new Date("2018-12-31T13:54:33.232Z").getTimezoneOffset() * 60 * 1000)
```
<!-- prettier-ignore-end -->

## Questions

- How to find a date of an end of a given day?
