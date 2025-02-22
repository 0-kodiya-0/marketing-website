import { MessageCircle } from 'lucide-react';
import { FeatureSection } from './FeatureIntegration';
import { useWorkspaceChats } from '../../hooks/useWorkspace';
import { useBulkChat } from '../../../chat/hooks/useChats';
import { useCreateTab } from '../../../tab_view/hooks/useTabQueries';
import { useCallback, useEffect, useState } from 'react';
import { getActiveTabViewId, useTabStore } from '../../../tab_view/store';

interface ChatsIntegrationProps {
    workspaceId: number;
    isExpanded: boolean;
    selectedId: string | number | null;
    onToggleExpand: () => void;
    onSelect: (id: number) => void;
}

export function ChatsIntegration({
    workspaceId,
    isExpanded,
    onToggleExpand,
    onSelect
}: ChatsIntegrationProps) {

    const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

    // Fetch workspace chats
    const { data: workspaceChats = [], isLoading: isLoadingWorkspaceChats } = useWorkspaceChats(workspaceId);

    // Get all chat IDs
    const chatIds = workspaceChats.map(chat => chat.integrationId);

    // Use bulk fetching hook
    const { data: bulkChats = [], isLoading: isLoadingChats } = useBulkChat(chatIds);

    const activeTabViewId = useTabStore(getActiveTabViewId);
    const createTabMutation = useCreateTab();

    // Final loading state
    const isLoading = isLoadingWorkspaceChats || isLoadingChats;

    // Process chat data
    const chats = bulkChats.map(chat => ({
        id: chat.id,
        name: chat.name,
        type: chat.type,
        description: chat.description,
        status: chat.status,
        lastActive: chat.lastActive,
    }));

    const handleCreateTab = useCallback(async () => {
        const chat = chats.find(ch => ch.id === selectedChatId);
        if (!chat || !activeTabViewId) return;

        createTabMutation.mutate({
            title: chat.name,
            contentPath: '/src/features/chat/components/ChatDetails.tsx',
            contentState: {
                chatId: chat.id
            },
            tabViewId: activeTabViewId.id,
            order: 0
        });
    }, [activeTabViewId, selectedChatId, chats, createTabMutation]);

    useEffect(() => {
        if (!selectedChatId || !workspaceId) return;
        handleCreateTab();
    }, [selectedChatId]);

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
                    onClick={() => {
                        onSelect(chat.id);
                        setSelectedChatId(chat.id)
                    }}
                    className={`
                        w-full px-2 py-1.5 rounded-md transition-colors
                        flex items-center justify-between group text-left
                        hover:bg-gray-50
                    `}
                >
                    <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex items-center space-x-2">
                            <span className={`
                                text-sm font-medium truncate
                                text-gray-700
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