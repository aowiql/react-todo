export const putTodoBackend = async (
  backUrl: string,
  todoId: number,
  todoTask: string
) => {
  try {
    const response = await fetch(`${backUrl}/api/change/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todoTask: todoTask,
      }),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error", error);
  }
};
