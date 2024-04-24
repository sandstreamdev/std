# any

Checks if the given object is present and it is not empty (contains at least one entry).

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
any({ a: 1, b: 2, c: 3 });
// ⇒ true
```

```javascript
any({ });
// ⇒ false
```

```javascript
any(null);
// ⇒ false
```

```javascript
any(undefined);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if an object is not empty?
- How to check if an object contains some values?
- How to check if an object is not null or undefined?

# apply

Applies the given parameters to the given dictionary of functions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(fs: {
    [index: string]: (...xs: T[]) => T;
}) => (...xs: T[]) => GenericObject<T>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const lower = text => text.toLowerCase();
const upper = text => text.toUpperCase();

apply({ lower, upper })("TeSt");
// ⇒ { lower: "test", upper: "TEST" }
```
<!-- prettier-ignore-end -->

## Questions

- How to apply a value over an object of functions?

# empty

Empty object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
GenericObject<unknown>;
export default empty
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
empty;
// ⇒ {}
```
<!-- prettier-ignore-end -->

## Questions

- How to get an empty object?

# entries

Lists key-value pairs (entries) present in the given object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
ObjectEntries
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
entries({ a: 1, b: 2, c: 3 });
// ⇒ [["a", 1], ["b", 2], ["c", 3]]
```
<!-- prettier-ignore-end -->

## Questions

- How to get entries of an object?
- How to get an array of key-value pairs of an object?

# enumerable

Creates a 1 to 1 mapping of the given values as an object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: string[]) => object
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
enumerable('TEST', 'X', 'Y');
// ⇒ { TEST: 'TEST', X: 'X', Y: 'Y' }
```
<!-- prettier-ignore-end -->

## Questions

- How to create an object of the same keys and values?

# equals

Checks if two objects are deeply equal.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: unknown, b: unknown) => boolean;
export default equalsDeep
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
equals({ a: 1 }, { a: 1 });
// ⇒ true
```

```javascript
equals({ b: [1, 2] }, { b: [1, 2] });
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if two objects are equal?
- How to check deep object equality?

# every

Test if every element passes the given predicate.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
every(x => x >= 0)({ x: 5, y: 3, z: 0 });
// ⇒ true
```

```javascript
every(x => x > 0)({ x: 5, y: 3, z: 0 });
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if every entry in an object passes a given predicate?

# filter

Filters the given object with the given predicate.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => GenericObject<T>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
filter(x => x % 2 !== 0)({ a: 1, b: 2, c: 3 });
// ⇒ { a: 1, c: 3 }
```
<!-- prettier-ignore-end -->

## Questions

- How to filter an object?

# find

Searches the given object by the given predicate and returns the found value or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => T | undefined
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
find(({ x }) => x % 2 === 0)({ a: { x: 1 }, b: { x: 2 }, c: { x: 3 } });
// ⇒ { x: 2 }
```
<!-- prettier-ignore-end -->

## Questions

- How to find the value of an object by a predicate function?

# findEntry

Searches the given object by the given predicate and returns the found entry or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, key: string, context: GenericObject<T>) => boolean) => (xs: GenericObject<T>) => [string, T] | undefined
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
findEntry(({ x }) => x % 2 === 0)({ a: { x: 1 }, b: { x: 2 }, c: { x: 3 } });
// ⇒ ["b", { x: 2 }]
```
<!-- prettier-ignore-end -->

## Questions

- How to find an entry of an object by a predicate function?

# findKey

Searches the given object by the given predicate and returns the found key or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => string | undefined
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
findKey(({ x }) => x % 2 === 0)({ a: { x: 1 }, b: { x: 2 }, c: { x: 3 } });
// ⇒ "b"
```
<!-- prettier-ignore-end -->

## Questions

- How to find a key of an object by a predicate function?

# first

Returns the first value in the given object. Follows the default object iteration order.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: GenericObject<T>) => T | undefined
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
first({ a: 1, b: 2, c: 3 });
// ⇒ 1
```
<!-- prettier-ignore-end -->

## Questions

- How to get the first value of an object?

# flatMapValues

Flat maps the values of the given object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: GenericObject<T>) => TResult[]) => (xs: GenericObject<T>) => TResult[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
flatMapValues(x => [x, x * 2])({ a: 1, b: 2, c: 3 });
// ⇒ [1, 2, 2, 4, 3, 6]
```
<!-- prettier-ignore-end -->

## Questions

- How to flat map an object?

# fromEntries

Creates an object from an array of key-value pairs (entries).

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(entries: [string, T][]) => Result<T>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
fromEntries([["a", 1], ["b", 2], ["c", 3]]);
// ⇒ { a: 1, b: 2, c: 3 }
```
<!-- prettier-ignore-end -->

## Questions

- How to create an object from an array of key-value pairs?
- How to create an object from an array of entries?

# groupBy

Groups the given array of values by the given key selector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(selector: (x: unknown) => string) => (xs: unknown[]) => Result
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
groupBy(x => x % 2 == 0 ? "even" : "odd")([1, 2, 3, 4, 5, 6, 7]);
// ⇒ { even: [2, 4, 6], odd: [1, 3, 5, 7] }
```
<!-- prettier-ignore-end -->

## Questions

- How to group an array by a key function?

# hasKey

Checks if the given key is present in the object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(key: string) => (xs?: unknown) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
hasKey("c")({ a: 1, b: 2, c: 3 });
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if an object contains a given key?

# last

Returns the last value in the given object. Follows the default object iteration order.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: GenericObject<T>) => T | undefined
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
last({ a: 1, b: 2, c: 3 });
// ⇒ 3
```
<!-- prettier-ignore-end -->

## Questions

- How to get the last value of an object?

# length

Returns the number of entries within the given object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: GenericObject<T>) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
length({ a: 1, b: 2, c: 3 });
// ⇒ 3
```
<!-- prettier-ignore-end -->

## Questions

- How to check how many entries are in an object?

# map

Maps the given object with the given function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: object) => TResult) => (xs: GenericObject<T>) => GenericObject<TResult>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
map(x => x ** 2)({ a: 1, b: 2, c: 3 });
// ⇒ { a: 1, b: 4, c: 9 }
```
<!-- prettier-ignore-end -->

## Questions

- How to map an object?
- How to transform an object?

# mapEntries

Maps entries of the given object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: object) => TResult) => (xs: GenericObject<T>) => [string, TResult][]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
mapEntries(x => x ** 2)({ a: 1, b: 2, c: 3 });
// ⇒ [["a", 1], ["b", 4], ["c", 9]]
```
<!-- prettier-ignore-end -->

## Questions

- How to map object entries?

# mapKeys

Transforms the object keys with the given function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, key: string, context: object) => string) => (xs: GenericObject<T>) => GenericObject<T>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
mapKeys((_, key) => key.toUpperCase())({ a: 1, b: 2, c: 3 });
// ⇒ { A: 1, B: 2, C: 3 }
```
<!-- prettier-ignore-end -->

## Questions

- How to map object keys?
- How to transform object keys?

# mapValues

Maps and returns an array of transformed object values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: object) => TResult) => (xs: GenericObject<T>) => TResult[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
mapValues(x => x ** 2)({ a: 1, b: 2, c: 3 });
// ⇒ [1, 4, 9]
```
<!-- prettier-ignore-end -->

## Questions

- How to map object values?

# merge

Merges two objects deeply.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: GenericObject, b: GenericObject) => GenericObject;
export default merge
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
merge({ a: 1, b: 3 }, {});
// ⇒ { a: 1, b: 3 }
```

```javascript
merge({ a: 1, b: 3 }, { b: 7 });
// ⇒ { a: 1, b: 7 }
```

```javascript
merge({ a: 1, b: 3 }, { b: { d: 8 } });
// ⇒ { a: 1, b: { d: 8 } }
```

```javascript
merge({ a: 1, b: { c: 3 } }, { b: { d: 8 } });
// ⇒ { a: 1, b: { c: 3, d: 8 } }
```
<!-- prettier-ignore-end -->

## Questions

- How to merge two objects together?
- How to deeply merge two objects?

# none

Checks if the given object is empty.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
none({});
// ⇒ true
```

```javascript
none(null);
// ⇒ true
```

```javascript
none({ a: 1 });
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if an object is empty?
- How to check if an object is null or undefined?

# some

Test if any element passes the given predicate.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
some(x => x >= 4)({ x: 5, y: 3, z: 0 });
// ⇒ true
```

```javascript
some(x => x < 0)({ x: 5, y: 3, z: 0 });
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if any entry in an object passes a given predicate?

# sort

Sorts the given object by a comparator.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (a: T, b: T) => number) => (xs: GenericObject<T>) => GenericObject<T>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
sort({ a: 3, b: 2, c: 3, d: -7, e: 13, f: 0, g: 8 });
// ⇒ {"d": -7,"f": 0,"b": 2,"a": 3,"c": 3,"g": 8,"e": 13}
```
<!-- prettier-ignore-end -->

## Questions

- How to sort an object?
