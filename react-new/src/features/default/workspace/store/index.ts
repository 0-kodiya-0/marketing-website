import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WorkspaceState, WorkspaceActions } from '../types/store.ts';

const DEFAULT_FEATURE_STATE = {
    isExpanded: false,
    selectedItemId: null,
};

const createDefaultFeatureStates = () => ({
    members: { ...DEFAULT_FEATURE_STATE },
    apps: { ...DEFAULT_FEATURE_STATE },
    files: { ...DEFAULT_FEATURE_STATE },
    chats: { ...DEFAULT_FEATURE_STATE },
});

export const useWorkspaceStore = create<WorkspaceActions>()(
    persist(
        (set) => ({
            selectedWorkspaceIds: {},
            featureStates: {},

            setSelectedWorkspace: (environmentId, workspaceId) =>
                set((state) => ({
                    selectedWorkspaceIds: {
                        ...state.selectedWorkspaceIds,
                        [environmentId]: workspaceId,
                    },
                    // Initialize feature states if they don't exist
                    featureStates: workspaceId ? {
                        ...state.featureStates,
                        [workspaceId]: state.featureStates[workspaceId] || createDefaultFeatureStates(),
                    } : state.featureStates,
                })),

            updateFeatureState: (workspaceId, feature, newState) =>
                set((state) => ({
                    featureStates: {
                        ...state.featureStates,
                        [workspaceId]: {
                            ...state.featureStates[workspaceId] || createDefaultFeatureStates(),
                            [feature]: {
                                ...state.featureStates[workspaceId]?.[feature] || DEFAULT_FEATURE_STATE,
                                ...newState,
                            },
                        },
                    },
                })),

            clearWorkspaceState: (workspaceId) =>
                set((state) => {
                    const { [workspaceId]: _, ...restFeatureStates } = state.featureStates;
                    return { featureStates: restFeatureStates };
                }),
        }),
        {
            name: 'workspace-storage',
            version: 1,
        }
    )
);

// Selectors
export const selectWorkspaceId = (environmentId: number | null) => (state: WorkspaceState) => environmentId ? state.selectedWorkspaceIds[environmentId] || null : null;