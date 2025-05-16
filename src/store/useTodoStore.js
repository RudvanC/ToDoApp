import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:3001/todos";

export const useTodoStore = create((set) => ({
  todos: [],
  loading: false,
  error: null,
  
  // Fetch all todos
  fetchTodos: async () => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get(API_URL);
      set({ todos: response.data, loading: false });
    } catch (error) {
      set({ error: 'Error al cargar las tareas', loading: false });
      console.error('Error fetching todos:', error);
    }
  },

  // Add a new todo
  addTodo: async (text) => {
    try {
      const newTodo = { text, completed: false };
      const response = await axios.post(API_URL, newTodo);
      set((state) => ({
        todos: [...state.todos, response.data],
        error: null
      }));
      return response.data;
    } catch (error) {
      set({ error: 'Error al agregar la tarea' });
      console.error('Error adding todo:', error);
      throw error;
    }
  },

  // Toggle todo completion
  toggleTodo: async (id) => {
    try {
      const todo = useTodoStore.getState().todos.find(t => t.id === id);
      const updatedTodo = { ...todo, completed: !todo.completed };
      await axios.put(`${API_URL}/${id}`, updatedTodo);
      
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? updatedTodo : todo
        ),
        error: null
      }));
    } catch (error) {
      set({ error: 'Error al actualizar la tarea' });
      console.error('Error toggling todo:', error);
    }
  },

  // Delete a todo
  deleteTodo: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
        error: null
      }));
    } catch (error) {
      set({ error: 'Error al eliminar la tarea' });
      console.error('Error deleting todo:', error);
    }
  },

  // Update todo text
  updateTodo: async (id, newText) => {
    try {
      const todo = useTodoStore.getState().todos.find(t => t.id === id);
      const updatedTodo = { ...todo, text: newText };
      await axios.put(`${API_URL}/${id}`, updatedTodo);
      
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? updatedTodo : todo
        ),
        error: null
      }));
    } catch (error) {
      set({ error: 'Error al actualizar la tarea' });
      console.error('Error updating todo:', error);
    }
  },
}));
