import React from "react";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="flex justify-between items-center bg-gray-50 border rounded-lg px-3 py-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
