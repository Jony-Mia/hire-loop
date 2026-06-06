"use client";
import Image from 'next/image';
import Moon from "@/assets/moon.png"
import Sun from "@/assets/sun.png";
import { useState } from 'react';
import ClickButton from './ClickButton';

const ThemeToggler = () => {
    const [visible, setVisible] = useState(true);
    const hider = ()=> setVisible(!visible)
    return (
        <div className='flex items-center'>
            <ClickButton hidden={visible ? true : false} variation="outline" handler={hider} className={`hover:bg-[#142338]`} isIconOnly>
                <Image src={Moon} alt="moon" height={"20"} />
            </ClickButton>

            <ClickButton hidden={visible ? false : true} handler={hider} variation="outline" className={`hover:bg-[#142338]`} isIconOnly>
                <Image src={Sun} alt="Sun" height={"20"} />
            </ClickButton>
        </div>
    );
};

export default ThemeToggler;