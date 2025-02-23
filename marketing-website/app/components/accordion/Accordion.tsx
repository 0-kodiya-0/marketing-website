import { useState } from "react";
import { AccordionContext } from "./Context";

interface AccordionProps {
    type?: 'single' | 'multiple';
    collapsible?: boolean;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    className?: string;
    children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
    type = 'single',
    collapsible = false,
    value,
    defaultValue = '',
    onValueChange,
    className = '',
    children
}) => {
    const [expanded, setExpanded] = useState(value || defaultValue);

    const handleSetExpanded = (newValue: string) => {
        setExpanded(newValue);
        onValueChange?.(newValue);
    };

    return (
        <AccordionContext.Provider value={{ expanded, setExpanded: handleSetExpanded, type, collapsible }}>
            <div className={`space-y-1 ${className}`}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};