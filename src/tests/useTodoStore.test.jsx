import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { useTodoStore } from "../store/useTodoStore";

function TestComponent() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();
  return (
    <div>
      <button onClick={() => addTodo("Tarea de prueba")}>Add</button>
      <button onClick={() => toggleTodo(todos[0]?.id)}>Toggle</button>
      <button onClick={() => deleteTodo(todos[0]?.id)}>Delete</button>
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

describe("useTodoStore", () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [] });
  });

  it("debería añadir un todo", () => {
    render(<TestComponent />);
    act(() => {
      screen.getByText("Add").click();
    });
    expect(screen.getByTestId("todo-item").textContent).toContain(
      "Tarea de prueba"
    );
  });

  it("debería alternar completed de un todo", () => {
    render(<TestComponent />);
    act(() => {
      screen.getByText("Add").click();
    });
    act(() => {
      screen.getByText("Toggle").click();
    });
    expect(screen.getByText(/Done/)).toBeInTheDocument();
  });

  it("debería eliminar un todo", () => {
    render(<TestComponent />);
    act(() => {
      screen.getByText("Add").click();
    });
    act(() => {
      screen.getByText("Delete").click();
    });
    expect(screen.queryByTestId("todo-item")).toBeNull();
  });
});
