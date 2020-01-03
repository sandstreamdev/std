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
