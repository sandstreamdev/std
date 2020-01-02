# any

Checks if the given array is present and it is not empty (contains at least one element).

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: object) => boolean
```
<!-- prettier-ignore-end -->

# apply

Applies the given parameters to the given dictionary of functions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  fs: ((...xs: any[]) => any)[]
) => (...xs: any[]) => object
```
<!-- prettier-ignore-end -->

# empty

Empty object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
{}
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
empty; // ⇒ {}
```
<!-- prettier-ignore-end -->

# entries

Lists key value pairs (entries) present in the given object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
{
  <T>(
    o:
      | {
          [s: string]: T;
        }
      | ArrayLike<T>
  ): [string, T][];
  (o: {}): [string, any][];
}
```
<!-- prettier-ignore-end -->

# enumerable

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => any
```
<!-- prettier-ignore-end -->

# equals

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any, b: any) => any
```
<!-- prettier-ignore-end -->

# filter

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => object
```
<!-- prettier-ignore-end -->

# find

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => unknown
```
<!-- prettier-ignore-end -->

# findEntry

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => [string, unknown]
```
<!-- prettier-ignore-end -->

# findKey

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => string
```
<!-- prettier-ignore-end -->

# findValue

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => unknown
```
<!-- prettier-ignore-end -->

# first

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => unknown
```
<!-- prettier-ignore-end -->

# flatMapValues

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# fromEntries

## Type signature

<!-- prettier-ignore-start -->
```typescript
(keyValuePairs: [string, any][]) => object
```
<!-- prettier-ignore-end -->

# groupBy

## Type signature

<!-- prettier-ignore-start -->
```typescript
(selector: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# hasKey

## Type signature

<!-- prettier-ignore-start -->
```typescript
(key: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# length

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: object) => number
```
<!-- prettier-ignore-end -->

# map

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

# mapEntries

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => [string, any][]
```
<!-- prettier-ignore-end -->

# mapKeys

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => object
```
<!-- prettier-ignore-end -->

# mapValues

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => any[]
```
<!-- prettier-ignore-end -->

# merge

Merges two objects deeply.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: object, b: object) => object
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
merge({ a: 1, b: 3 }, {}); // ⇒ { a: 1, b: 3 }
```

```javascript
merge({ a: 1, b: 3 }, { b: 7 }); // ⇒ { a: 1, b: 7 }
```

```javascript
merge({ a: 1, b: 3 }, { b: { d: 8 } }); // ⇒ { a: 1, b: { d: 8 } }
```

```javascript
merge({ a: 1, b: { c: 3 } }, { b: { d: 8 } }); // ⇒ { a: 1, b: { c: 3, d: 8 } }
```
<!-- prettier-ignore-end -->

# none

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

# sort

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => object
```
<!-- prettier-ignore-end -->
