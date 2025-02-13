import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useEnvironmentStore } from "../../environment";
import { CreateWorkspaceDTO, UpdateWorkspaceDTO } from "../types/api";
import { getWorkspaces, createWorkspace, updateWorkspace } from "../api";
import { useIntegrationByTarget } from "../../../services/integration/hooks/useFeatureIntegration";
import { FeatureType } from "../../../services/integration/types/data";

// React Query Hooks
export const useWorkspaces = () => {
    const environment = useEnvironmentStore(state => state.selectedEnvironment);

    return useQuery({
        queryKey: ['workspaces', environment?.id],
        queryFn: () => getWorkspaces(environment?.id || 0),
        enabled: !!environment?.id,
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
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['workspaces', environment?.id] });
        },
    });
};

export const useWorkspaceChats = (workspaceId: number) => {
    return useIntegrationByTarget({
        integrationIntoToId: workspaceId,
        integrationType: FeatureType.Chat
    });
};

export const useWorkspaceFiles = (workspaceId: number) => {
    return useIntegrationByTarget({
        integrationIntoToId: workspaceId,
        integrationType: FeatureType.Files
    });
};

export const useWorkspaceMembers = (workspaceId: number) => {
    return useIntegrationByTarget({
        integrationIntoToId: workspaceId,
        integrationType: FeatureType.Members
    });
};

export const useWorkspaceApps = (workspaceId: number) => {
    return useIntegrationByTarget({
        integrationIntoToId: workspaceId,
        integrationType: FeatureType.Plugin
    });
};