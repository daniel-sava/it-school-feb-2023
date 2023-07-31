import { createContext, useState } from "react";
import useTheme from "../hooks/useTheme";

export const themeBlue = {
    'button-color': '#fff',
    'button-background-color': 'blue',
    'text-color': 'blue'
}

export const themeRed = {
    'button-color': '#fff',
    'button-background-color': 'red',
    'text-color': 'red'
}

export const themeYellow = {
    'button-color': '#000',
    'button-background-color': 'yellow',
    'text-color': '#000'
}

export const AdvancedThemeContext = createContext(null);

export default function AdvancedThemeContextProvider(props) {
    const [currentTheme, setCurrentTheme] = useState(themeBlue);
    useTheme(currentTheme)

    return <AdvancedThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
        {props.children}
    </AdvancedThemeContext.Provider>
}