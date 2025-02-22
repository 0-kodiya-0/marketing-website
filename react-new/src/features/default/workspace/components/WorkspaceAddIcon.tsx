import { Plus } from 'lucide-react';

interface WorkspaceAddIconProps {
    onClick: () => void;
}

export function WorkspaceAddIcon({ onClick }: WorkspaceAddIconProps) {
    return (
        <button
            onClick={onClick}
            className="
                relative w-full aspect-square rounded-lg
                flex items-center justify-center
                transition-colors duration-200
                hover:bg-white hover:shadow-sm
            "
            title="Add Workspace"
        >
            <Plus className="w-5 h-5 text-gray-600" />
        </button>
    );
}
