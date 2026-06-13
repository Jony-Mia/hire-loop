"use client"
import dynamic from 'next/dynamic';
const Drag= dynamic(()=>import('@/component/sections/Motion'),{ssr:false});

const WindowContext = () => {
    return (
       <Drag/>
    );
};

export default WindowContext;