// import { X } from 'lucide-react';
// import { Tab } from '../types/props';
// import { ScrollingText } from '../../scrolling_text/components/ScrollingText';

// interface TabManagerProps {
//     tabs: Tab[];
//     activeTabId: string | null;
//     onTabSelect: (tabId: string) => void;
//     onTabClose: (tabId: string) => void;
// }

// export function TabManager({
//     tabs,
//     activeTabId,
//     onTabSelect,
//     onTabClose
// }: TabManagerProps) {
//     if (tabs.length === 0) {
//         return null;
//     }

//     return (
//         <div className="flex items-stretch h-full overflow-x-auto">
//             {tabs.map((tab) => (
//                 <div
//                     key={tab.id}
//                     className={`
//             group flex items-center min-w-[150px] max-w-[150px] px-3
//             cursor-pointer border-r relative
//             ${activeTabId === tab.id
//                             ? 'bg-white text-gray-900'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }
//           `}
//                     onClick={() => onTabSelect(tab.id)}
//                 >
//                     <div className="flex-grow overflow-hidden">
//                         <ScrollingText
//                             text={tab.title}
//                             className="text-sm py-2"
//                         />
//                     </div>
//                     <button
//                         className="p-0.5 rounded-sm opacity-0 group-hover:opacity-100 hover:bg-gray-200
//                      transition-opacity ml-2 flex-shrink-0"
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             onTabClose(tab.id);
//                         }}
//                     >
//                         <X className="w-3 h-3 text-gray-600" />
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

import React from 'react';
import { useTabStore } from '../store';
import { useTabSystem } from '../hooks/useTabSystem';

interface TabManagementProps {
    accountId: string;  // Added accountId prop
    className?: string;
}

export const TabManagement: React.FC<TabManagementProps> = ({
    accountId,
    className
}) => {
    const { openTabs, selectedTabId, selectTab, removeTab } = useTabStore();
    const { deleteTab } = useTabSystem(accountId);

    if (openTabs.length === 0) {
        return null;
    }

    const handleCloseTab = (tabId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        removeTab(tabId);
        deleteTab(tabId);
    };

    return (
        <div className={`flex border-b border-gray-200 ${className}`}>
            {openTabs.map((tab) => (
                <div
                    key={tab.id}
                    className={`
            group relative flex items-center min-w-[100px] max-w-[200px] px-3 py-2 
            border-r border-gray-200 cursor-pointer
            ${selectedTabId === tab.id ? 'bg-white border-b-2 border-b-blue-500' : 'bg-gray-50'}
          `}
                    onClick={() => selectTab(tab.id)}
                >
                    <span className="truncate flex-1">{tab.title}</span>
                    <button
                        className="opacity-0 group-hover:opacity-100 ml-2"
                        onClick={(e) => handleCloseTab(tab.id, e)}
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
};

// Example of creating a tab from outside the system
// components/ExampleFeature.tsx
// import { useTabSystem } from '../hooks/useTabSystem';

// export const ExampleFeature = () => {
//   const { createTab } = useTabSystem('current-account-id');

//   const handleOpenInTab = (queryId: string) => {
//     createTab({
//       environmentId: 'current-env',
//       workspaceId: 'current-workspace',
//       contentState: {
//         type: 'query-editor',
//         id: queryId,
//       },
//       title: `Query ${queryId}`,
//     });
//   };

//   return (
//     <button onClick={() => handleOpenInTab('query-123')}>
//       Open in New Tab
//     </button>
//   );
// };