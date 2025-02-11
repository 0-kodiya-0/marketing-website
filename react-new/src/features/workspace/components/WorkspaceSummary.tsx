import { useEnvironmentStore } from '../../environment/store';
import { useWorkspaces } from '../api';
import { selectWorkspaceId, useWorkspaceStore } from '../store';
import { WorkspaceIcon } from './WorkspaceIcon';
import { Workspace } from '../../../types/data-structure.types';

export function WorkspaceSummary() {
    const environment = useEnvironmentStore(state => state.selectedEnvironment);

    if (!environment) return <p>Select a environment</p>;

    const { data: workspaces, isLoading } = useWorkspaces();

    // Workspace state
    const selectedWorkspaceId = useWorkspaceStore(selectWorkspaceId(environment?.id || 0));
    const setSelectedWorkspace = useWorkspaceStore(state => state.setSelectedWorkspace);

    const handleWorkspaceSelect = (workspace: Workspace) => {
        if (selectedWorkspaceId === workspace.id) {
            return;
        }
        setSelectedWorkspace(environment.id, workspace.id);
    };

    if (isLoading) {
        return (
            <div className="w-full aspect-square rounded-lg bg-gray-100 animate-pulse" />
        );
    }

    return Array.isArray(workspaces) ?
        workspaces.map((workspace) =>
            <WorkspaceIcon
                workspace={workspace} //workspaces.find(w => w.id === selectedWorkspaceId)!
                isSelected={true}
                onClick={() => handleWorkspaceSelect(workspace)}
            />
        ) :
        <p>No Workspaces</p>
}