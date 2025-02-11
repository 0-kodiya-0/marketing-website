import { create } from 'zustand';
import { TabState } from '../types/store';

export const useTabStore = create<TabState>((set) => ({
    openTabs: [],
    selectedTabId: null,
    initializeTabs: (tabs) =>
        set({
            openTabs: tabs,
            selectedTabId: tabs.length > 0 ? tabs[0].id : null,
        }),
    addTab: (tab) =>
        set((state) => ({
            openTabs: [...state.openTabs, tab],
            selectedTabId: tab.id,
        })),
    removeTab: (tabId) =>
        set((state) => ({
            openTabs: state.openTabs.filter((tab) => tab.id !== tabId),
            selectedTabId:
                state.selectedTabId === tabId
                    ? state.openTabs[0]?.id || null
                    : state.selectedTabId,
        })),
    selectTab: (tabId) =>
        set({
            selectedTabId: tabId,
        }),
}));