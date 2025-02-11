export type TabContentType = 'query-editor' | 'data-viewer' | 'settings' | 'dashboard';

// Base state interface - only contains identifying information
export interface TabContentState {
    type: TabContentType;
    id: string;
}

export interface Tab {
    id: string;
    environmentId: string;
    workspaceId: string;
    contentState: TabContentState;
    createdAt: Date;
    title: string;
}