import "./component.css";

import TodoTask from "./TodoTask";
import { getTodoItems } from "../api/getTodo";
import { useQuery } from "react-query";

interface Todos {
  id: number;
  todoTask: string;
  todoDone: boolean;
}

const Active = () => {
  const backUrl = "http://localhost:8080";

  const { data: todoItems } = useQuery<Todos[]>("todoItems", () =>
    getTodoItems(backUrl)
  );

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
