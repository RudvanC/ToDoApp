import { describe, it, expect, beforeEach, afterAll } from "vitest";
import { useTodoStore } from "../store/useTodoStoreJSON";

// Mock fetch (evitamos pegarle a JSON Server en tests)
beforeAll(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, text: "Mock Todo 1", completed: false },
          { id: 2, text: "Mock Todo 2", completed: true },
        ]),
    })
  );
});

describe("useTodoStore con fetch mockeado", () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [] });
  });

  it("debería hacer fetch y cargar todos", async () => {
    await useTodoStore.getState().fetchTodos();
    const todos = useTodoStore.getState().todos;

    expect(fetch).toHaveBeenCalledWith("http://localhost:3001/todos");
    expect(todos).toHaveLength(2);
    expect(todos[0].text).toBe("Mock Todo 1");
  });
});

afterAll(() => {
  vi.restoreAllMocks();
});
