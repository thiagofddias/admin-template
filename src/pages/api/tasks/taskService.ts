import apiClient from "./apiClient";

interface Task {
    id: string;
    title: string;
    description: string;
    overdue_date: string;
    completed: boolean;
    created_at: string;
    updated_at: string;
}

interface CreateTaskData {
    title: string;
    description: string;
    overdue_date: string;
}

export const createTask = async (taskData: CreateTaskData): Promise<Task> => {
    try {
        const response = await apiClient.post<Task>("/todos", taskData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTasks = async (): Promise<any> => {
    try {
        const response = await apiClient.get<{ todos: Task[] }>("/todos");
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
};