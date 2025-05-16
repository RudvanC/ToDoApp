import { useState } from "react";
import { useTodoStore } from "../../store/useTodoStore";

export default function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim() !== "") {
      updateTodo(todo.id, newText.trim());
      setIsEditing(false);
    }
  };

  return (
    <li
      className="flex flex-col p-4 mb-4 rounded-lg
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
        shadow-lg shadow-cyan-500/50
        border border-cyan-600
        text-cyan-100
        transition-transform duration-200 hover:scale-[1.02]"
    >
      {isEditing ? (
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="flex-grow bg-gray-800 text-cyan-100 border border-cyan-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            autoFocus
          />
          <button
            onClick={handleSave}
            className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold px-4 py-2 rounded-md shadow-md transition"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-red-600 hover:bg-red-700 text-gray-100 font-semibold px-4 py-2 rounded-md shadow-md transition"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-6 h-6 accent-cyan-400 hover:accent-cyan-500 transition"
            />
            <span
              className={`text-lg font-semibold select-none ${
                todo.completed
                  ? "line-through text-gray-500 italic"
                  : "text-cyan-100"
              }`}
            >
              {todo.text}
            </span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(true)}
              aria-label="Edit todo"
              className="p-2 rounded-md hover:bg-cyan-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-cyan-400 hover:text-cyan-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-7-7l7 7"
                />
              </svg>
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              aria-label="Delete todo"
              className="p-2 rounded-md hover:bg-red-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 hover:text-red-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
