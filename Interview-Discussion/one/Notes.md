# Notes:-

```
-> In this direcectory we have discussion about behavior of useState while multiple increasing/decreasing count on same function
```

## Scenario:

```
const incCount = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};
```

## Is count increased by 4?

-> No

## Why?

- React batches state updates inside the same function/sync block.
- All setCount(count + 1) use the same stale value of count.
- So only the last update takes effect, not all four.

## Correct way (Functional update):

```
const incCount = () => {
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
};
```

## Result:

- This increases count by 4 because it uses the latest state each time.
