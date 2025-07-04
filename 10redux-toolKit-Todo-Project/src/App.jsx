import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Learn about redux toolKit!
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
