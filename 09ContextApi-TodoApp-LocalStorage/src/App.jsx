import { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  // create todo method
  const addTodo = (todo) => {
    setTodos((prevTodo) => [...prevTodo, { id: Date.now(), ...todo }]);
  };

  // edit todo method
  const updateTodo = (id, todo) => {
    setTodos((prevTodo) =>
      prevTodo.map((indivitualTodo) =>
        indivitualTodo.id === id ? todo : indivitualTodo
      )
    );
  };

  // distroy todo method
  const deleteTodo = (id) => {
    setTodos((prevTodo) =>
      prevTodo.filter((indivitualTodo) => indivitualTodo.id !== id)
    );
  };

  // complete or inComplete todo method
  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((indivitualTodo) =>
        indivitualTodo.id === id
          ? { ...indivitualTodo, completed: !indivitualTodo.completed }
          : indivitualTodo
      )
    );
  };

  // function to query todo lists from localStorage and render it when application first mount or reload
  useEffect(() => {
    // query todos from local storage, recive in string formate
    const allTodos = JSON.parse(localStorage.getItem("todos"));

    if (allTodos && allTodos.length > 0) {
      setTodos(allTodos);
    }
  }, []);

  // method to store todo in local storage when todo add into list
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}

            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {todos.map((indivitualTodo) => (
              <div key={indivitualTodo.id} className="w-full">
                <TodoItem todo={indivitualTodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
