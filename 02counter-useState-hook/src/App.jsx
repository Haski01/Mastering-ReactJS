import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  let incCount = () => {
    if (count < 20) setCount(count + 1);
  };

  let decCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      <h1>useState Hook</h1>
      <h2>Counter Value: {count}</h2>
      <button style={{ backgroundColor: "green" }} onClick={incCount}>
        +1
      </button>
      <button style={{ backgroundColor: "red" }} onClick={decCount}>
        -1
      </button>
    </>
  );
}

export default App;
