# add

## Type signature

```
([x1, y1]: [any, any], [x2, y2]: [any, any]) => any[]
```

# convertSpace

## Type signature

```
(space: any) => ([x, y]: [any, any]) => any[]
```

# cross

## Type signature

```
([a, b]: [any, any], [c, d]: [any, any]) => number
```

# dot

## Type signature

```
([a, b]: [any, any], [c, d]: [any, any]) => number
```

# length

## Type signature

```
([x, y]: [any, any]) => number
```

# mul

## Type signature

```
(matrix: any, point: any) => any[]
```

# multiply

## Type signature

```
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

# normalize

## Type signature

```
(vector: any) => any
```

# reflect

## Type signature

```
(a: any, v: any) => number[]
```

# rotate

## Type signature

```
(angle?: number, cx?: number, cy?: number) => any
```

# scale

## Type signature

```
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

# sub

## Type signature

```
(
  [x1, y1]: [any, any],
  [x2, y2]: [any, any]
) => number[]
```

# transform

## Type signature

```
(...matrices: any[]) => any
```

# translate

## Type signature

```
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
