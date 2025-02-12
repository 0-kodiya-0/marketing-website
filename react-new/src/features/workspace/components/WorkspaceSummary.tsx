import { useState } from 'react';
import { useEnvironmentStore } from '../../environment/store';
import { selectWorkspaceId, useWorkspaceStore } from '../store';
import { WorkspaceIcon } from './WorkspaceIcon';
import { Workspace } from '../../../types/data-structure.types';
import { WorkspaceAddIcon } from './WorkspaceAddIcon';
import { WorkspaceEmptyIcon } from './WorkspaceEmptyIcon';
import { useWorkspaces } from '../hooks/useWorkspace';
import { CreateWorkspaceInput } from './CreateWorkspaceInput';
import { Loader2 } from 'lucide-react';
import { FeatureType } from '../../feature_navigation/types/store';

interface WorkspaceSummeryProps {
    onFeatureSelect: (featureType: FeatureType) => void
}

export function WorkspaceSummary({ onFeatureSelect }: WorkspaceSummeryProps) {
    const [showCreateInput, setShowCreateInput] = useState(false);
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
        onFeatureSelect("workspace");
    };

    if (isLoading) {
        return (
            <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
        );
    }

    return (
        <>
            <div className='flex flex-col gap-y-2'>
                {Array.isArray(workspaces) ?
                    <>
                        {workspaces.map((workspace) => (
                            <WorkspaceIcon
                                key={workspace.id}
                                workspace={workspace}
                                isSelected={workspace.id === selectedWorkspaceId}
                                onClick={() => handleWorkspaceSelect(workspace)}
                            />
                        ))}
                        <WorkspaceAddIcon onClick={() => setShowCreateInput(true)} />
                    </> :
                    <>
                        <WorkspaceEmptyIcon />
                        <WorkspaceAddIcon onClick={() => setShowCreateInput(true)} />
                    </>
                }
            </div>
            {showCreateInput && (
                <CreateWorkspaceInput onCancel={() => setShowCreateInput(false)} />
            )}
        </>
    );
}