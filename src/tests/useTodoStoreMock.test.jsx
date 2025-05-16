import { describe, it, expect, beforeEach } from "vitest";
import { useTodoStore } from "../store/useTodoStoreMock";
import { act } from "@testing-library/react";

describe("useTodoStore con API mock", () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [] });
  });

  it("debería hacer fetch y cargar todos desde la API", async () => {
    await act(async () => {
      await useTodoStore.getState().fetchTodos();
    });

    const todos = useTodoStore.getState().todos;
    expect(todos).toHaveLength(2);
    expect(todos[0].text).toBe("Todo 1");
  });
});
