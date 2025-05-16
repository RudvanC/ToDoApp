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
      className="flex flex-col p-5 mb-4 rounded-xl
        bg-white/90 backdrop-blur-sm
        shadow-md shadow-blue-200/30
        border border-blue-200/80
        text-blue-900
        transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-200/50"
    >
      {isEditing ? (
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-[130px] bg-white/80 text-blue-900 border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
            autoFocus
          />
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-rose-500 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
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
              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                todo.completed
                  ? "bg-blue-600 border-blue-600"
                  : "border-blue-400"
              } cursor-pointer transition-colors`}
            />
            <span
              className={`text-lg font-medium select-none ${
                todo.completed ? "line-through text-blue-400" : "text-blue-900"
              }`}
            >
              {todo.text}
            </span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(true)}
              aria-label="Edit todo"
              className="p-2 text-blue-600 hover:text-blue-700 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              aria-label="Delete todo"
              className=" text-rose-500 hover:text-rose-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-rose-500 hover:text-rose-600"
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
