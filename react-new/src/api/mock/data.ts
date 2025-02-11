import { Tab } from "../../features/tab_view/types/data";
import { Environment, EnvironmentStatus } from "../../types/data-structure.types";

export const mockEnvironments: Environment[] = [
    // {
    //     id: 1,
    //     accountId: 'acc-1',
    //     name: 'Development Environment',
    //     created: new Date('2024-01-01').toISOString(),
    //     lastModified: new Date('2024-01-01').toISOString(),
    //     status: EnvironmentStatus.Active
    // },
    // {
    //     id: 2,
    //     accountId: 'acc-1',
    //     name: 'Staging Environment',
    //     created: new Date('2024-01-02').toISOString(),
    //     lastModified: new Date('2024-01-02').toISOString(),
    //     status: EnvironmentStatus.Active
    // }
];

export const mockTabs: Record<string, Tab[]> = {
    'acc-1': [
        {
            id: 'tab-1',
            environmentId: '1',
            workspaceId: 'ws-1',
            contentState: {
                type: 'query-editor',
                id: 'qe-1'
            },
            createdAt: new Date('2024-01-01'),
            title: 'Query Editor 1'
        },
        {
            id: 'tab-2',
            environmentId: '1',
            workspaceId: 'ws-1',
            contentState: {
                type: 'data-viewer',
                id: 'dv-1'
            },
            createdAt: new Date('2024-01-02'),
            title: 'Data Viewer 1'
        }
    ]
};