import { create } from 'zustand';

export const useTodoStore = create((set) => ({
  todos: [],
  fetchTodos: async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    set({ todos: data });
  },
}));
