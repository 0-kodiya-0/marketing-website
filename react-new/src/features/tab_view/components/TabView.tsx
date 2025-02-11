import React from 'react';
import { useTabStore } from '../store';
import { TabContent } from './TabContent';
import { TabManagement } from './TabManagement';

interface TabViewProps {
    className?: string;
}

export const TabView: React.FC<TabViewProps> = ({ className }) => {
    const { openTabs, selectedTabId } = useTabStore();
    const selectedTab = openTabs.find((tab) => tab.id === selectedTabId);

    return (
        <div className={`flex flex-col h-full ${className}`}>
            <TabManagement accountId={''} />
            <div className="flex-1 overflow-hidden">
                {selectedTab ? (
                    <TabContent contentState={selectedTab.contentState} />
                ) : (
                    <div className="p-4 text-gray-500">No tab selected</div>
                )}
            </div>
        </div>
    );
};