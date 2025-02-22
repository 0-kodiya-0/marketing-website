import { useChat } from '../hooks/useChats';
import {
  MessageCircle,
  Calendar,
  Clock,
  Users,
  Info
} from 'lucide-react';
import { ChatStatus } from '../types/data';

interface ChatStatusBadgeProps {
  status: ChatStatus;
}

const ChatStatusBadge = ({ status }: ChatStatusBadgeProps) => {
  const statusColors = {
    active: 'bg-green-500',
    archived: 'bg-gray-500',
    deleted: 'bg-red-500',
    ended: 'bg-yellow-500'
  };

  return (
    <div className={`${statusColors[status]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
      {status}
    </div>
  );
};

interface ChatDetailsProps {
  chatId: number;
}

const ChatDetails = ({ chatId }: ChatDetailsProps) => {
  const { data: chat, isLoading, error } = useChat(chatId);

  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-4 bg-white rounded-lg shadow p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-4 bg-white rounded-lg shadow p-6 border border-red-200">
        <div className="text-red-500">Failed to load chat details</div>
      </div>
    );
  }

  if (!chat) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-4 bg-white rounded-lg shadow p-6">
        <div className="text-gray-500">Chat not found</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-4 bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            {chat.name}
          </h2>
          <ChatStatusBadge status={chat.status} />
        </div>
        <div className="text-gray-600 flex items-center gap-2">
          <Info className="w-4 h-4" />
          {chat.description || 'No description provided'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1">
            <div className="text-gray-500 font-medium flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat Type
            </div>
            <div className="capitalize">{chat.type}</div>
          </div>

          <div className="space-y-1">
            <div className="text-gray-500 font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Created
            </div>
            <div>{new Date(chat.created).toLocaleDateString()}</div>
          </div>

          <div className="space-y-1">
            <div className="text-gray-500 font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Last Active
            </div>
            <div>{new Date(chat.lastActive).toLocaleDateString()}</div>
          </div>

          <div className="space-y-1">
            <div className="text-gray-500 font-medium flex items-center gap-2">
              <Users className="w-4 h-4" />
              Participants
            </div>
            <div>
              {Array.isArray(chat.participants)
                ? chat.participants.length
                : '2'} members
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;