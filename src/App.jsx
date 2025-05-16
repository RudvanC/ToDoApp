import { useState } from "react";
import { useTodoStore } from "./store/useTodoStore";
import TodoList from "./components/Todo/TodoList";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div
        className="
          bg-gradient-to-tr from-gray-800 to-gray-900
          rounded-3xl
          shadow-cyan-700/70 shadow-lg
          p-8
          w-full max-w-md
          border border-cyan-600
          backdrop-blur-sm
        "
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center text-cyan-400 drop-shadow-lg">
          My ToDo App <span className="text-green-400">✅</span>
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe una tarea..."
            className="
              flex-grow
              bg-gray-900 text-cyan-200 placeholder-cyan-500
              border border-cyan-600
              rounded-xl
              px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-cyan-400
              transition
              shadow-inner
            "
          />
          <button
            onClick={handleAdd}
            className="
              bg-cyan-600
              text-gray-900
              px-6 py-3
              rounded-xl
              font-semibold
              hover:bg-cyan-500
              transition
              shadow-md
              active:scale-95
            "
          >
            Añadir
          </button>
        </div>

        <TodoList />
      </div>
    </div>
  );
}
