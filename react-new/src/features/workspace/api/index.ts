import { api } from '../../../api/client';
import {
    Workspace, CreateWorkspaceDTO, UpdateWorkspaceDTO
} from '../types/api';

// API Functions
export const getWorkspaces = async (environmentId: number): Promise<Workspace[]> => {
    const response = await api.get<Workspace[]>(`/api/workspaces`, {
        params: { environmentId }
    });
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