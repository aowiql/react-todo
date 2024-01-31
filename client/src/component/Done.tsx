import { useEffect, useRef, useState } from "react";
import { useStore } from "../store/store";
import TodoTask from "./TodoTask";
import "./component.css";
import { getTodoItems } from "../api/getTodo";
import { useQuery } from "react-query";

interface Todos {
  id: number;
  todoTask: string;
  todoDone: boolean;
}

const Done = () => {
  const { todos } = useStore();

  const backUrl = "http://localhost:8080";

  // const [todoItems, setTodoItems] = useState<Todos[]>([]);

  const { data: todoItems } = useQuery<Todos[]>("todoItems", () =>
    getTodoItems(backUrl)
  );

  useEffect(() => {
    const fetchTodoItems = async () => {
      try {
        const data = await getTodoItems(backUrl);
        // setTodoItems(data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchTodoItems();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [todos]);

  return (
    <div className="activetitle" ref={scrollRef}>
      <h1>Done</h1>
      <div className="activeline"></div>
      {todoItems?.map((todo) =>
        todo.todoDone ? (
          <></>
        ) : (
          <TodoTask
            key={todo.id}
            done={todo.todoDone}
            task={todo.todoTask}
            todoId={todo.id}
          />
        )
      )}
    </div>
  );
};

export default Done;
