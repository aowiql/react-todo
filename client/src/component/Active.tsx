import "./component.css";
import { useStore } from "../store/store";
import TodoTask from "./TodoTask";
import { useEffect, useState } from "react";
import { getTodoItems } from "../api/getTodo";
import { useQuery } from "react-query";

interface Todos {
  id: number;
  todoTask: string;
  todoDone: boolean;
}

const Active = () => {
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
  }, [todos]);

  return (
    <div className="activetitle" key="active">
      <h1>Active</h1>
      <div className="activeline" key="activeLine"></div>
      {todoItems?.map((todo) =>
        todo.todoDone ? (
          <TodoTask
            key={todo.id}
            task={todo.todoTask}
            todoId={todo.id}
            done={todo.todoDone}
          />
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default Active;
