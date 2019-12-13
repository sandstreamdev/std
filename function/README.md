# compose

## Type signature

```typescript
<!-- prettier-ignore-start -->
(...fs: any[]) => (x: any) => any
<!-- prettier-ignore-end -->
```

# constant

## Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => () => any
<!-- prettier-ignore-end -->
```

# identity

## Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => any
<!-- prettier-ignore-end -->
```

# memoize

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (...args: any[]) => any
<!-- prettier-ignore-end -->
```

# memoizeShallow

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (...args: any[]) => any
<!-- prettier-ignore-end -->
```

# memoizeWith

## Type signature

```typescript
<!-- prettier-ignore-start -->
(equals: any) => (f: any) => (...args: any[]) => any
<!-- prettier-ignore-end -->
```

# noOp

## Type signature

```typescript
<!-- prettier-ignore-start -->
() => void
<!-- prettier-ignore-end -->
```

# not

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (...args: any[]) => boolean
<!-- prettier-ignore-end -->
```

# pipe

## Type signature

```typescript
<!-- prettier-ignore-start -->
(...fs: any[]) => (x: any) => any
<!-- prettier-ignore-end -->
```

# when

## Type signature

```typescript
<!-- prettier-ignore-start -->
(
  predicate: any
) => (action: any) => (...args: any[]) => any
<!-- prettier-ignore-end -->
```

# whenTrue

## Type signature

```typescript
<!-- prettier-ignore-start -->
(action: any) => (...args: any[]) => any
<!-- prettier-ignore-end -->
```
