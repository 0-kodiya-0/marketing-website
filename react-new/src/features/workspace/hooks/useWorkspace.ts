import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useEnvironmentStore } from "../../environment";
import { CreateWorkspaceDTO, UpdateWorkspaceDTO } from "../types/api";
import { getWorkspaces, getWorkspaceMembers, getWorkspaceApps, getWorkspaceFiles, getWorkspaceChats, createWorkspace, updateWorkspace } from "../api";

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