# containsWhitespace

Checks if the given string contains whitespace.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: string) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
containsWhitespace("test string");
// ⇒ true
```

```javascript
containsWhitespace("test");
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a string contains whitespace?

# empty

Empty string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
""
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
empty();
// ⇒ ""
```
<!-- prettier-ignore-end -->

## Questions

- How to get an empty string?

# firstToLower

Transforms the first character to lowercase.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
firstToLower("TeSt");
// ⇒ "teSt"
```
<!-- prettier-ignore-end -->

## Questions

- How to make the first letter of a string lowercase?

# firstToUpper

Transforms the first character to uppercase.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
firstToUpper("teSt");
// ⇒ "TeSt"
```
<!-- prettier-ignore-end -->

## Questions

- How to make the first letter of a string uppercase?

# includes

Checks if the given substring is present in the source string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(search: string) => (text: string) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
includes("brown fox")("The quick brown fox jumps over the lazy dog");
// ⇒ true
```

```javascript
includes("brown dog")("The quick brown fox jumps over the lazy dog");
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check is a string contains a given substring?

# nbsp

Non-breaking space.

## Type signature

<!-- prettier-ignore-start -->
```typescript
" "
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
nbsp;
// ⇒ " "
```
<!-- prettier-ignore-end -->

## Questions

- How to get a non-breaking space?

# nonEmpty

Checks if the given string is present and is not empty or all whitespace.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: string) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
nonEmpty("test with spaces");
// ⇒ true
```

```javascript
nonEmpty("   ");
// ⇒ false
```

```javascript
nonEmpty(null);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a string is non empty?
- How to check is string is not all whitespace?
- How to check is string is not null or undefined?

# startsWith

Checks if the given string starts with the given substring.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(prefix: string) => (xs: string) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
startsWith("The")("The quick brown fox jumps over the lazy dog");
// ⇒ true
```

```javascript
startsWith("Quick")("The quick brown fox jumps over the lazy dog");
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a string starts with a given substring?
