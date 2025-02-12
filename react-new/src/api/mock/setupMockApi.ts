import { AxiosInstance } from "axios";
import { Tab } from "../../features/tab_view/types/data";
import { Environment, Workspace, WorkspaceCategory, WorkspaceStatus, WorkspaceType, WorkspaceVisibility } from "../../types/data-structure.types";
import { mockEnvironments, mockTabs, mockWorkspaces } from "./data";
import AxiosMockAdapter from "axios-mock-adapter";
import { CreateWorkspaceDTO, UpdateWorkspaceDTO } from "../../features/workspace/types/api";

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

    mock.onGet('/api/workspaces').reply((config) => {
        const environmentId = Number(config.params?.environmentId);
        if (!environmentId) {
            return [400, { message: 'Environment ID is required' }];
        }

        const workspaces = mockWorkspaces.filter(w => w.environmentId === environmentId);
        return [200, workspaces];
    });

    // Create workspace
    mock.onPost('/api/workspaces').reply((config) => {
        const data = JSON.parse(config.data) as CreateWorkspaceDTO;
        
        if (!data.environmentId) {
            return [400, { message: 'Environment ID is required' }];
        }

        const newWorkspace: Workspace = {
            id: Math.max(...mockWorkspaces.map(w => w.id), 0) + 1,
            environmentId: data.environmentId,
            name: data.name,
            description: data.description || "",
            created: new Date().toISOString(),
            lastModified: new Date().toISOString(),
            status: WorkspaceStatus.Active,
            type: data.type as WorkspaceType,
            category: data.category as WorkspaceCategory,
            subcategory: data.subcategory || "",
            visibility: data.visibility as WorkspaceVisibility
        };

        mockWorkspaces.push(newWorkspace);
        return [201, newWorkspace];
    });

    // Update workspace
    mock.onPatch(/\/api\/workspaces\/\d+/).reply((config) => {
        const workspaceId = parseInt(config.url!.split('/').pop()!);
        const data = JSON.parse(config.data) as UpdateWorkspaceDTO;
        const workspaceIndex = mockWorkspaces.findIndex(w => w.id === workspaceId);

        if (workspaceIndex === -1) {
            return [404, { message: 'Workspace not found' }];
        }

        const updatedWorkspace = {
            ...mockWorkspaces[workspaceIndex],
            ...data,
            lastModified: new Date().toISOString()
        };

        mockWorkspaces[workspaceIndex] = updatedWorkspace;
        return [200, updatedWorkspace];
    });

    // Enable passing through requests that don't match any mock
    mock.onAny().passThrough();

    return mock;
};