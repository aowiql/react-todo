export const getTodoItems = async (backUrl: string) => {
  try {
    const response = await fetch(`${backUrl}/api/lists`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
