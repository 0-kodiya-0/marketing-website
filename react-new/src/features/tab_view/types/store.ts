import { Tab } from "./data";

export interface TabState {
    openTabs: Tab[];
    selectedTabId: string | null;
    initializeTabs: (tabs: Tab[]) => void;
    addTab: (tab: Tab) => void;
    removeTab: (tabId: string) => void;
    selectTab: (tabId: string) => void;
}