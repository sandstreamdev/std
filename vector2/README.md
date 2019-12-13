# add

## Type signature

```typescript
<!-- prettier-ignore-start -->
([x1, y1]: [any, any], [x2, y2]: [any, any]) => any[]
<!-- prettier-ignore-end -->
```

# convertSpace

## Type signature

```typescript
<!-- prettier-ignore-start -->
(space: any) => ([x, y]: [any, any]) => any[]
<!-- prettier-ignore-end -->
```

# cross

## Type signature

```typescript
<!-- prettier-ignore-start -->
([a, b]: [any, any], [c, d]: [any, any]) => number
<!-- prettier-ignore-end -->
```

# dot

## Type signature

```typescript
<!-- prettier-ignore-start -->
([a, b]: [any, any], [c, d]: [any, any]) => number
<!-- prettier-ignore-end -->
```

# length

## Type signature

```typescript
<!-- prettier-ignore-start -->
([x, y]: [any, any]) => number
<!-- prettier-ignore-end -->
```

# mul

## Type signature

```typescript
<!-- prettier-ignore-start -->
(matrix: any, point: any) => any[]
<!-- prettier-ignore-end -->
```

# multiply

## Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```

# normalize

## Type signature

```typescript
<!-- prettier-ignore-start -->
(vector: any) => any
<!-- prettier-ignore-end -->
```

# reflect

## Type signature

```typescript
<!-- prettier-ignore-start -->
(a: any, v: any) => number[]
<!-- prettier-ignore-end -->
```

# rotate

## Type signature

```typescript
<!-- prettier-ignore-start -->
(angle?: number, cx?: number, cy?: number) => any
<!-- prettier-ignore-end -->
```

# scale

## Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```

# sub

## Type signature

```typescript
<!-- prettier-ignore-start -->
(
  [x1, y1]: [any, any],
  [x2, y2]: [any, any]
) => number[]
<!-- prettier-ignore-end -->
```

# transform

## Type signature

```typescript
<!-- prettier-ignore-start -->
(...matrices: any[]) => any
<!-- prettier-ignore-end -->
```

# translate

## Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```
