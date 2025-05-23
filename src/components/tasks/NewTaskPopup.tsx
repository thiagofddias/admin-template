import React, { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import { Close, Add } from "../icons";
import { Form } from "../tasks/Form";
import { CloseButton } from "../tasks/CloseButton";
import { CreateTaskButton } from "./CreateTaskButton";
import { createTask } from "../../pages/api/tasks/taskService";

export default function NewTaskPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: ""
    });

    const handleOpenPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    const handleSubmit = async () => {
        try {
            await createTask( {
                title: formData.title,
                description: formData.description,
                overdue_date: formData.dueDate ? new Date(formData.dueDate).toISOString() : ""
            });

            setShowPopup(false);
            setFormData({
                title: "",
                description: "",
                dueDate: ""
            });

            alert('Task created!');
            
        } catch (error) {
            console.error('Erro to create task:', error);
            alert('Erro to create task');
        }
    };

    return (
        <div>
            <AddTaskButton onClick={handleOpenPopup} icon={Add} ariaLabel="Add new task" />

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-primary-blue p-6 rounded-2xl shadow-lg w-full max-w-md mx-4 text-black dark:text-white relative">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-black dark:text-white">Create a new task</h2>
                            <CloseButton
                                onClick={handleClosePopup}
                                ariaLabel="Close popup"
                                icon={Close}
                            />
                        </div>
                        
                        <Form 
                            title={formData.title}
                            description={formData.description}
                            dueDate={formData.dueDate}
                            onTitleChange={(value) => setFormData({...formData, title: value})}
                            onDescriptionChange={(value) => setFormData({...formData, description: value})}
                            onDueDateChange={(value) => setFormData({...formData, dueDate: value})}
                        />
                        
                        <CreateTaskButton 
                            message="Criar" 
                            ariaLabel="Criar" 
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}