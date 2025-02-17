import React, { useEffect } from 'react';
import { useTabStore } from '../store';
import { useTabViews, useCreateTabView, useTabs } from '../hooks/useTabQueries';
import TabContent from './TabContent';
import { TabManagement } from './TabManagement';
import { useEnvironmentStore } from '../../environment';
import { useWorkspaceStore } from '../../workspace';

interface TabViewProps {
    className?: string;
}

export const TabView: React.FC<TabViewProps> = ({ className }) => {
    const { id: environmentId } = useEnvironmentStore(state => state.selectedEnvironment);
    const selectedWorkspaceId = useWorkspaceStore(state => state.selectedWorkspaceIds[environmentId || 0]);

    const {
        activeTabViewId,
        setActiveTabView,
        activeTabId,
        resetActiveTab
    } = useTabStore();

    const {
        data: tabViews,
        isLoading: isLoadingTabViews,
        error: tabViewsError
    } = useTabViews(environmentId);

    const createTabViewMutation = useCreateTabView(environmentId);
    const { data: tabs = [] } = useTabs(activeTabViewId);

    // Handle automatic TabView creation and selection
    useEffect(() => {
        if (!environmentId || isLoadingTabViews) return;

        const existingTabView = tabViews?.find(tv => tv.environmentId === environmentId);

        if (existingTabView) {
            setActiveTabView(existingTabView.id);
        } else if (!createTabViewMutation.isPending && selectedWorkspaceId) {
            createTabViewMutation.mutate({
                environmentId,
                workspaceId: selectedWorkspaceId
            });
        }
    }, [environmentId, tabViews, isLoadingTabViews, selectedWorkspaceId]);

    // Rest of the component remains the same...
    // Reset active tab when environment changes
    useEffect(() => {
        resetActiveTab();
    }, [environmentId]);

    if (!environmentId) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-gray-500">Please select an environment</div>
            </div>
        );
    }

    if (isLoadingTabViews || createTabViewMutation.isPending) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
            </div>
        );
    }

    if (tabViewsError) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-red-500">Failed to load tab views</div>
            </div>
        );
    }

    if (!activeTabViewId) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-gray-500">Initializing tab view...</div>
            </div>
        );
    }

    const activeTab = tabs.find(tab => tab.id === activeTabId);

    return (
        <div className={`flex flex-col h-full ${className}`}>
            <TabManagement
                tabViewId={activeTabViewId}
                className="flex-shrink-0"
            />
            <div className="flex-grow overflow-hidden">
                {activeTab ? (
                    <TabContent tab={activeTab} />
                ) : (
                    <div className="p-4 text-gray-500">
                        {tabs.length === 0
                            ? "No tabs available. Create a new tab to get started."
                            : "Select a tab to view content"
                        }
                    </div>
                )}
            </div>
        </div>
    );
};