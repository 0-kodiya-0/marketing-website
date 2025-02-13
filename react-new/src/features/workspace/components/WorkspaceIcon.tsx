import { Workspace } from '../types/api';

interface WorkspaceIconProps {
    workspace: Workspace;
    isSelected: boolean;
    onClick: () => void;
}

export function WorkspaceIcon({ workspace, isSelected, onClick }: WorkspaceIconProps) {
    return (
        <button
            onClick={onClick}
            className={`
        relative w-full aspect-square rounded-lg
        flex items-center justify-center
        transition-colors duration-200 bg-gray-100
        ${isSelected
                    ? 'bg-gray-300 shadow-sm'
                    : 'hover:bg-gray-200 hover:shadow-sm'
                }
      `}
            title={workspace.name}
        >
            {/* Workspace initial */}
            <span className="text-sm font-medium text-gray-600">
                {workspace.name.charAt(0).toUpperCase()}
            </span>

            {/* Status indicator */}
            {workspace.status !== 'active' && (
                <span className={`
          absolute -top-1 -right-1 w-2 h-2 rounded-full
          ${workspace.status === 'archived' ? 'bg-gray-400' : 'bg-red-400'}
        `} />
            )}
        </button>
    );
}