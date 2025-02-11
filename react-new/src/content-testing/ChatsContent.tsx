import { ProjectChat } from '../types/project.data';

interface ChatsContentProps {
  chat: ProjectChat;
}

export function ChatsContent({ chat }: ChatsContentProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{chat.name}</h2>
          <p className="text-sm text-gray-500">{chat.description}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-sm ${
          chat.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
        }`}>
          {chat.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Type</label>
          <p className="font-medium capitalize">{chat.type}</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Created</label>
          <p className="font-medium">{new Date(chat.created).toLocaleDateString()}</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-500">Last Active</label>
          <p className="font-medium">{new Date(chat.lastActive).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}