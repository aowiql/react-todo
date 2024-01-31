export interface TodoItem {
  id: number;
  todoDone: boolean;
}

export const doneTodo = async (
  backUrl: string,
  todoId: number,
  currentTodoDone: boolean
): Promise<TodoItem> => {
  try {
    console.log("todoId:", todoId, "currentTodoDone:", currentTodoDone);

    const response = await fetch(`${backUrl}/api/check/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todoId: todoId,
        todoDone: !currentTodoDone,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const updatedTodo: TodoItem = await response.json();
    console.log("Updated Todo:", updatedTodo);
    return updatedTodo;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
