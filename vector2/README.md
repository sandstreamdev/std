# add

## Type signature

```typescript
([x1, y1]: [any, any], [x2, y2]: [any, any]) => any[]
```

# convertSpace

## Type signature

```typescript
(space: any) => ([x, y]: [any, any]) => any[]
```

# cross

## Type signature

```typescript
([a, b]: [any, any], [c, d]: [any, any]) => number;
```

# dot

## Type signature

```typescript
([a, b]: [any, any], [c, d]: [any, any]) => number;
```

# length

## Type signature

```typescript
([x, y]: [any, any]) => number;
```

# mul

## Type signature

```typescript
(matrix: any, point: any) => any[]
```

# multiply

## Type signature

```typescript
(m1: any, m2: any) => {
  a: number;
  c: number;
  e: any;
  b: number;
  d: number;
  f: any;
};
```

# normalize

## Type signature

```typescript
(vector: any) => any;
```

# reflect

## Type signature

```typescript
(a: any, v: any) => number[]
```

# rotate

## Type signature

```typescript
(angle?: number, cx?: number, cy?: number) => any;
```

# scale

## Type signature

```typescript
(sx?: number, sy?: number) => {
  a: number;
  c: number;
  e: number;
  b: number;
  d: number;
  f: number;
};
```

# sub

## Type signature

```typescript
(
  [x1, y1]: [any, any],
  [x2, y2]: [any, any]
) => number[]
```

# transform

## Type signature

```typescript
(...matrices: any[]) => any;
```

# translate

## Type signature

```typescript
(tx?: number, ty?: number) => {
  a: number;
  c: number;
  e: number;
  b: number;
  d: number;
  f: number;
};
```
