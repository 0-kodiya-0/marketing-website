import { createContext } from "vm";

// Context for managing accordion state
export const AccordionContext = createContext({
    expanded: '',
    setExpanded: (value: string) => { },
    type: 'single' as 'single' | 'multiple',
    collapsible: false
});

// Context for individual accordion items
export const AccordionItemContext = createContext({
    itemValue: '',
    isExpanded: false
});