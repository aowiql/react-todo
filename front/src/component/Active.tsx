import "./component.css";
import { useStore } from "../store/store";
import TodoTask from "./TodoTask";

const Active = () => {
  const { todos } = useStore();

  return (
    <div className="activetitle" key="active">
      <h1>Active</h1>
      <div className="activeline" key="activeLine"></div>
      {todos.map((todo) =>
        todo.done ? (
          <TodoTask
            key={todo.id}
            task={todo.task}
            todoId={todo.id}
            done={todo.done}
          />
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default Active;
