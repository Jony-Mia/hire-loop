"use client";
import { frame, motion, useSpring } from "motion/react"
import { useRef, useState } from "react";
const Drag = () => {
    
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    const handlePointerMove = ({ pageX, pageY }) => {
        
        setX(pageX)
        setY(pageY)
        
    }

    window.addEventListener("mousemove", handlePointerMove)
    return (
        <motion.div
        
            style={{ x, y }}
            animate={{
                scale: 1.2,
                rotate: [180, 0,  180, 0],
                transition: {
                    repeat: Infinity,
                    duration: 1,
                    delay: .4,
                    repeatDelay: 1,
                    repeatType: "reverse",
                },
                borderRadius: "50%"
            }}
            className='h-10 w-10 rounded-2xl bg-transparent border-2 border-blue-500 absolute translate-x-[-50%] z-10 translate-y-[-50%] p-3 '>

        </motion.div>
    );
};

export default Drag;