# read

Parses the given query string into an object using URLSearchParams.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(source: string) => Result
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
read("test&count=5");
// ⇒ { test: "", count: "5" }
```
<!-- prettier-ignore-end -->

## Questions

- How to parse a query string using URLSearchParams?
