# daysInMonths

Returns an array of days in a particular months. Number of days in February varies if it is a leap year or not.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(leapYear: boolean) => [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
daysInMonths(false);
// ⇒ [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
```

```javascript
daysInMonths(true);
// ⇒ [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
```
<!-- prettier-ignore-end -->

## Questions

- How to find out how many days are in a particular month?
- How to find out how many days there are in a leap year?
