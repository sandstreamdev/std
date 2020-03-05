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

## Examples

<!-- prettier-ignore-start -->
```javascript
const f = () => console.log("Test");

const debounced = debounce(f, 2000);

debounced();
setTimeout(debounced, 1000);
setTimeout(debounced, 3000);
```
<!-- prettier-ignore-end -->

## Questions

- How to make function fire after some time not being called?
- How to debounce input events?
- How to debounce a function?

# delay

When awaited, delays the execution by the given number of milliseconds.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: number) => Promise<unknown>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
delay(2000)(() => console.log("Test"));
```
<!-- prettier-ignore-end -->

## Questions

- How to delay a function?
- What is the JavaScript version of sleep()?

# sequence

Runs the given tasks in a sequence.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(tasks: (() => Promise<any>)[]) => Promise<any[]>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const f = () => new Promise(resolve => setTimeout(resolve, 1000));
const g = () => new Promise(resolve => setTimeout(resolve, 2000));

sequence([f, g]).then(() => console.log("Done"));
```
<!-- prettier-ignore-end -->

## Questions

- How to run async tasks sequentially?
