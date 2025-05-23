import React from "react";

interface SelectChangeThemeProps {
    theme: string;
    changeTheme: (theme: string) => void;
}

export default function SelectChangeTheme(props: SelectChangeThemeProps) {
    return (
        <div className="flex items-center gap-4 p-4">
            <label htmlFor="theme-select" className="text-2xl font-bold">
                Switch Theme
            </label>
            <select
                id="theme-select"
                name="theme"
                value={props.theme}
                onChange={(e) => props.changeTheme(e.target.value)}
                className="rounded-md border-2 border-gray-300 bg-white p-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
}
