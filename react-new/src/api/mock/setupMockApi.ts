import { AxiosInstance } from "axios";
import { Tab } from "../../features/tab_view/types/data";
import { Environment } from "../../types/data-structure.types";
import { mockEnvironments, mockTabs } from "./data";
import AxiosMockAdapter from "axios-mock-adapter";

export const setupMockApi = (api: AxiosInstance) => {
    const mock = new AxiosMockAdapter(api);

    // Environment endpoints
    mock.onGet('/api/environments').reply(200, mockEnvironments);

    mock.onGet(/\/api\/environments\/\d+/).reply((config) => {
        const id = parseInt(config.url!.split('/').pop()!);
        const environment = mockEnvironments.find(env => env.id === id);
        return environment ? [200, environment] : [404, { message: 'Environment not found' }];
    });

    mock.onPatch(/\/api\/environments\/\d+/).reply((config) => {
        const id = parseInt(config.url!.split('/').pop()!);
        const data = JSON.parse(config.data);
        const envIndex = mockEnvironments.findIndex(env => env.id === id);

        if (envIndex === -1) {
            return [404, { message: 'Environment not found' }];
        }

        const updatedEnvironment = {
            ...mockEnvironments[envIndex],
            ...data,
            lastModified: new Date().toISOString()
        };
        mockEnvironments[envIndex] = updatedEnvironment;

        return [200, updatedEnvironment];
    });

    mock.onPost('/api/environments').reply((config) => {
        const data = JSON.parse(config.data);
        const newEnvironment: Environment = {
            ...data,
            id: mockEnvironments.length + 1,
            created: new Date().toISOString(),
            lastModified: new Date().toISOString()
        };
        mockEnvironments.push(newEnvironment);
        return [201, newEnvironment];
    });

    // Tab endpoints
    mock.onGet(/\/api\/tabs\/.*\/tabs/).reply((config) => {
        const accountId = config.url!.split('/')[3];
        return [200, mockTabs[accountId] || []];
    });

    mock.onPost(/\/api\/tabs\/.*\/tabs/).reply((config) => {
        const accountId = config.url!.split('/')[3];
        const data = JSON.parse(config.data);
        const newTab: Tab = {
            ...data,
            id: `tab-${Date.now()}`,
            createdAt: new Date()
        };

        if (!mockTabs[accountId]) {
            mockTabs[accountId] = [];
        }
        mockTabs[accountId].push(newTab);
        return [201, newTab];
    });

    mock.onDelete(/\/api\/tabs\/.*\/tabs\/.*/).reply((config) => {
        const [, , , accountId, , tabId] = config.url!.split('/');
        const accountTabs = mockTabs[accountId];

        if (!accountTabs) {
            return [404, { message: 'Account not found' }];
        }

        const tabIndex = accountTabs.findIndex(tab => tab.id === tabId);
        if (tabIndex === -1) {
            return [404, { message: 'Tab not found' }];
        }

        accountTabs.splice(tabIndex, 1);
        return [204];
    });

    // Enable passing through requests that don't match any mock
    mock.onAny().passThrough();

    return mock;
};