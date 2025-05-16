import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import { useTodoStore } from "../store/useTodoStore";
import axios from "axios";

vi.mock("axios");

function TestComponent() {
  const { todos, addTodo, toggleTodo, deleteTodo, fetchTodos } = useTodoStore();
  return (
    <div>
      <button onClick={() => addTodo("Tarea de prueba")}>Add</button>
      <button onClick={() => toggleTodo(todos[0]?.id)}>Toggle</button>
      <button onClick={() => deleteTodo(todos[0]?.id)}>Delete</button>
      <button onClick={() => fetchTodos()}>Fetch</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid="todo-item">
            {todo.text} - {todo.completed ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

describe("useTodoStore (con API)", () => {
  // Limpiar estado y mocks antes de cada test
  beforeEach(() => {
    useTodoStore.setState({ todos: [], loading: false, error: null });
    vi.clearAllMocks();
  });

  it("agrega una tarea correctamente", async () => {
    // Mock de axios.post
    axios.post.mockResolvedValueOnce({
      data: { id: "123", text: "Tarea de prueba", completed: false }
    });

    render(<TestComponent />);
    await act(async () => {
      screen.getByText("Add").click();
    });
    await waitFor(() => {
      expect(screen.getByTestId("todo-item")).toHaveTextContent("Tarea de prueba");
    });
  });

  it("marca una tarea como completada", async () => {
    // Estado inicial y mock de axios.put
    useTodoStore.setState({
      todos: [{ id: "1", text: "Tarea", completed: false }],
      loading: false,
      error: null
    });
    axios.put.mockResolvedValueOnce({});

    render(<TestComponent />);
    await act(async () => {
      screen.getByText("Toggle").click();
    });
    await waitFor(() => {
      expect(screen.getByTestId("todo-item")).toHaveTextContent("Done");
    });
  });

  it("elimina una tarea correctamente", async () => {
    // Estado inicial y mock de axios.delete
    useTodoStore.setState({
      todos: [{ id: "1", text: "Tarea", completed: false }],
      loading: false,
      error: null
    });
    axios.delete.mockResolvedValueOnce({});

    render(<TestComponent />);
    await act(async () => {
      screen.getByText("Delete").click();
    });
    await waitFor(() => {
      expect(screen.queryByTestId("todo-item")).toBeNull();
    });
  });

  it("fetchTodos carga tareas del backend", async () => {
    // Mock de axios.get
    axios.get.mockResolvedValueOnce({
      data: [{ id: "1", text: "Tarea backend", completed: false }]
    });

    render(<TestComponent />);
    await act(async () => {
      screen.getByText("Fetch").click();
    });
    await waitFor(() => {
      expect(screen.getByTestId("todo-item")).toHaveTextContent("Tarea backend");
    });
  });
});
