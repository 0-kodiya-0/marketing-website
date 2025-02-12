// import { FeatureType, IntegrableFeatures, IntegrationStatus } from "./data";

import { FeatureType, IntegrableFeatures, IntegrationStatus } from "./data";

// export interface CreateIntegrationParams {
//     integrationId: string;
//     integrationType: FeatureType;
//     integrationIntoToId: string;
//     integrationIntoToType: IntegrableFeatures;
// }

// export interface UpdateIntegrationStatusParams {
//     integrationId: string;
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
//     integrationIntoToId: string;
//     integrationType: FeatureType;
// }

export interface GetByTargetParams {
    integrationIntoToId: string;
    integrationType: FeatureType;
}

export interface GetByIntegrationParams {
    integrationId: string;
    integrationIntoToType: IntegrableFeatures;
}

export interface UpdateStatusParams {
    integrationId: string;
    status: IntegrationStatus;
}

export interface CreateIntegrationParams {
    integrationId: string;
    integrationType: FeatureType;
    integrationIntoToId: string;
    integrationIntoToType: IntegrableFeatures;
}