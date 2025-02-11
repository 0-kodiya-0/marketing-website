import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useEnvironmentStore } from '../../environment/store';
import {
    Workspace, Member, App, File, Chat,
    CreateWorkspaceDTO, UpdateWorkspaceDTO
} from '../types/api';

const api = axios.create({
    baseURL: '/api'
});

// API Functions
const getWorkspaces = async (environmentId: number): Promise<Workspace[]> => {
    const response = await api.get<Workspace[]>(`/workspaces`, {
        params: { environmentId }
    });
    return response.data;
};

const getWorkspaceMembers = async (workspaceId: number): Promise<Member[]> => {
    const response = await api.get<Member[]>(`/workspaces/${workspaceId}/members`);
    return response.data;
};

const getWorkspaceApps = async (workspaceId: number): Promise<App[]> => {
    const response = await api.get<App[]>(`/workspaces/${workspaceId}/apps`);
    return response.data;
};

const getWorkspaceFiles = async (workspaceId: number): Promise<File[]> => {
    const response = await api.get<File[]>(`/workspaces/${workspaceId}/files`);
    return response.data;
};

const getWorkspaceChats = async (workspaceId: number): Promise<Chat[]> => {
    const response = await api.get<Chat[]>(`/workspaces/${workspaceId}/chats`);
    return response.data;
};

const createWorkspace = async (data: CreateWorkspaceDTO): Promise<Workspace> => {
    const response = await api.post<Workspace>('/workspaces', data);
    return response.data;
};

const updateWorkspace = async (
    workspaceId: number,
    data: UpdateWorkspaceDTO
): Promise<Workspace> => {
    const response = await api.patch<Workspace>(`/workspaces/${workspaceId}`, data);
    return response.data;
};

// React Query Hooks
export const useWorkspaces = () => {
    const environment = useEnvironmentStore(state => state.selectedEnvironment);

    return useQuery({
        queryKey: ['workspaces', environment?.id],
        queryFn: () => getWorkspaces(environment?.id || 0),
        enabled: !!environment?.id,
    });
};

export const useWorkspaceMembers = (workspaceId: number, isExpanded: boolean) => {
    return useQuery({
        queryKey: ['workspace-members', workspaceId],
        queryFn: () => getWorkspaceMembers(workspaceId),
        enabled: !!workspaceId && isExpanded,
    });
};

export const useWorkspaceApps = (workspaceId: number, isExpanded: boolean) => {
    return useQuery({
        queryKey: ['workspace-apps', workspaceId],
        queryFn: () => getWorkspaceApps(workspaceId),
        enabled: !!workspaceId && isExpanded,
    });
};

export const useWorkspaceFiles = (workspaceId: number, isExpanded: boolean) => {
    return useQuery({
        queryKey: ['workspace-files', workspaceId],
        queryFn: () => getWorkspaceFiles(workspaceId),
        enabled: !!workspaceId && isExpanded,
    });
};

export const useWorkspaceChats = (workspaceId: number, isExpanded: boolean) => {
    return useQuery({
        queryKey: ['workspace-chats', workspaceId],
        queryFn: () => getWorkspaceChats(workspaceId),
        enabled: !!workspaceId && isExpanded,
    });
};

export const useCreateWorkspace = () => {
    const queryClient = useQueryClient();
    const environment = useEnvironmentStore(state => state.selectedEnvironment);

    return useMutation({
        mutationFn: (data: Omit<CreateWorkspaceDTO, 'environmentId'>) =>
            createWorkspace({ ...data, environmentId: environment?.id || 0 }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['workspaces', environment?.id] });
        },
    });
};

export const useUpdateWorkspace = () => {
    const queryClient = useQueryClient();
    const environment = useEnvironmentStore(state => state.selectedEnvironment);

    return useMutation({
        mutationFn: ({ workspaceId, data }: { workspaceId: number; data: UpdateWorkspaceDTO }) =>
            updateWorkspace(workspaceId, data),
        onSuccess: (_, { workspaceId }) => {
            queryClient.invalidateQueries({ queryKey: ['workspaces', environment?.id] });
            queryClient.invalidateQueries({ queryKey: ['workspace-members', workspaceId] });
            queryClient.invalidateQueries({ queryKey: ['workspace-apps', workspaceId] });
            queryClient.invalidateQueries({ queryKey: ['workspace-files', workspaceId] });
            queryClient.invalidateQueries({ queryKey: ['workspace-chats', workspaceId] });
        },
    });
};