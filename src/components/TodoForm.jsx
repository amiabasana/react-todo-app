import React, { useState } from "react";
import { Plus } from "lucide-react";

function TodoForm({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task.trim());
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-6"
    >
      <input
        type="text"
        placeholder="Add a new todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white text-sm sm:text-base"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        <Plus size={18} /> Add
      </button>
    </form>
  );
}

export default TodoForm;
