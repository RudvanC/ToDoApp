import { useState, useEffect } from "react";
import { useTodoStore } from "./store/useTodoStore";
import TodoList from "./components/Todo/TodoList";
import axios from "axios";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [cageQuote, setCageQuote] = useState("");
  const { todos, addTodo, loading, error, fetchTodos } = useTodoStore();

  useEffect(() => {
    const fetchInitialData = async () => {
      // Fetch Nicolas quote
      try {
        const quoteResponse = await axios.get('https://api.quotable.io/random?tags=motivational');
        setCageQuote(`Nicolas dice: "${quoteResponse.data.content}"`);
      } catch (error) {
        setCageQuote("Nicolas está ocupado siendo increíble en este momento.");
      }
      
      // Fetch todos from json-server
      await fetchTodos();
    };

    fetchInitialData();
  }, [fetchTodos]);

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 p-8">
      <div
        className="
          bg-gradient-to-br from-blue-100 to-blue-50
          rounded-3xl
          shadow-2xl shadow-blue-200/50
          p-8
          w-full max-w-md
          border border-blue-800
          backdrop-blur-sm
        "
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">
          My ToDo App <span className="text-green-400">✅</span>
        </h1>
        {cageQuote && (
          <p className="text-center text-blue-600 italic mb-6 text-sm">
            {cageQuote}
          </p>
        )}

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe una tarea..."
            className="
              flex-grow
              bg-white/80 text-blue-900 placeholder-blue-400
              border border-blue-200
              rounded-xl
              px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-blue-400
              transition-all duration-200
              shadow-sm
            "
          />
          <button
            onClick={handleAdd}
            className="
              bg-cyan-600
              text-white
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
