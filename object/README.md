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

Creates a 1 to 1 mapping of given values as an object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: string[]) => object
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
enumerable('TEST', 'X', 'Y'); // ⇒ { TEST: 'TEST', X: 'X', Y: 'Y' }
```
<!-- prettier-ignore-end -->

# equals

Checks if two objects are deeply equal.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any, b: any) => boolean
```
<!-- prettier-ignore-end -->

# filter

Filters the given object with the given predicate.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => boolean
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

# find

Searches the given object by the given predicate and returns the found value or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (value: any, key: string, context: object) => boolean
) => (xs: object) => any
```
<!-- prettier-ignore-end -->

# findEntry

Searches the given object by the given predicate and returns the found entry or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (value: any, key: string, context: object) => boolean
) => (xs: object) => any
```
<!-- prettier-ignore-end -->

# findKey

Searches the given object by the given predicate and returns the found key or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (value: any, key: string, context: object) => boolean
) => (xs: object) => any
```
<!-- prettier-ignore-end -->

# first

Return the first value in the given object. Follows default object iteration order.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: object) => any
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
first({ a: 1, b: 2, c: 3 }); // ⇒ 1
```
<!-- prettier-ignore-end -->

# flatMapValues

Flat maps the values of the given object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => boolean
) => (xs: object) => any[]
```
<!-- prettier-ignore-end -->

# fromEntries

Creates an object from array of key value pairs (entries).

## Type signature

<!-- prettier-ignore-start -->
```typescript
(keyValuePairs: [string, any][]) => object
```
<!-- prettier-ignore-end -->

# groupBy

Groups given array of values by the given key selector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(selector: (x: any) => string) => (xs: any[]) => object
```
<!-- prettier-ignore-end -->

# hasKey

Checks if given key is present in the object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(key: string) => (xs?: any) => any
```
<!-- prettier-ignore-end -->

# length

Returns the number of entries within the given object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: object) => number
```
<!-- prettier-ignore-end -->

# map

Maps the given object with the given function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => boolean
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

# mapEntries

Maps entries of the given object.

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
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

# mapValues

Maps and returns an array of transformed object values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => any[]
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

Checks if the given object is empty.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: object) => boolean
```
<!-- prettier-ignore-end -->

# sort

Sorts the given object by a comparator.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => object
```
<!-- prettier-ignore-end -->
