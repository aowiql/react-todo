import "./component.css";

import React, { useState } from "react";
import { deleteTodoBackend } from "../api/deleteTodo";
import { useMutation, useQueryClient } from "react-query";
import { TodoItem, doneTodo } from "../api/doneTodo";

interface TodoTaskProp {
  task: string;
  done: boolean;
  todoId: number;
}

const TodoTask = ({ task, done, todoId }: TodoTaskProp) => {
  const backUrl = "http://localhost:8080";

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (todoId: number) => deleteTodoBackend(backUrl, todoId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todoItems");
      },
    }
  );

  const doneMutation = useMutation(
    (todoId: number) => doneTodo(backUrl, todoId, done),
    {
      onSuccess: (updatedTodo: TodoItem) => {
        console.log("Mutation Success. Updated Todo:", updatedTodo);
        queryClient.invalidateQueries("todoItems");
      },
    }
  );

  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const todoDoneHandler = async () => {
    console.log("todoDoneHandler called");
    try {
      await doneMutation.mutateAsync(todoId);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const delTodoHandler = async () => {
    try {
      await mutation.mutateAsync(todoId);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const updateTodoHandler = () => {
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
