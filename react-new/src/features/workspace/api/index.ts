import { api } from '../../../api/client';
import {
    Workspace, Member, App, File, Chat,
    CreateWorkspaceDTO, UpdateWorkspaceDTO
} from '../types/api';

// API Functions
export const getWorkspaces = async (environmentId: number): Promise<Workspace[]> => {
    const response = await api.get<Workspace[]>(`/api/workspaces`, {
        params: { environmentId }
    });
    return response.data;
};

export const getWorkspaceMembers = async (workspaceId: number): Promise<Member[]> => {
    const response = await api.get<Member[]>(`/api/workspaces/${workspaceId}/members`);
    return response.data;
};

export const getWorkspaceApps = async (workspaceId: number): Promise<App[]> => {
    const response = await api.get<App[]>(`/api/workspaces/${workspaceId}/apps`);
    return response.data;
};

export const getWorkspaceFiles = async (workspaceId: number): Promise<File[]> => {
    const response = await api.get<File[]>(`/api/workspaces/${workspaceId}/files`);
    return response.data;
};

export const getWorkspaceChats = async (workspaceId: number): Promise<Chat[]> => {
    const response = await api.get<Chat[]>(`/api/workspaces/${workspaceId}/chats`);
    return response.data;
};

export const createWorkspace = async (data: CreateWorkspaceDTO): Promise<Workspace> => {
    const response = await api.post<Workspace>('/api/workspaces', data);
    return response.data;
};

export const updateWorkspace = async (
    workspaceId: number,
    data: UpdateWorkspaceDTO
): Promise<Workspace> => {
    const response = await api.patch<Workspace>(`/api/workspaces/${workspaceId}`, data);
    return response.data;
};