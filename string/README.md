# containsWhitespace

Checks if the given string contains whitespace.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: string) => boolean
```
<!-- prettier-ignore-end -->

# empty

Empty string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
""
```
<!-- prettier-ignore-end -->

# firstToLower

Transforms the first character to lowercase.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string) => string
```
<!-- prettier-ignore-end -->

# firstToUpper

Transforms the first character to uppercase.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string) => string
```
<!-- prettier-ignore-end -->

# includes

Checks if the given substring is present in the source string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(search: string) => (text: string) => boolean
```
<!-- prettier-ignore-end -->

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
nbsp; // ⇒ " "
```
<!-- prettier-ignore-end -->

# nonEmpty

Checks if the given string is present and is not empty or all whitespace.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: string) => boolean
```
<!-- prettier-ignore-end -->

# startsWith

Checks if the given string starts with the given substring.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(prefix: string) => (xs: string) => boolean
```
<!-- prettier-ignore-end -->
