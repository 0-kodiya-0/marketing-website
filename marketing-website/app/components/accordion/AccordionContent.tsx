import { useContext } from "react";
import { AccordionItemContext } from "./Context";

interface AccordionContentProps {
    className?: string;
    children: React.ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
    className = '',
    children
}) => {
    const { isExpanded } = useContext(AccordionItemContext);

    return (
        <div
            className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'
                } ${className}`}
        >
            <div className="pb-4 pt-0">
                {children}
            </div>
        </div>
    );
};