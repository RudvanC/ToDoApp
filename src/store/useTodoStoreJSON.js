import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  fetchTodos: async () => {
    const res = await fetch("http://localhost:3001/todos");
    const data = await res.json();
    set({ todos: data });
  },
}));
