import { useEffect, useRef } from "react";
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
  const backUrl = "http://localhost:8080";

  const { data: todoItems, refetch } = useQuery<Todos[]>("todoItems", () =>
    getTodoItems(backUrl)
  );

  const fetchTodoItems = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchTodoItems();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [todoItems]);

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
