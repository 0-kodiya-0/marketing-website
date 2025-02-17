export interface TabState {
    activeTabViewId: number | null;
    activeTabId: number | null;

    setActiveTabView: (id: number) => void;

    setActiveTab: (id: number) => void;
    resetActiveTab: () => void;
}