import { useTodoStore } from "../../store/useTodoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500">No hay tareas todavía 🎉</p>
    );
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
