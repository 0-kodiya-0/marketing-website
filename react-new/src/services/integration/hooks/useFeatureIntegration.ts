import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { create, getById, getByTarget, updateStatus } from "../api";
import { FeatureType, IntegrableFeatures } from "../types/data";
import { GetByTargetParams, GetByIntegrationParams } from "../types/api";

// Query keys as a simple object
const QUERY_KEYS = {
    all: ['feature-integrations'] as const,
    byTarget: (toId: number, type: FeatureType) =>
        [...QUERY_KEYS.all, 'target', toId, type] as const,
    byIntegration: (integrationId: number, toType: IntegrableFeatures) =>
        [...QUERY_KEYS.all, 'integration', integrationId, toType] as const
};

export const useFeatureIntegration = () => {
    const queryClient = useQueryClient();

    const createIntegration = useMutation({
        mutationFn: create,
        onSuccess: (_, variables) => {
            // Invalidate both relevant queries
            queryClient.invalidateQueries({
                queryKey: QUERY_KEYS.byTarget(variables.integrationIntoToId, variables.integrationType)
            });
            queryClient.invalidateQueries({
                queryKey: QUERY_KEYS.byIntegration(variables.integrationId, variables.integrationIntoToType)
            });
        }
    });

    const updateIntegrationStatus = useMutation({
        mutationFn: updateStatus,
        onSuccess: (data) => {
            // Invalidate both queries that might contain this integration
            queryClient.invalidateQueries({
                queryKey: QUERY_KEYS.byTarget(data.integrationIntoToId, data.integrationType)
            });
            queryClient.invalidateQueries({
                queryKey: QUERY_KEYS.byIntegration(data.integrationId, data.integrationIntoToType)
            });
        }
    });

    return {
        createIntegration,
        updateIntegrationStatus
    };
};

export const useIntegrationByTarget = (params: GetByTargetParams) => {
    return useQuery({
        queryKey: QUERY_KEYS.byTarget(params.integrationIntoToId, params.integrationType),
        queryFn: () => getByTarget(params)
    });
};

export const useIntegrationById = (params: GetByIntegrationParams) => {
    return useQuery({
        queryKey: QUERY_KEYS.byIntegration(params.integrationId, params.integrationIntoToType),
        queryFn: () => getById(params)
    });
};

// // Get integrations by target ID and integration type
// const { data: targetData } = useIntegrationByTarget({
//     integrationIntoToId: "workspace-123",
//     integrationType: FeatureType.Chat
// });

// // Get integrations by integration ID and target type
// const { data: integrationData } = useIntegrationById({
//     integrationId: "integration-123",
//     integrationIntoToType: IntegrableFeatures.Workspace
// });

// const { createIntegration, updateIntegrationStatus } = useFeatureIntegration();

// // Get Chat feature integrations
// const { data: chatIntegrations } = useFeatureIntegrations({
//     featureId: 'chat-123',
//     featureType: FeatureType.Chat
// });

// // Get Workspace integrated features
// const { data: workspaceFeatures } = useIntegratedFeatures({
//     targetId: 'workspace-456',
//     targetType: IntegrableFeatures.Workspace
// });

// const handleIntegrate = async () => {
//     try {
//         await createIntegration.mutateAsync({
//             integrationId: 'chat-123',
//             integrationType: FeatureType.Chat,
//             integrationIntoToId: 'workspace-456',
//             integrationIntoToType: IntegrableFeatures.Workspace
//         });
//     } catch (error) {
//         console.error('Integration failed:', error);
//     }
// };

// const handleDisable = async (integrationId: string) => {
//     try {
//         await updateIntegrationStatus.mutateAsync({
//             integrationId,
//             status: IntegrationStatus.Disabled
//         });
//     } catch (error) {
//         console.error('Status update failed:', error);
//     }
// };