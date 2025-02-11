import { useEnvironmentStore } from '../../environment/store';
import { useWorkspaces } from '../api';
import { useWorkspaceStore } from '../store';
import { MembersSection } from './sections/MembersSection';
import { AppsSection } from './sections/AppsSection';
import { FilesSection } from './sections/FilesSection';
import { ChatsSection } from './sections/ChatsSection';

export function WorkspaceDetail() {
    const environment = useEnvironmentStore(state => state.selectedEnvironment);
    const { data: workspaces, isLoading } = useWorkspaces();

    const selectedWorkspaceId = useWorkspaceStore(state => state.selectedWorkspaceIds[environment?.id || 0]);

    const featureStates = useWorkspaceStore(state => state.featureStates[selectedWorkspaceId || 0]);

    const updateFeatureState = useWorkspaceStore(state => state.updateFeatureState);

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

    const selectedWorkspace = Array.isArray(workspaces) ? workspaces.find(w => w.id === selectedWorkspaceId) : null;

    if (!selectedWorkspace) {
        return (
            <div className="p-4">
                <p className="text-sm text-gray-500">Select a workspace to view details</p>
            </div>
        );
    }

    return (
        <div className="p-4 space-y-4">
            {/* Workspace Info */}
            <div>
                <h2 className="text-lg font-semibold text-gray-900">
                    {selectedWorkspace.name}
                </h2>
                {selectedWorkspace.description && (
                    <p className="mt-1 text-sm text-gray-500">
                        {selectedWorkspace.description}
                    </p>
                )}
            </div>

            {/* Feature Sections */}
            <div className="space-y-2">
                <MembersSection
                    workspaceId={selectedWorkspace.id}
                    isExpanded={featureStates?.members.isExpanded || false}
                    selectedId={featureStates?.members.selectedItemId}
                    onToggleExpand={() =>
                        updateFeatureState(selectedWorkspace.id, 'members', {
                            isExpanded: !featureStates?.members.isExpanded
                        })
                    }
                    onSelect={(id) =>
                        updateFeatureState(selectedWorkspace.id, 'members', {
                            selectedItemId: id
                        })
                    }
                />

                <AppsSection
                    workspaceId={selectedWorkspace.id}
                    isExpanded={featureStates?.apps.isExpanded || false}
                    selectedId={featureStates?.apps.selectedItemId}
                    onToggleExpand={() =>
                        updateFeatureState(selectedWorkspace.id, 'apps', {
                            isExpanded: !featureStates?.apps.isExpanded
                        })
                    }
                    onSelect={(id) =>
                        updateFeatureState(selectedWorkspace.id, 'apps', {
                            selectedItemId: id
                        })
                    }
                />

                <FilesSection
                    workspaceId={selectedWorkspace.id}
                    isExpanded={featureStates?.files.isExpanded || false}
                    selectedId={featureStates?.files.selectedItemId}
                    onToggleExpand={() =>
                        updateFeatureState(selectedWorkspace.id, 'files', {
                            isExpanded: !featureStates?.files.isExpanded
                        })
                    }
                    onSelect={(id) =>
                        updateFeatureState(selectedWorkspace.id, 'files', {
                            selectedItemId: id
                        })
                    }
                />

                <ChatsSection
                    workspaceId={selectedWorkspace.id}
                    isExpanded={featureStates?.chats.isExpanded || false}
                    selectedId={featureStates?.chats.selectedItemId}
                    onToggleExpand={() =>
                        updateFeatureState(selectedWorkspace.id, 'chats', {
                            isExpanded: !featureStates?.chats.isExpanded
                        })
                    }
                    onSelect={(id) =>
                        updateFeatureState(selectedWorkspace.id, 'chats', {
                            selectedItemId: id
                        })
                    }
                />
            </div>
        </div>
    );
}