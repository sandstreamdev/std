# compose

## Type signature

```
(...fs: any[]) => (x: any) => any
```

# constant

## Type signature

```
(x: any) => () => any
```

# identity

## Type signature

```
(x: any) => any
```

# memoize

## Type signature

```
(f: any) => (...args: any[]) => any
```

# memoizeShallow

## Type signature

```
(f: any) => (...args: any[]) => any
```

# memoizeWith

## Type signature

```
(equals: any) => (f: any) => (...args: any[]) => any
```

# noOp

## Type signature

```
() => void
```

# not

## Type signature

```
(f: any) => (...args: any[]) => boolean
```

# pipe

## Type signature

```
(...fs: any[]) => (x: any) => any
```

# when

## Type signature

```
(
  predicate: any
) => (action: any) => (...args: any[]) => any
```

# whenTrue

## Type signature

```
(action: any) => (...args: any[]) => any
```
