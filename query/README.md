# parse

Parses a query string into an object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  xs?: string
) => {
  [x: string]: string | boolean;
  [x: number]: string | boolean;
}
```
<!-- prettier-ignore-end -->

# read

Parses the given query string into an object using URLSearchParams.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(source: string) => {}
```
<!-- prettier-ignore-end -->

# serialize

Serializes the given object into a query string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: { [index: string]: any }) => string
```
<!-- prettier-ignore-end -->
