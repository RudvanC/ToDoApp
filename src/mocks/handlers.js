import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/todos", () => {
    return HttpResponse.json([
      { id: 1, text: "Todo 1", completed: false },
      { id: 2, text: "Todo 2", completed: true },
    ]);
  }),
];
