// Importa el hook useState de React para manejar el estado local
import { useState } from "react";
// Importa el store personalizado para manejar las acciones de las tareas
import { useTodoStore } from "../../store/useTodoStore";

// Componente que representa un solo ítem/tarea en la lista
export default function TodoItem({ todo }) {
  // Obtiene las funciones del store para cambiar, eliminar y actualizar tareas
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  // Estado local para saber si el ítem está en modo edición
  const [isEditing, setIsEditing] = useState(false);
  // Estado local para almacenar el nuevo texto al editar
  const [newText, setNewText] = useState(todo.text);

  // Función que guarda los cambios al editar el texto
  const handleSave = () => {
    if (newText.trim() !== "") {
      updateTodo(todo.id, newText.trim()); // Actualiza el texto de la tarea
      setIsEditing(false); // Sale del modo edición
    }
  };

  return (
    // Cada tarea se muestra como un elemento de lista estilizado
    <li
      className="flex flex-col p-5 mb-4 rounded-xl
        bg-white/90 backdrop-blur-sm
        shadow-md shadow-blue-200/30
        border border-blue-200/80
        text-blue-900
        transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-200/50"
    >
      {/* Si está en modo edición, muestra el input y botones para guardar/cancelar */}
      {isEditing ? (
        <div className="flex items-center gap-3">
          {/* Input para editar el texto de la tarea */}
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-[130px] bg-white/80 text-blue-900 border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
            autoFocus
          />
          {/* Botón para guardar los cambios */}
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
          >
            Save
          </button>
          {/* Botón para cancelar la edición */}
          <button
            onClick={() => setIsEditing(false)}
            className="bg-rose-500 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
          >
            Cancel
          </button>
        </div>
      ) : (
        // Si no está en modo edición, muestra el contenido normal de la tarea
        <div className="flex items-center justify-between">
          {/* Checkbox para marcar la tarea como completada o no */}
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)} // Cambia el estado de completado
              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                todo.completed
                  ? "bg-blue-600 border-blue-600"
                  : "border-blue-400"
              } cursor-pointer transition-colors`}
            />
            {/* Muestra el texto de la tarea, tachado si está completada */}
            <span
              className={`text-lg font-medium select-none ${
                todo.completed ? "line-through text-blue-400" : "text-blue-900"
              }`}
            >
              {todo.text}
            </span>
          </div>
          {/* Botones para editar o eliminar la tarea */}
          <div className="flex gap-3">
            {/* Botón para activar el modo edición */}
            <button
              onClick={() => setIsEditing(true)}
              aria-label="Edit todo"
              className="p-2 text-blue-600 hover:text-blue-700 rounded-lg transition-colors"
            >
              {/* Icono de editar */}
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
            {/* Botón para eliminar la tarea */}
            <button
              onClick={() => deleteTodo(todo.id)}
              aria-label="Delete todo"
              className=" text-rose-500 hover:text-rose-600 transition-colors"
            >
              {/* Icono de eliminar */}
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
