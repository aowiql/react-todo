import "./component.css";

interface TodoTaskProp {
  task: string;
  done: boolean;
}

const TodoTask = ({ task, done }: TodoTaskProp) => {
  return (
    <>
      {done ? (
        <div className="todoTask">
          <span>{task}</span>
          <button>수정</button>
          <button>완료</button>
        </div>
      ) : (
        <div className="todoTask">
          <span>{task}</span>
          <button>복귀</button>
          <button>삭제</button>
        </div>
      )}
      <div className="todoTaskLine"></div>
    </>
  );
};

export default TodoTask;
