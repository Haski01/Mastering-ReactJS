## Summary of Setup Steps Redux TookKit in React

    Install: @reduxjs/toolkit and react-redux

    Create slice: Using createSlice()

    Create store: Using configureStore()

    Wrap app: With <Provider store={store}>

    Use: useSelector() and useDispatch() in components

Setup Redux Toolkit in React
✅ Step 1: Install Required Packages

npm install @reduxjs/toolkit react-redux

✅ Step 2: Create a Redux Slice

➡️ Create a file like features/counter/counterSlice.js

// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
value: 0,
};

const counterSlice = createSlice({
name: 'counter',
initialState,
reducers: {
increment: (state) => {
state.value += 1;
},
decrement: (state) => {
state.value -= 1;
},
incrementByAmount: (state, action) => {
state.value += action.payload;
},
},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

✅ Step 3: Create the Redux Store

➡️ Create a file like app/store.js

// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
reducer: {
counter: counterReducer,
},
});

✅ Step 4: Provide the Store to React App

➡️ Wrap your <App /> in <Provider> inside main.jsx or index.js

// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App />
</Provider>
);

✅ Step 5: Use Redux State in Components

➡️ Use useSelector to read state
➡️ Use useDispatch to send actions

// Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

function Counter() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();

return (

<div>
<h2>Count: {count}</h2>
<button onClick={() => dispatch(increment())}>➕</button>
<button onClick={() => dispatch(decrement())}>➖</button>
</div>
);
}

export default Counter;
