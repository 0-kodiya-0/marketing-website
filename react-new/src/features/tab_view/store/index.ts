import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TabState } from '../types/store';

export const useTabStore = create<TabState>()(
    persist(
        (set) => ({
            tabViews: [],
            tabs: [],
            activeTabViewId: null,
            activeTabId: null,

            setActiveTabView: (id) =>
                set({
                    activeTabViewId: id,
                }),

            setActiveTab: (id) =>
                set({
                    activeTabId: id,
                }),

            resetActiveTab: () => set({
                activeTabId: null
            })
        }),
        {
            name: 'tab-storage',
            version: 1,
        }
    )
);