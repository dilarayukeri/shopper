import React, { createContext, useState } from "react";
import dayjs from "dayjs";

import translations from "../config/translations/translations.json";

// Types
interface ProviderPropType {
    children: JSX.Element;
}

interface LocalizationContextType {
    setAppLanguage: (val: string) => void;
    appLanguage: string;
    translate: (key: string, paramsArray: string[]) => void;
    translateDate: (date: string, format: string) => void;
}

const DEFAULT_LANGUAGE = "tr";

// Create Context
export const LocalizationContext = createContext<LocalizationContextType>();

// Create Provider
const LocalizationProvider = ({ children }: ProviderPropType) => {
    // State
    const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

    const formatString = (string: string, paramsArray: string[]) => {
        if (!string) return "";

        const formattedString = string.replace(
            /\{([0-9]+)\}/g,
            function (_, index) {
                return paramsArray[index];
            },
        );

        return formattedString;
    };

    const translateDate = (date: string, format: string) => {
        return dayjs(date).locale(appLanguage).format(format);
    };

    const translate = (key: string, paramsArray: string[] = []) => {
        // Checking key if empty string, null, or not exists in translations.json
        if (
            key == "" ||
            key == null ||
            !translations.keys.hasOwnProperty(key)
        ) {
            return "";
        }

        let localizedString = "";
        localizedString = translations.keys[key][appLanguage.toLowerCase()];

        // Setting parameters to string
        if (paramsArray.length !== 0) {
            localizedString = formatString(localizedString, paramsArray);
        }

        return localizedString;
    };

    return (
        <LocalizationContext.Provider
            value={{
                appLanguage,
                setAppLanguage: setAppLanguage,
                translate: translate,
                translateDate: translateDate,
            }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export default LocalizationProvider;
