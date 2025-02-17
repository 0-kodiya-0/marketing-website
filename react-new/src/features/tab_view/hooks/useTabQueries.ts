import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    createTabView,
    getTabViewsByEnvironment,
    deleteTabView,
    createTab,
    getTabsByTabView,
    deleteTab
} from '../api';
import { Tab, TabCreateDTO, TabViewCreateDTO } from '../types/data';
import { useTabStore } from '../store';
import { queryClient } from '../../../api/persistConfig';

export const useTabViews = (environmentId: number) => {
    return useQuery({
        queryKey: ['tabViews', environmentId],
        queryFn: () => getTabViewsByEnvironment(environmentId),
        enabled: !!environmentId,
    });
};

export const useCreateTabView = (environmentId: number) => {
    const queryClient = useQueryClient();
    const { setActiveTabView } = useTabStore();

    return useMutation({
        mutationFn: (data: TabViewCreateDTO) => createTabView(data),
        onSuccess: (newTabView) => {
            queryClient.invalidateQueries({ queryKey: ['tabViews', environmentId] });
            setActiveTabView(newTabView.id);
        },
    });
};

export const useDeleteTabView = (environmentId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteTabView(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tabViews', environmentId] });
        },
    });
};

export const useTabs = (tabViewId: number | null) => {
    return useQuery({
        queryKey: ['tabs', tabViewId],
        queryFn: () => getTabsByTabView(tabViewId!),
        enabled: !!tabViewId,
    });
};

export const useCreateTab = (tabViewId: number | null) => {
    const queryClient = useQueryClient();
    const { setActiveTab } = useTabStore();

    return useMutation({
        mutationFn: (data: TabCreateDTO) => {
            const currentTabs = queryClient.getQueryData<Tab[]>(['tabs', tabViewId]) || [];
            data.order = (currentTabs.length ?? 0) + 1
            return createTab(data)
        },
        onSuccess: (newTab) => {
            queryClient.invalidateQueries({ queryKey: ['tabs', tabViewId] });
            setActiveTab(newTab.id);
        },
    });
};

export const useDeleteTab = (tabViewId: number | null) => {
    const queryClient = useQueryClient();
    const { activeTabId, setActiveTab, resetActiveTab } = useTabStore();

    return useMutation({
        mutationFn: (id: number) => deleteTab(id),
        onMutate: async (deletedTabId) => {
            // If we're not deleting the active tab, no need to change selection
            if (deletedTabId !== activeTabId) {
                return;
            }

            // Get current tabs
            const currentTabs = queryClient.getQueryData<Tab[]>(['tabs', tabViewId]) || [];

            // Find the index of the tab being deleted
            const deletedIndex = currentTabs.findIndex(tab => tab.id === deletedTabId);

            // Find the nearest tab to set as active
            if (deletedIndex > -1) {
                // Try to select the next tab
                const nextTab = currentTabs[deletedIndex + 1];
                // If there's no next tab, try the previous one
                const previousTab = currentTabs[deletedIndex - 1];

                if (nextTab) {
                    setActiveTab(nextTab.id);
                } else if (previousTab) {
                    setActiveTab(previousTab.id);
                } else {
                    // No tabs left, reset active tab
                    resetActiveTab();
                }
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tabs', tabViewId] });
        },
    });
};

// Optional: Add a utility to clear the cache if needed
export const clearPersistedCache = () => {
    queryClient.clear();
    window.localStorage.removeItem('REACT_QUERY_OFFLINE_CACHE');
};