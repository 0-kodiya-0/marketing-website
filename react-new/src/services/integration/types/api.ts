// import { FeatureType, IntegrableFeatures, IntegrationStatus } from "./data";

import { FeatureType, IntegrableFeatures, IntegrationStatus } from "./data";

// export interface CreateIntegrationParams {
//     integrationId: number;
//     integrationType: FeatureType;
//     integrationIntoToId:number;
//     integrationIntoToType: IntegrableFeatures;
// }

// export interface UpdateIntegrationStatusParams {
//     integrationId: number;
//     status: IntegrationStatus;
// }

// export interface GetFeatureIntegrationsParams {
//     featureId: string;
//     featureType: FeatureType;
// }

// export interface GetIntegratedFeaturesParams {
//     targetId: string;
//     targetType: IntegrableFeatures;
// }

// export interface GetIntegrationByTypeParams {
//     integrationIntoToId:number;
//     integrationType: FeatureType;
// }

export interface GetByTargetParams {
    integrationIntoToId: number;
    integrationType: FeatureType;
}

export interface GetByIntegrationParams {
    integrationId: number;
    integrationIntoToType: IntegrableFeatures;
}

export interface UpdateStatusParams {
    integrationId: number;
    status: IntegrationStatus;
}

export interface CreateIntegrationParams {
    integrationId: number;
    integrationType: FeatureType;
    integrationIntoToId: number;
    integrationIntoToType: IntegrableFeatures;
}