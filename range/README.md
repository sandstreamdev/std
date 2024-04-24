# empty

Checks if the given range is empty.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([min, max]: [number, number]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
empty([2, 2]);
// ⇒ true
```

```javascript
empty([1, 5]);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given range is empty (0-length)?

# equals

Checks if the given ranges are equal.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [number, number], [c, d]: [number, number]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
equals([1, 2], [1, 2]);
// ⇒ true
```

```javascript
equals([4, 3], [1, 2]);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if two ranges are equal?

# length

Computes the signed length of the given range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([min, max]: [number, number]) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
length([3, 15]);
// ⇒ 12
```

```javascript
length([1, 0]);
// ⇒ -1
```
<!-- prettier-ignore-end -->

## Questions

- How to compute a signed length of a range?

# split

Splits the given range into subranges by excluding the given used ranged.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(used: [number, number][], sourceRange?: number[]) => (range: [number, number]) => [number, number][];
export default split
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
split([[2, 3], [5, 7]]);
// ⇒ [[0, 2], [3, 5], [7, 10]]
```
<!-- prettier-ignore-end -->

## Questions

- How to split a range into subranges?
