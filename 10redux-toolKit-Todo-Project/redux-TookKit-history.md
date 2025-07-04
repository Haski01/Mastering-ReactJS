# History Behind Redux Toolkit – From Flux to Redux Toolkit

## 1. Flux Architecture (by Facebook)

### What is Flux?

- Flux is a design pattern developed by Facebook.
- It was created to manage unidirectional data flow in large React applications.

#### Flux Flow:

```
View (Component)
↓ triggers
Action
↓ goes to
Dispatcher
↓ sends to
Store
↓ updates
View
```

### Problems with Flux:

- Too much boilerplate: You had to write separate files for actions, stores, and dispatchers.
- Manual wiring: Developer had to manually connect everything.
- Complexity increased as app grew.
- Debugging was hard in large apps.

## 2. Redux (Created by Dan Abramov)

### Redux Simplified Flux:

- Removed Dispatcher.
- **Uses a single Store instead of multiple stores.**
- **Introduced pure reducers/function to update the state.**

#### Redux Flow:

```
Component → dispatch(Action)
↓
Reducer (pure function)
↓
New State (in Store)
↓
Component (re-renders)
```

### Problems with Redux (Classic):

- A lot of boilerplate code:

  - Write action types.
  - Write action creators.
  - Write reducers.

- Setting up middleware, dev tools, etc., was manual and confusing.
- Difficult for beginners to learn.
- Handling async logic (API calls) was not built-in (needed redux-thunk, redux-saga, etc.)

### 3. Redux Toolkit (RTK)

- Created by Redux Team (official) to solve Redux’s pain points.

### Why Redux Toolkit?

- To reduce boilerplate.
- To make Redux beginner-friendly.
- To simplify store setup.
- To handle async operations easily.
- To ensure best practices by default.
