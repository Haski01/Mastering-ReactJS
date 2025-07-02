# Notes

```
  - In this directory we understand what is Context API and why we need of it
  - Context API is associated with pure and pure in REACT
  - Learning about what is Redux:
    - Redux helps in "State Management" means passing data in organize way..
    - Redux is an stand alone or independent liberary..
    - To work with react we have "REACT-REDUX"
    - Easier vertion of reduc is "REDUX-TOOLKIT(RTK)"
```

## What is Context API?

    - Context API is a built-in feature in React.
    - It allows you to share data (like variables, functions, or state) between components without having to pass props manually at every level (called "prop drilling").

## Why we need it ?

    - before context Api we passed data or props at each level to pass inner most component, as in the result those component which do not want that pop aslo acces data..
    - Helps when many components need access to the same data (like theme, language, user info).
    - Avoids "prop drilling" – passing props from parent → child → grandchild unnecessarily.

## Real-life Example:

### Without Context:

```javascript
<App>
  <Parent>
    <Child user={user}>
      <GrandChild user={user} />
    </Child>
  </Parent>
</App>
```

### With Context:

```javascript
<UserContext.Provider value={user}>
  <App />
</UserContext.Provider>
```

Note:- Now any component (Child, GrandChild) can directly access user without receiving it as a prop.

### How to Use Context API [STEPS]

1.  Create Context

```js
const UserContext = React.createContext();
```

2.  Provide Context

```js
<UserContext.Provider value={user}>
  <App />
</UserContext.Provider>
```

3.  Consume Context

```js
const user = useContext(UserContext);
```

## Redux

### What is Redux?

- Redux is a state management library for JavaScript apps.
- It helps you store and manage global state in a central place (store).

## Key Concepts:

- Store: Global state container
- Action: An object that describes what happened ({ type: "INCREMENT" })
- Reducer: A function that decides how state changes
- Dispatch: Sends an action to reducer to update state

  ### Example Flow:

  1.  Dispatch an action ➡️
  2.  Reducer receives it ➡️
  3.  Updates the store ➡️
  4.  UI gets updated

## React-Redux

### What is React-Redux?

- It's the official React binding for Redux.
- Helps React components connect to Redux store easily.

### Core Functions:

- Provider: Wraps app & gives access to store
- useSelector(): Get data from store
- useDispatch(): Send actions to store

### Example:

```javascript
const count = useSelector((state) => state.count);
const dispatch = useDispatch();
dispatch({ type: "INCREMENT" });
```

## Redux Toolkit (RTK)

### What is Redux Toolkit?

- It's the official, recommended way to write Redux logic.

- Reduces boilerplate code.

- Built on top of Redux.

### Features:

- Simplified store setup (configureStore)
- Simplified reducers (createSlice)
- Built-in middleware (like redux-thunk)
- Better structure for big apps

### Core Tools:

- configureStore(): Create the store
- createSlice(): Combines actions & reducers
- createAsyncThunk(): Handles async actions
