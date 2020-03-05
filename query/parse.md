# parse

Parses a query string into an object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: string) => object
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
parse("test&count=5");
// ⇒ { test: true, count: "5" }
```
<!-- prettier-ignore-end -->

## Questions

- How to parse a query string?
