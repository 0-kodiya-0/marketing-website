import { useState } from 'react';
import { selectWorkspaceId, useWorkspaceStore } from '../store';
import { WorkspaceIcon } from './WorkspaceIcon.tsx';
import { WorkspaceAddIcon } from './WorkspaceAddIcon.tsx';
import { WorkspaceEmptyIcon } from './WorkspaceEmptyIcon.tsx';
import { useWorkspaces } from '../hooks/useWorkspace.ts';
import { CreateWorkspaceInput } from './CreateWorkspaceInput.tsx';
import { Loader2 } from 'lucide-react';
import { FeatureType } from '../../../required/left_navigation/types/store.ts';
import { Workspace } from '../types/data.ts';
import { Environment } from '../../environment';

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