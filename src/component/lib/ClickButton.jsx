"use client";
import { Button } from "@heroui/react";

const ClickButton = ({variation="primary" , className, handler, children,hidden, isIconOnly=false}) => {
    return (
        <Button variant={variation} className={className} onClick={handler} hidden={hidden} isIconOnly={isIconOnly}>
            {children}
        </Button>
    );
};

export default ClickButton;