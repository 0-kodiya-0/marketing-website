import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { AccordionContext, AccordionItemContext } from "./Context";

interface AccordionTriggerProps {
    className?: string;
    children: React.ReactNode;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
    className = '',
    children
}) => {
    const { setExpanded, collapsible } = useContext(AccordionContext);
    const { itemValue, isExpanded } = useContext(AccordionItemContext);

    const handleClick = () => {
        if (isExpanded && !collapsible) return;
        setExpanded(isExpanded ? '' : itemValue);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-blue-accent ${className}`}
            aria-expanded={isExpanded}
        >
            {children}
            <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                    }`}
            />
        </button>
    );
};