# parse

Parses a query string into an object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: string) => {
    [index: string]: string | boolean;
}
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

# serialize

Serializes the given object into a query string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: GenericObject<T>) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
serialize({ test: true, value: "a string with spaces", missing: false });
// ⇒ "test&value=a%20string%20with%20spaces"
```
<!-- prettier-ignore-end -->

## Questions

- How to serialize an object to a query string?
