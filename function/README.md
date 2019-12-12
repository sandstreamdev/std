# compose

## Type signature

```typescript
(...fs: any[]) => (x: any) => any;
```

# constant

## Type signature

```typescript
(x: any) => () => any;
```

# identity

## Type signature

```typescript
(x: any) => any;
```

# memoize

## Type signature

```typescript
(f: any) => (...args: any[]) => any;
```

# memoizeShallow

## Type signature

```typescript
(f: any) => (...args: any[]) => any;
```

# memoizeWith

## Type signature

```typescript
(equals: any) => (f: any) => (...args: any[]) => any;
```

# noOp

## Type signature

```typescript
() => void
```

# not

## Type signature

```typescript
(f: any) => (...args: any[]) => boolean;
```

# pipe

## Type signature

```typescript
(...fs: any[]) => (x: any) => any;
```

# when

## Type signature

```typescript
(predicate: any) => (action: any) => (...args: any[]) => any;
```

# whenTrue

## Type signature

```typescript
(action: any) => (...args: any[]) => any;
```
