import { useContext } from "react";
import { AccordionContext, AccordionItemContext } from "./Context";

interface AccordionItemProps {
    value: string;
    className?: string;
    children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    value,
    className = '',
    children
}) => {
    const { expanded } = useContext(AccordionContext);
    const isExpanded = expanded === value;

    return (
        <AccordionItemContext.Provider value={{ itemValue: value, isExpanded }}>
            <div className={`border-b border-border-color ${className}`}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
};