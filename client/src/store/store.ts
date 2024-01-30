import create from "zustand";

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  doneTodo: (id: number) => void;
}

let idCount = 0;

export const useStore = create<TodoStore>((set) => ({
  todos: [
    { id: 0, task: "test1", done: false },
    { id: 1, task: "test2", done: true },
  ],
  addTodo: (task) =>
    set((state) => ({
      todos: [...state.todos, { id: idCount++, task, done: true }],
    })),
  doneTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),
}));
