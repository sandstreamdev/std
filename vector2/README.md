# add

## Type signature

<!-- prettier-ignore-start -->
```typescript
([x1, y1]: [any, any], [x2, y2]: [any, any]) => any[]
```
<!-- prettier-ignore-end -->

# convertSpace

## Type signature

<!-- prettier-ignore-start -->
```typescript
(space: any) => ([x, y]: [any, any]) => any[]
```
<!-- prettier-ignore-end -->

# cross

## Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [any, any], [c, d]: [any, any]) => number
```
<!-- prettier-ignore-end -->

# dot

## Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [any, any], [c, d]: [any, any]) => number
```
<!-- prettier-ignore-end -->

# length

## Type signature

<!-- prettier-ignore-start -->
```typescript
([x, y]: [any, any]) => number
```
<!-- prettier-ignore-end -->

# mul

## Type signature

<!-- prettier-ignore-start -->
```typescript
(matrix: any, point: any) => any[]
```
<!-- prettier-ignore-end -->

# multiply

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  m1: any,
  m2: any
) => {
  a: number;
  c: number;
  e: any;
  b: number;
  d: number;
  f: any;
}
```
<!-- prettier-ignore-end -->

# normalize

## Type signature

<!-- prettier-ignore-start -->
```typescript
(vector: any) => any
```
<!-- prettier-ignore-end -->

# reflect

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any, v: any) => number[]
```
<!-- prettier-ignore-end -->

# rotate

## Type signature

<!-- prettier-ignore-start -->
```typescript
(angle?: number, cx?: number, cy?: number) => any
```
<!-- prettier-ignore-end -->

# scale

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sx?: number,
  sy?: number
) => {
  a: number;
  c: number;
  e: number;
  b: number;
  d: number;
  f: number;
}
```
<!-- prettier-ignore-end -->

# sub

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  [x1, y1]: [any, any],
  [x2, y2]: [any, any]
) => number[]
```
<!-- prettier-ignore-end -->

# transform

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...matrices: any[]) => any
```
<!-- prettier-ignore-end -->

# translate

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  tx?: number,
  ty?: number
) => {
  a: number;
  c: number;
  e: number;
  b: number;
  d: number;
  f: number;
}
```
<!-- prettier-ignore-end -->
