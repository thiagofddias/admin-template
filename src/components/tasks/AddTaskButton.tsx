import React from "react";

interface ButtonProps {
    onClick: () => void;
    icon: any
    ariaLabel: string
}

export default function AddTaskButton(props: ButtonProps) {
    return (
        <button
            className="bg-primary-blue text-white px-4 py-3 rounded shadow-md hover:bg-blue-600 transition duration-200 w-14 items-center justify-center"
            type="button"
            onClick={props.onClick}
            aria-label={props.ariaLabel}
        >
            {props.icon}
        </button>
    );
}