export type WorkspaceFeatureType = 'members' | 'apps' | 'files' | 'chats';

export interface WorkspaceFeatureState {
    isExpanded: boolean;
    selectedItemId: string | number | null;
}

export interface WorkspaceState {
    // Selected workspace per environment
    selectedWorkspaceIds: Record<number, number | null>;

    // Feature states per workspace
    featureStates: Record<number, Record<WorkspaceFeatureType, WorkspaceFeatureState>>;
}

export interface WorkspaceActions extends WorkspaceState {
    setSelectedWorkspace: (environmentId: number, workspaceId: number | null) => void;
    updateFeatureState: (
        workspaceId: number,
        feature: WorkspaceFeatureType,
        state: Partial<WorkspaceFeatureState>
    ) => void;
    clearWorkspaceState: (workspaceId: number) => void;
}