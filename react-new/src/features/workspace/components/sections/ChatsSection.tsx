import { MessageCircle } from 'lucide-react';
import { FeatureSection } from './FeatureSection';
import { useWorkspaceChats } from '../../hooks/useWorkspace';

interface ChatsSectionProps {
    workspaceId: number;
    isExpanded: boolean;
    selectedId: string | number | null;
    onToggleExpand: () => void;
    onSelect: (id: string) => void;
}

export function ChatsSection({
    workspaceId,
    isExpanded,
    selectedId,
    onToggleExpand,
    onSelect
}: ChatsSectionProps) {
    const { data: chats = [], isLoading } = useWorkspaceChats(workspaceId, isExpanded);

    const formatLastActive = (date: string) => {
        const lastActive = new Date(date);
        const now = new Date();
        const diffInMinutes = Math.floor((now.getTime() - lastActive.getTime()) / (1000 * 60));

        if (diffInMinutes < 60) {
            return `${diffInMinutes}m ago`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return `${diffInHours}h ago`;
        }

        return lastActive.toLocaleDateString();
    };

    return (
        <FeatureSection
            title="Chats"
            icon={<MessageCircle className="w-4 h-4 text-gray-400" />}
            count={chats.length}
            isExpanded={isExpanded}
            onToggleExpand={onToggleExpand}
            isLoading={isLoading}
        >
            {chats.map(chat => (
                <button
                    key={chat.id}
                    onClick={() => onSelect(chat.id)}
                    className={`
            w-full px-2 py-1.5 rounded-md transition-colors
            flex items-center justify-between group text-left
            ${selectedId === chat.id ?
                            'bg-blue-50 hover:bg-blue-100' :
                            'hover:bg-gray-50'
                        }
          `}
                >
                    <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex items-center space-x-2">
                            <span className={`
                text-sm font-medium truncate
                ${selectedId === chat.id ?
                                    'text-blue-700' :
                                    'text-gray-700'
                                }
              `}>
                                {chat.name}
                            </span>
                            <span className={`
                text-xs px-1.5 py-0.5 rounded-full flex-shrink-0
                ${chat.type === 'direct' ?
                                    'bg-purple-100 text-purple-700' :
                                    'bg-indigo-100 text-indigo-700'
                                }
              `}>
                                {chat.type}
                            </span>
                        </div>
                        {chat.description && (
                            <p className="text-xs text-gray-500 truncate mt-0.5">
                                {chat.description}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col items-end ml-4 flex-shrink-0">
                        <span className={`
              text-xs px-1.5 py-0.5 rounded-full
              ${chat.status === 'active' ?
                                'bg-green-100 text-green-700' :
                                chat.status === 'archived' ?
                                    'bg-gray-100 text-gray-700' :
                                    'bg-red-100 text-red-700'
                            }
            `}>
                            {chat.status}
                        </span>
                        <span className="text-xs text-gray-400 mt-1">
                            {formatLastActive(chat.lastActive)}
                        </span>
                    </div>
                </button>
            ))}
        </FeatureSection>
    );
}