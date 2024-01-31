interface TodoItem {
  id: number;
  todoTask: string;
  todoDone: boolean;
}

export const getTodoItems = async (backUrl: string): Promise<TodoItem[]> => {
  try {
    const response = await fetch(`${backUrl}/api/lists`);
    const data: TodoItem[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
