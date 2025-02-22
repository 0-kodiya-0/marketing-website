import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    getChat,
    getUserChats,
    createDirectChat,
    createGroupChat,
    updateChat,
    archiveChat,
    deleteChat,
    getMultipleChats
} from '../api';
import { CreateDirectChatDTO, CreateGroupChatDTO, UpdateChatDTO } from '../types/api';

const CHAT_KEYS = {
    all: ['chats'] as const,
    single: (id: number) => [...CHAT_KEYS.all, id] as const,
    singleBulk: (ids: number[]) => [...CHAT_KEYS.all, "bulk", ids] as const,
    lists: (environmentId: number) => [...CHAT_KEYS.all, 'list', environmentId] as const,
};

export const useChat = (chatId: number) => {
    return useQuery({
        queryKey: CHAT_KEYS.single(chatId),
        queryFn: () => getChat(chatId),
    });
};

export const useBulkChat = (chatIds: number[]) => {
    return useQuery({
        queryKey: CHAT_KEYS.singleBulk(chatIds),
        queryFn: () => getMultipleChats(chatIds)
    });
};

export const useChats = (environmentId: number) => {
    return useQuery({
        queryKey: CHAT_KEYS.lists(environmentId),
        queryFn: () => getUserChats(environmentId),
        enabled: !!environmentId, // Only run the query if we have an environmentId
    });
};

export const useCreateDirectChat = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: CreateDirectChatDTO) => createDirectChat(data),
        onSuccess: (newChat) => {
            queryClient.invalidateQueries({
                queryKey: CHAT_KEYS.lists(newChat.environmentId)
            });
            queryClient.setQueryData(CHAT_KEYS.single(newChat.id), newChat);
        },
    });
};

export const useCreateGroupChat = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: CreateGroupChatDTO) => createGroupChat(data),
        onSuccess: (newChat) => {
            queryClient.invalidateQueries({
                queryKey: CHAT_KEYS.lists(newChat.environmentId)
            });
            queryClient.setQueryData(CHAT_KEYS.single(newChat.id), newChat);
        },
    });
};

export const useUpdateChat = (chatId: number, environmentId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: UpdateChatDTO) => updateChat(chatId, data),
        onSuccess: (updatedChat) => {
            queryClient.invalidateQueries({ queryKey: CHAT_KEYS.single(chatId) });
            queryClient.invalidateQueries({
                queryKey: CHAT_KEYS.lists(environmentId)
            });
        },
    });
};

export const useArchiveChat = (environmentId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (chatId: number) => archiveChat(chatId),
        onSuccess: (updatedChat) => {
            queryClient.invalidateQueries({ queryKey: CHAT_KEYS.single(updatedChat.id) });
            queryClient.invalidateQueries({
                queryKey: CHAT_KEYS.lists(environmentId)
            });
        },
    });
};

export const useDeleteChat = (environmentId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (chatId: number) => deleteChat(chatId),
        onSuccess: (_, chatId) => {
            queryClient.removeQueries({ queryKey: CHAT_KEYS.single(chatId) });
            queryClient.invalidateQueries({
                queryKey: CHAT_KEYS.lists(environmentId)
            });
        },
    });
};