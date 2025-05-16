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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">My ToDo App ✅</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe una tarea..."
            className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Añadir
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
}
