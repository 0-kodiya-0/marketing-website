import { Users } from 'lucide-react';
import { FeatureSection } from './FeatureIntegration.tsx';
import { useWorkspaceMembers } from '../../hooks/useWorkspace.ts';

interface MembersIntegrationProps {
    workspaceId: number;
    isExpanded: boolean;
    selectedId: string | number | null;
    onToggleExpand: () => void;
    onSelect: (id: string) => void;
}

export function MembersIntegration({
    workspaceId,
    isExpanded,
    selectedId,
    onToggleExpand,
    onSelect
}: MembersIntegrationProps) {
    // Only fetch data when section is expanded
    // const { data: member = [], isLoading } = useWorkspaceMembers(workspaceId);

    const members = [
        { id: "101", role: "Admin", status: "active" },
        { id: "102", role: "Editor", status: "inactive" },
        { id: "103", role: "Viewer", status: "active" }
    ];
    

    return (
        <FeatureSection
            title="Members"
            icon={<Users className="w-4 h-4 text-gray-400" />}
            count={members.length}
            isExpanded={isExpanded}
            onToggleExpand={onToggleExpand}
            isLoading={false}
        >
            {members.map(member => (
                <button
                    key={member.id}
                    onClick={() => onSelect(member.id)}
                    className={`
            w-full px-2 py-1.5 rounded-md transition-colors
            flex items-center justify-between group text-left
            ${selectedId === member.id ?
                            'bg-blue-50 hover:bg-blue-100' :
                            'hover:bg-gray-50'
                        }
          `}
                >
                    <span className={`
            text-sm
            ${selectedId === member.id ?
                            'text-blue-700' :
                            'text-gray-600'
                        }
          `}>
                        {member.role}
                    </span>
                    <span className={`
            text-xs px-1.5 py-0.5 rounded-full
            ${member.status === 'active' ?
                            'bg-green-100 text-green-700' :
                            'bg-gray-100 text-gray-700'
                        }
          `}>
                        {member.status}
                    </span>
                </button>
            ))}
        </FeatureSection>
    );
}