import React, { useState, useEffect } from "react";
import CardProperties from "./CardProperties";
import { getTasks } from "../../pages/api/tasks/taskService";

interface CardProps {
    title: string;
    description: string;
    dueDate: string;
    onComplete: () => void;
}

interface Task {
    title: string;
    description: string;
    dueDate: string;
}

export default function Card(props: CardProps) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            try {
                const fetchedTasks = await getTasks();
                const transformedTasks = (fetchedTasks || []).map(task => ({
                    title: task.title,
                    description: task.description,
                    dueDate: task.overdue_date
                }));
                setTasks(transformedTasks);
                setError(null);
            } catch (err) {
                console.error('Error fetching tasks:', err);
                setError('Failed to load tasks');
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const [formData] = useState({
        title: props.title,
        description: props.description,
        dueDate: props.dueDate
    });

    return (
        <div className="rounded-lg p-4 m-4 text-white">
            <CardProperties 
                title={formData.title} 
                description={formData.description} 
                dueDate={formData.dueDate}
            />

            {loading && <p className="mt-4 text-gray-400">Loading tasks...</p>}
            {error && <p className="mt-4 text-red-400">{error}</p>}
            
            {tasks.length > 0 && (
                <div className="space-y-4 mt-4">
                    {tasks.map((task, index) => (
                        <div 
                            key={index}
                            className="bg-primary-blue rounded-lg p-4 shadow"
                        >
                            <p className="font-medium">{task.title}</p>
                            <p className="text-sm text-gray-300 mt-2">{task.description}</p>
                            <p className="text-xs text-gray-400 mt-1">Due: {task.dueDate}</p>
                            <div className="flex justify-end mt-3">
                                <button 
                                    onClick={props.onComplete}
                                    className="bg-primary-light text-black px-4 py-2 rounded hover:bg-white transition duration-200"
                                >
                                    Complete Task
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}