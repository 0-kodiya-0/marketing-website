import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { featureIntegrationApi } from "../api";
import { FeatureType, IntegrableFeatures } from "../types/data";
import { GetByTargetParams, GetByIntegrationParams } from "../types/api";

// Query keys as a simple object
const QUERY_KEYS = {
    all: ['feature-integrations'] as const,
    byTarget: (toId: string, type: FeatureType) =>
        [...QUERY_KEYS.all, 'target', toId, type] as const,
    byIntegration: (integrationId: string, toType: IntegrableFeatures) =>
        [...QUERY_KEYS.all, 'integration', integrationId, toType] as const
};

export const useFeatureIntegration = () => {
    const queryClient = useQueryClient();

    const createIntegration = useMutation({
        mutationFn: featureIntegrationApi.create,
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
        mutationFn: featureIntegrationApi.updateStatus,
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
        queryFn: () => featureIntegrationApi.getByTarget(params)
    });
};

export const useIntegrationById = (params: GetByIntegrationParams) => {
    return useQuery({
        queryKey: QUERY_KEYS.byIntegration(params.integrationId, params.integrationIntoToType),
        queryFn: () => featureIntegrationApi.getById(params)
    });
};