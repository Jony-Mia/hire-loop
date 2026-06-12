"use client";
import { useEffect } from 'react';
import { useTheme } from '@heroui/react';

const ThemeToggler = () => {

    const { resolvedTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        if (theme === "light" || theme === "dark") setTheme("dark")

    }, [1000])

    return (
        <div>
        </div>
    );
};

export default ThemeToggler;