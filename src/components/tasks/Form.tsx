interface FormProps {
    title: string;
    description: string;
    dueDate: string;
    onTitleChange: (value: string) => void;
    onDescriptionChange: (value: string) => void;
    onDueDateChange: (value: string) => void;
}

export function Form({ 
    title, 
    description, 
    dueDate, 
    onTitleChange, 
    onDescriptionChange, 
    onDueDateChange 
}: FormProps) {
    return (
        <div className="flex flex-col gap-4 text-white">
            <label className="text-gray-700 dark:text-gray-300">
                Title
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    className="w-full p-2 border rounded mt-1 text-black"
                    value={title}
                    onChange={(e) => onTitleChange(e.target.value)}
                />
            </label>
            <label className="text-gray-700 dark:text-gray-300">
                Description
                <textarea
                    name="description"
                    placeholder="Description"
                    className="w-full p-2 border rounded mt-1 h-20 resize-none text-black"
                    value={description}
                    onChange={(e) => onDescriptionChange(e.target.value)}
                />
            </label>
            <label className="text-gray-700 dark:text-gray-300">
                Due Date
                <input
                    name="dueDate"
                    type="date"
                    className="w-full p-2 border rounded mt-1 text-black"
                    value={dueDate}
                    onChange={(e) => onDueDateChange(e.target.value)}
                />
            </label>
        </div>
    );
}