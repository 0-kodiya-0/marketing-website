import { api } from "../../../api/client";
import { CreateDirectChatDTO, CreateGroupChatDTO, UpdateChatDTO } from "../types/api";
import { Chat, DirectChat, GroupChat, ChatType, ChatStatus } from "../types/data";

export const getChat = async (chatId: number): Promise<GroupChat | DirectChat> => {
    const response = await api.get<Chat>(`/api/chats/${chatId}`);
    if (response.data.type === ChatType.Group) {
        return response.data as GroupChat;
    } else {
        return response.data as DirectChat;
    }
};

export const getMultipleChats = async (chatIds: number[]): Promise<Array<GroupChat | DirectChat>> => {
    const response = await api.get<Chat[]>('/api/chats/bulk', {
        params: { chatIds: chatIds.join(',') }
    });
    return response.data.map((result) => {
        if (result.type === ChatType.Group) {
            return result as GroupChat;
        } else {
            return result as DirectChat;
        }
    });
};

export const getUserChats = async (environmentId: number): Promise<Array<GroupChat | DirectChat>> => {
    const response = await api.get<Chat[]>('/api/chats', {
        params: {
            environmentId
        }
    });
    return response.data.map((result) => {
        if (result.type === ChatType.Group) {
            return result as GroupChat;
        } else {
            return result as DirectChat;
        }
    });
};

export const createDirectChat = async (data: CreateDirectChatDTO): Promise<DirectChat> => {
    const response = await api.post<DirectChat>('/api/chats/direct', {
        type: ChatType.Direct,
        environmentId: data.environmentId,
        participants: data.participantId,
        name: data.name,
        description: data.description,
        status: ChatStatus.Active
    });
    return response.data;
};

export const createGroupChat = async (data: CreateGroupChatDTO): Promise<GroupChat> => {
    const response = await api.post<GroupChat>('/api/chats/group', {
        type: ChatType.Group,
        environmentId: data.environmentId,
        participants: data.participantIds,
        name: data.name,
        description: data.description,
        status: ChatStatus.Active
    });
    return response.data;
};

export const updateChat = async (chatId: number, data: UpdateChatDTO): Promise<DirectChat | GroupChat> => {
    const response = await api.patch<Chat>(`/api/chats/${chatId}`, data);
    if (response.data.type === ChatType.Group) {
        return response.data as GroupChat;
    } else {
        return response.data as DirectChat;
    }
};

export const archiveChat = async (chatId: number): Promise<DirectChat | GroupChat> => {
    return updateChat(chatId, { status: ChatStatus.Archived });
};

export const deleteChat = async (chatId: number): Promise<void> => {
    await api.delete(`/api/chats/${chatId}`);
};