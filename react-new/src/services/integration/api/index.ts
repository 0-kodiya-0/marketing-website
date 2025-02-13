import { api } from '../../../api/client';
import { CreateIntegrationParams, UpdateStatusParams, GetByTargetParams, GetByIntegrationParams } from '../types/api';
import {
    FeatureIntegration
} from '../types/data';


export const create = async (params: CreateIntegrationParams): Promise<FeatureIntegration> => {
    const { data } = await api.post<FeatureIntegration>(
        '/api/feature-integrations/create',
        params
    );
    return data;
}

export const updateStatus = async ({ integrationId, status }: UpdateStatusParams): Promise<FeatureIntegration> => {
    const { data } = await api.patch<FeatureIntegration>(
        `/api/feature-integrations/update/${integrationId}`,
        { status }
    );
    return data;
}

export const getByTarget = async ({ integrationIntoToId, integrationType }: GetByTargetParams): Promise<FeatureIntegration[]> => {
    const { data } = await api.get<FeatureIntegration[]>(
        '/api/feature-integrations/by-target',
        { params: { integrationIntoToId, integrationType } }
    );
    return data;
}

export const getById = async ({ integrationId, integrationIntoToType }: GetByIntegrationParams): Promise<FeatureIntegration[]> => {
    const { data } = await api.get<FeatureIntegration[]>(
        '/api/feature-integrations/by-id',
        { params: { integrationId, integrationIntoToType } }
    );
    return data;
}