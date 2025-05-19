// Importa el store personalizado para acceder a la lista de tareas
import { useTodoStore } from "../../store/useTodoStore";
// Importa el componente que representa cada tarea individual
import TodoItem from "./TodoItem";

// Componente que representa la lista completa de tareas
export default function TodoList() {
  // Obtiene la lista de tareas del store global
  const todos = useTodoStore((state) => state.todos);

  return (
    // La lista de tareas se muestra como un <ul> estilizado
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
      {/* Si no hay tareas, muestra un mensaje animando a añadir una */}
      {todos.length === 0 ? (
        <li className="text-center text-blue-800 italic py-6 select-none">
          ✨¡Aun no hay tareas, añade una! ✨
        </li>
      ) : (
        // Si hay tareas, las recorre y muestra cada una usando el componente TodoItem
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
}
