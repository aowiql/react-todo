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
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newTask: string) => void;
}

let idCount = 2;

export const useStore = create<TodoStore>((set) => ({
  todos: [
    { id: 0, task: "test1", done: false },
    { id: 1, task: "test2", done: true },
  ],
  // 글쓰기
  addTodo: (task) =>
    set((state) => ({
      todos: [...state.todos, { id: idCount++, task, done: true }],
    })),

  // 완료
  doneTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),

  //삭제
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  // 수정
  updateTodo: (id, newTask) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      ),
    })),
}));
