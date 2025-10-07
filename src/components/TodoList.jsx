import React from "react";
import { Trash2, CheckCircle, Circle } from "lucide-react";

function TodoList({ todos = [], onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No todos yet 🚀</p>;
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
        >
          <button
            onClick={() => onToggle(todo.id)}
            className="flex items-center gap-2 sm:gap-3 flex-1 text-left"
          >
            {todo.completed ? (
              <CheckCircle className="text-green-500 flex-shrink-0" />
            ) : (
              <Circle className="text-gray-400 flex-shrink-0" />
            )}
            <span
              className={`break-words ${
                todo.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {todo.text}
            </span>
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="mt-2 sm:mt-0 text-red-500 hover:text-red-600 transition self-end sm:self-auto"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
