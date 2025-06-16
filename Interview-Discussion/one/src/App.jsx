import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  /*
  -> here count increase by one
  const incCount = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  */

  const incCount = () => {
    setCount((preValue) => preValue + 1);
    setCount((preValue) => preValue + 1);
    setCount((preValue) => preValue + 1);
    setCount((preValue) => preValue + 1);
  };

  const decCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Inrterview question discussion</h1>
      <h2>count val: {count}</h2>

      <button
        onClick={incCount}
        style={{
          backgroundColor: "green",
          marginRight: "1rem",
        }}
      >
        +1
      </button>

      <button
        onClick={decCount}
        style={{
          backgroundColor: "red",
        }}
      >
        -1
      </button>
    </>
  );
}

export default App;
