import "./component.css";

import React from "react";
import { useStore } from "../store/store";

interface TodoTaskProp {
  task: string;
  done: boolean;
  todoId: number;
}

const TodoTask = ({ task, done, todoId }: TodoTaskProp) => {
  const { doneTodo, deleteTodo, updateTodo } = useStore();

  const [editing, setEditing] = useStore((state) => [
    state.editing,
    state.setEditing,
  ]);

  const [editedTask, setEditedTask] = useStore((state) => [
    state.editedTask,
    state.setEditedTask,
  ]);

  const todoDoneHandler = () => {
    doneTodo(todoId);
  };

  const delTodoHandler = () => {
    deleteTodo(todoId);
  };

  const updateTodoHandler = () => {
    updateTodo(todoId, editedTask);
    setEditing(!editing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateTodoHandler();
    }
  };

  return (
    <>
      {done ? (
        <div className="todoTask" key={todoId}>
          {editing ? (
            <input
              type="text"
              value={editedTask}
              placeholder={task}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              autoFocus
            />
          ) : (
            <span>{task}</span>
          )}
          <button onClick={updateTodoHandler}>수정</button>
          <button onClick={todoDoneHandler}>완료</button>
        </div>
      ) : (
        <div className="todoTask done" key={todoId}>
          <span>{task}</span>
          <button onClick={todoDoneHandler}>복귀</button>
          <button onClick={delTodoHandler}>삭제</button>
        </div>
      )}
      <div className="todoTaskLine"></div>
    </>
  );
};

export default TodoTask;
