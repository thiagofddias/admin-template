import React from "react";

interface CloseButtonProps {
    onClick: () => void;
    icon: any;
    ariaLabel: string;
}

export function CloseButton(props: CloseButtonProps) {
    return (
        <button
            className="bg-red-600 text-white px-4 py-2 mt-3 rounded shadow-md hover:bg-red-500 transition duration-200
            w-10 h-10 flex items-center justify-center"
            type="button"
            onClick={props.onClick}
            aria-label={props.ariaLabel}
        >
            <span className="text-xl">
                {props.icon}
            </span>
        </button>
    );
}