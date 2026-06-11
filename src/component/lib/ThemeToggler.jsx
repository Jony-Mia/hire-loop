"use client";
import Image from 'next/image';
import Moon from "@/assets/moon.png"
import Sun from "@/assets/sun.png";
import { useEffect, useState } from 'react';
import ClickButton from './ClickButton';
import { useTheme } from '@heroui/react';

const ThemeToggler = () => {
    // const [visible, setVisible] = useState(true);
    const { resolvedTheme, theme, setTheme } = useTheme()
console.log(theme);

    // const hider = () => setVisible(!visible)
    useEffect(() => {
        if (theme === "light" || theme==="dark") {
            setTheme("dark")
        }
    }, [1000])

    return (
        <div className='flex items-center'>


            {/* <ClickButton isIconOnly 
            variation="outline" 
            onClick={() => 
            setTheme(resolvedTheme === "light" ? "dark" : "light")} 
            className={`dark:text-black dark:hover:text-white `}>
                <Image width={"20"} alt="Theme toggler" src={resolvedTheme === "light" ? Sun : Moon} />
            </ClickButton> */}
        </div>
    );
};

export default ThemeToggler;