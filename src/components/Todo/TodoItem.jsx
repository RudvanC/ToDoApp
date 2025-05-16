import { useTodoStore } from "../../store/useTodoStore";

export default function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <li className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 text-blue-500"
        />
        <span
          className={`text-gray-800 ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        🗑️
      </button>
    </li>
  );
}
