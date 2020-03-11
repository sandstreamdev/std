# array

Checks if the given argument is an array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
array([1, 2, 3]);
// ⇒ true
```

```javascript
array({ a: 1 });
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is an array?

# boolean

Checks if the given value is a boolean.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
boolean(false); // ⇒ true
```

```javascript
boolean(1); // ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is a boolean?

# byte

Checks if the given value is a byte.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: number) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
byte(128);
// ⇒ true
```

```javascript
byte(325);
// ⇒ false
```

```javascript
byte(65.5);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is a byte?
- How to check if a given number is a byte?

# date

Checks if the given value is a Date object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
date(new Date());
// ⇒ true
```

```javascript
date(123);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is a Date object?

# defined

Checks if the given value is defined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
defined(undefined);
// ⇒ false
```

```javascript
defined(null);
// ⇒ true
```

```javascript
defined(0);
// ⇒ true
```

```javascript
defined({ a: 1 });
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is defined?
- How to check if a given value is not undefined?

# function

Checks if the given value is a function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
_function(x => x + 5);
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is a function?

# integer

Checks if the given value is an integer.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: number) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
integer(5);
// ⇒ true
```

```javascript
integer(32.5);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is an integer?
- How to check if a given number is an integer?

# nonNullable

Checks and asserts the given value is not null or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(val: T) => val is NonNullable<T>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
nonNullable(null);
// ⇒ false
```

```javascript
nonNullable(undefined);
// ⇒ false
```

```javascript
nonNullable(false);
// ⇒ true
```

```javascript
nonNullable({ a: 1 });
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is non-nullable?
- How to check if a given value is not null?
- How to check if a given value is not undefined?

# normal

Checks if the given value is a number in a normal range [0, 1].

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: number) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
normal(0.75);
// ⇒ true
```

```javascript
normal(-1);
// ⇒ false
```

```javascript
normal(2.5);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is in 0 to 1 inclusive range?

# number

Checks if the given value is a number.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
number(0 / 0);
// ⇒ false
```

```javascript
number(15.6);
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is a valid number?
- How to check if a given value is not NaN?
- How to check if a given value is finite?

# object

Checks if the given value is an object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
object({ a: 1, b: 2 });
// ⇒ true
```

```javascript
object([1, 2, 3]);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is an object?

# string

Checks if the given value is a string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
string("Test");
// ⇒ true
```

```javascript
string(['T', 'e', 's', 't']);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is a string?
