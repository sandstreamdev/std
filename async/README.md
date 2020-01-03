# debounce

Makes the function run after the given period of not being called. Useful to delay input submission for autocomplete etc.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (...args: any[]) => any,
  wait: number
) => (...args: any[]) => void
```
<!-- prettier-ignore-end -->

# delay

When awaited, delays the execution by the given number of milliseconds.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: number) => Promise<unknown>
```
<!-- prettier-ignore-end -->

# sequence

Runs the given tasks in a sequence.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(tasks: (() => Promise<any>)[]) => Promise<any[]>
```
<!-- prettier-ignore-end -->
