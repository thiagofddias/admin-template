import React from "react";

interface CreateTaskButtonProps {
    onClick: () => void;
    message: string;
    ariaLabel: string;
    disabled?: boolean;
}

export function CreateTaskButton(props: CreateTaskButtonProps) {
    return (
        <div className="flex justify-center items-center">
            <button
            className="bg-primary-lightBlue px-4 py-3 mt-5 rounded shadow-md hover:bg-primary-light hover:text-primary-darkBrown
            transition duration-200 w-20 flex items-center justify-center "
            type="button"
            >
            <span className="text-xl" onClick={props.onClick} aria-label={props.ariaLabel}>
                {props.message}
            </span>
            </button>
        </div>
    );
}