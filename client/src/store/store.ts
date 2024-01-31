import create from "zustand";

interface Todo {
  id: number;
  todoTask: string;
  todoDone: boolean;
}

interface TodoStore {
  todos: Todo[];

  inputValue: string;
  setInputValue: (value: string) => void;
}

export const useStore = create<TodoStore>((set) => ({
  todos: [
    // { id: 0, task: "test1", done: false },
    // { id: 1, task: "test2", done: true },
  ],

  inputValue: "",
  setInputValue: (value: string) => set({ inputValue: value }),
}));
