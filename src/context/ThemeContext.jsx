"use client";
import { useTheme } from "@heroui/react";
import { createContext } from "react";
export const ThemeContextProvider = createContext(); 
const ThemeContext = ({children}) => {
    return (
        <ThemeContextProvider.Provider value={[theme, setTheme, resolvedTheme]}>
            {children}
        </ThemeContextProvider.Provider>
    );
};

export default ThemeContext;