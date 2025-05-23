import React from "react";
import { useTranslation } from "react-i18next";

export function SelectLanguage() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="flex items-center gap-4 p-4">
            <label htmlFor="language-select" className="text-2xl font-bold">
                {t('Switch Language')}
            </label>
            <select
                id="language-select"
                name="language"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="rounded-md border-2 border-gray-300 bg-white p-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            >
                <option value="en">English</option>
                <option value="pt">Português</option>
            </select>
        </div>
    );
}