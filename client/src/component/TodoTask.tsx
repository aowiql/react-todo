import "./component.css";

import { useStore } from "../store/store";

interface TodoTaskProp {
  task: string;
  done: boolean;
  todoId: number;
}

const TodoTask = ({ task, done, todoId }: TodoTaskProp) => {
  const { doneTodo } = useStore();

  const todoDoneHandler = () => {
    console.log("Clicked 완료 button with id:", todoId);
    doneTodo(todoId);
  };

  return (
    <>
      {done ? (
        <div className="todoTask" key={todoId}>
          <span>{task}</span>
          <button>수정</button>
          <button onClick={todoDoneHandler}>완료</button>
        </div>
      ) : (
        <div className="todoTask" key={todoId}>
          <span>{task}</span>
          <button onClick={todoDoneHandler}>복귀</button>
          <button>삭제</button>
        </div>
      )}
      <div className="todoTaskLine"></div>
    </>
  );
};

export default TodoTask;
