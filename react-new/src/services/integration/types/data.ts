export enum FeatureType {
    Chat = 'chat',
    Files = 'files',
    Workspace = 'workspace',
    Plugin = 'plugin',
    Members = 'members'
}

export enum IntegrationStatus {
    Active = 'active',
    Disabled = 'disabled'
}

export enum IntegrableFeatures {
    Workspace = 'workspace'
}

export interface FeatureIntegration {
    id: number;
    integrationId: number;
    integrationType: FeatureType;
    integrationIntoToId: number;
    integrationIntoToType: IntegrableFeatures;
    status: IntegrationStatus;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
}