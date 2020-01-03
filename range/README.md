# empty

Checks if the given range is empty.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([min, max]: [any, any]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
empty([2, 2]); // ⇒ true
empty([1, 5]); // ⇒ false
```
<!-- prettier-ignore-end -->

# equals

Checks if the given ranges are equal.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [any, any], [c, d]: [any, any]) => boolean
```
<!-- prettier-ignore-end -->

# length

Computes the signed length of the given range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([min, max]: [any, any]) => number
```
<!-- prettier-ignore-end -->

# split

Splits the given range in subranges by excluding the given used ranged.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  used: [number, number][],
  sourceRange?: number[]
) => (range: [number, number]) => [number, number][]
```
<!-- prettier-ignore-end -->
