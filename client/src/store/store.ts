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
  todos: [],

  inputValue: "",
  setInputValue: (value: string) => set({ inputValue: value }),
}));
