import { useEnvironmentStore } from '../../environment/store';
import { useWorkspaceStore } from '../store';
import { useWorkspaces } from '../hooks/useWorkspace';
import { ChatsIntegration, FilesIntegration, MembersIntegration, PluginIntegration } from './integrations';
import { useEffect } from 'react';

interface WorkspaceDetailProps {
    setTitle: (title: string | null) => void
}

export function WorkspaceDetail({ setTitle }: WorkspaceDetailProps) {
    const environment = useEnvironmentStore(state => state.selectedEnvironment);
    const { data: workspaces, isLoading } = useWorkspaces();

    const selectedWorkspaceId = useWorkspaceStore(state => state.selectedWorkspaceIds[environment?.id || 0]);

    const featureStates = useWorkspaceStore(state => state.featureStates[selectedWorkspaceId || 0]);

    const updateFeatureState = useWorkspaceStore(state => state.updateFeatureState);

    useEffect(() => {
        const selectedWorkspace = Array.isArray(workspaces) ? workspaces.find(w => w.id === selectedWorkspaceId) : null;
        setTitle(selectedWorkspace ? selectedWorkspace.name : null);
    }, [isLoading , selectedWorkspaceId])

    if (isLoading) {
        return (
            <div className="p-4 space-y-4">
                <div className="h-6 bg-gray-100 rounded w-3/4 animate-pulse" />
                <div className="space-y-2">
                    {[1, 2, 3, 4].map(n => (
                        <div key={n} className="h-10 bg-gray-100 rounded animate-pulse" />
                    ))}
                </div>
            </div>
        );
    }

    if (!selectedWorkspaceId) {
        return (
            <div className="p-4">
                <p className="text-sm text-gray-500">Select a workspace to view details</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">

            <div className="space-y-2">
                <MembersIntegration
                    workspaceId={selectedWorkspaceId}
                    isExpanded={featureStates?.members.isExpanded || false}
                    selectedId={featureStates?.members.selectedItemId}
                    onToggleExpand={() =>
                        updateFeatureState(selectedWorkspaceId, 'members', {
                            isExpanded: !featureStates?.members.isExpanded
                        })
                    }
                    onSelect={(id) =>
                        updateFeatureState(selectedWorkspaceId, 'members', {
                            selectedItemId: id
                        })
                    }
                />

                <PluginIntegration
                    workspaceId={selectedWorkspaceId}
                    isExpanded={featureStates?.apps.isExpanded || false}
                    selectedId={featureStates?.apps.selectedItemId}
                    onToggleExpand={() =>
                        updateFeatureState(selectedWorkspaceId, 'apps', {
                            isExpanded: !featureStates?.apps.isExpanded
                        })
                    }
                    onSelect={(id) =>
                        updateFeatureState(selectedWorkspaceId, 'apps', {
                            selectedItemId: id
                        })
                    }
                />

                <FilesIntegration
                    workspaceId={selectedWorkspaceId}
                    isExpanded={featureStates?.files.isExpanded || false}
                    selectedId={featureStates?.files.selectedItemId}
                    onToggleExpand={() =>
                        updateFeatureState(selectedWorkspaceId, 'files', {
                            isExpanded: !featureStates?.files.isExpanded
                        })
                    }
                    onSelect={(id) =>
                        updateFeatureState(selectedWorkspaceId, 'files', {
                            selectedItemId: id
                        })
                    }
                />

                <ChatsIntegration
                    workspaceId={selectedWorkspaceId}
                    isExpanded={featureStates?.chats.isExpanded || false}
                    selectedId={featureStates?.chats.selectedItemId}
                    onToggleExpand={() =>
                        updateFeatureState(selectedWorkspaceId, 'chats', {
                            isExpanded: !featureStates?.chats.isExpanded
                        })
                    }
                    onSelect={(id) =>
                        updateFeatureState(selectedWorkspaceId, 'chats', {
                            selectedItemId: id
                        })
                    }
                />
            </div>
        </div>
    );
}