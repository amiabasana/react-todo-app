import React, { Suspense, lazy, useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";

const TodoList = lazy(() => import("./components/TodoList"));

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch todos from REST API (only 5 for demo)
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const data = await res.json();
        setTodos(
          data.map((todo) => ({
            id: todo.id,
            text: todo.title,
            completed: todo.completed,
          }))
        );
      } catch (err) {
        console.error("Error fetching todos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // ✅ Add todo
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  // ✅ Toggle todo
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ✅ Delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl shadow-2xl rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-gray-800 dark:text-white drop-shadow-sm">
          ✅ Todo App
        </h1>

        <TodoForm onAdd={addTodo} />

        <Suspense fallback={<p className="text-center mt-4">Loading todos...</p>}>
          {loading ? (
            <p className="text-center text-gray-500">Fetching todos...</p>
          ) : (
            <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
          )}
        </Suspense>
      </div>

      <footer className="mt-6 sm:mt-8 text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center">
        Built with ❤️ using React, Tailwind & REST API
      </footer>
    </div>
  );
}

export default App;
