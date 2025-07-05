# Important Points

```
    - In this repo we learn about redux,react-redux and redux-tookKit..
    - they are all state management third party liberaries..
    - we use redux-tookKit
    - learning about some key words
        - store
        - reducer
        - useSelector():
        - useDispatch():
```

## instalation redux-tookKit

```
npm install @reduxjs/toolkit
npm install react-redux
```

## problem they face before redux-tookkit

```
    - manage state
    - central store
    - data flow: means their is no proper way to send data into central store and receive data from store..(lack of proper structure)
```

## 1. What is Redux?

### Definition:

- **Redux is a state management library for JavaScript apps.**
- It helps you manage and share state (data) between components in a predictable way.

### Key Concepts:

- **Store**: Central place to keep the state of your entire app.
- **Actions**: Plain objects that describe what happened (e.g., { type: "ADD_TODO" })
- **Reducers**: Functions that take current state + action and return new state.

### Why Redux?

- Useful when multiple components need access to the same data.
- Helps avoid "prop drilling" (passing data through many components).
- Makes debugging easier (state is predictable and traceable).

## 2. What is React-Redux?

### Definition:

- React-Redux is a binding library that connects React components with the Redux store.

### Purpose:

- Lets you use Redux with React easily.
- Provides Provider, useSelector, and useDispatch hooks to interact with the store.

### Main Tools:

- **< Provider store={store} > →** Wrap your app to give Redux access.
- **useSelector(state => state.xyz) →** Read data from store.
- **useDispatch() →** Send actions to the store (dispatch means bhejna, dispatch reducer/function ko use karte hue store main changes karta h) .

## 3. What is Redux Toolkit (RTK)?

### Definition:

- Redux Toolkit is the official, recommended way to write Redux logic.

### Why RTK?

- Makes Redux code shorter, cleaner, and easier.
- Automatically sets up the store.
- Helps avoid boilerplate code (like writing long action and reducer files).

### Key Features:

- **configureStore() →** Creates the store with good defaults.
- **createSlice() →** Combines reducer + actions in one place.
- **createAsyncThunk() →** Handles API calls and async logic.
