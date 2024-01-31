import { useEffect, useRef } from "react";
import { useStore } from "../store/store";
import TodoTask from "./TodoTask";
import "./component.css";

const Done = () => {
  const { todos } = useStore();

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [todos]);

  return (
    <div className="activetitle" ref={scrollRef}>
      <h1>Done</h1>
      <div className="activeline"></div>
      {todos.map((todo) =>
        todo.done ? (
          <></>
        ) : (
          <TodoTask
            key={todo.id}
            done={todo.done}
            task={todo.task}
            todoId={todo.id}
          />
        )
      )}
    </div>
  );
};

export default Done;
