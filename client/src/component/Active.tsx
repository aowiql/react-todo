import "./component.css";
import { useStore } from "../store/store";
import TodoTask from "./TodoTask";

const Active = () => {
  const { todos } = useStore();

  return (
    <div className="activetitle">
      <h1>Active</h1>
      <div className="activeline"></div>
      {todos.map((todo) =>
        todo.done ? (
          <TodoTask key={todo.id} task={todo.task} done={todo.done} />
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default Active;
