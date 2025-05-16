import { useTodoStore } from "../../store/useTodoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <ul
      className="
        max-w-xl mx-auto mt-10 p-4
        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
        rounded-xl
        border border-cyan-600
        shadow-lg shadow-cyan-600/40
        backdrop-blur-md
        overflow-hidden
      "
    >
      {todos.length === 0 ? (
        <li className="text-center text-cyan-400 italic py-6 select-none">
          ¡No tienes tareas aún, agrega una y comienza a brillar! ✨
        </li>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
}
