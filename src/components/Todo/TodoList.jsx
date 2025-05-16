import { useTodoStore } from "../../store/useTodoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <ul
      className="
        max-w-xl mx-auto mt-10 p-6
        bg-gradient-to-br from-blue-50 to-blue-100
        rounded-2xl
        border border-blue-200
        shadow-lg shadow-blue-200/50
        backdrop-blur-sm
        overflow-hidden
      "
    >
      {todos.length === 0 ? (
        <li className="text-center text-blue-800 italic py-6 select-none">
          ✨¡Aun no hay tareas, añade una! ✨
        </li>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
}
