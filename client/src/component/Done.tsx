import { useStore } from "../store/store";
import TodoTask from "./TodoTask";
import "./component.css";

const Done = () => {
  const { todos } = useStore();

  return (
    <div className="activetitle">
      <h1>Done</h1>
      <div className="activeline"></div>
      {todos.map((todo) =>
        todo.done ? (
          <></>
        ) : (
          <TodoTask key={todo.id} done={todo.done} task={todo.task} />
        )
      )}
    </div>
  );
};

export default Done;
