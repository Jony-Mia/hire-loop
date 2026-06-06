"use client";
import { Button } from "@heroui/react";

const ClickButton = ({ variation = "primary", className, handler, children, ...extraProps }) => {
    return (
        <Button
            variant={variation}
            className={className}
            onClick={handler}
            {...extraProps}>
            {children}
        </Button>
    );
};

export default ClickButton;