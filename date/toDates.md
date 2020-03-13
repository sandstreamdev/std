# toDates

Converts given array of values into Dates using the Date constructor.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: (string | number | Date)[]) => Date[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
toDates(["2019-01-15T13:54:33.232Z", new Date("2019-01-15T13:54:33.232Z").valueOf(), new Date("2019-01-15T13:54:33.232Z")]);
// ⇒ [new Date("2019-01-15T13:54:33.232Z"), new Date("2019-01-15T13:54:33.232Z"), new Date("2019-01-15T13:54:33.232Z")]
```
<!-- prettier-ignore-end -->

## Questions

- How to convert array of string and timestamps into an array of Date objects?
