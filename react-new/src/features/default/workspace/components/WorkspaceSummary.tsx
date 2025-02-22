import { useState } from 'react';
import { selectWorkspaceId, useWorkspaceStore } from '../store';
import { WorkspaceIcon } from './WorkspaceIcon';
import { WorkspaceAddIcon } from './WorkspaceAddIcon';
import { WorkspaceEmptyIcon } from './WorkspaceEmptyIcon';
import { useWorkspaces } from '../hooks/useWorkspace';
import { CreateWorkspaceInput } from './CreateWorkspaceInput';
import { Loader2 } from 'lucide-react';
import { FeatureType } from '../../feature_navigation/types/store';
import { Workspace } from '../types/data';
import { Environment } from '../../required/environment/types/data';

interface WorkspaceSummeryProps {
    environment: Environment
    onFeatureSelect: (featureType: FeatureType) => void
}

export function WorkspaceSummary({ environment, onFeatureSelect }: WorkspaceSummeryProps) {
    const [showCreateInput, setShowCreateInput] = useState(false);

    const { data: workspaces, isLoading } = useWorkspaces();

    // Workspace state
    const selectedWorkspaceId = useWorkspaceStore(selectWorkspaceId(environment?.id));
    const setSelectedWorkspace = useWorkspaceStore(state => state.setSelectedWorkspace);

    const handleWorkspaceSelect = (workspace: Workspace) => {
        if (selectedWorkspaceId === workspace.id) {
            return;
        }
        setSelectedWorkspace(environment.id, workspace.id);
        onFeatureSelect("workspace");
    };

    if (!environment) return <p>Select a environment</p>;

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