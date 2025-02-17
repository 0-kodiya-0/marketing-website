import { ChatStatus, ChatType, DirectChat, GroupChat } from "../../features/chat/types/data";
import { Environment } from "../../features/environment/types/data";
import { TabView, Tab } from "../../features/tab_view/types/data";
import { Workspace, WorkspaceCategory, WorkspaceStatus, WorkspaceType, WorkspaceVisibility } from "../../features/workspace/types/data";
import { FeatureIntegration, FeatureType, IntegrableFeatures, IntegrationStatus } from "../../services/integration/types/data";

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

export const mockWorkspaces: Workspace[] = [
    {
        id: 1,
        environmentId: 1,
        name: "Development Workspace",
        description: "Main development workspace",
        created: new Date("2024-01-01").toISOString(),
        lastModified: new Date("2024-01-01").toISOString(),
        status: WorkspaceStatus.Active,
        type: WorkspaceType.Organization,
        category: WorkspaceCategory.Work,
        subcategory: "Engineering",
        visibility: WorkspaceVisibility.Private
    },
    {
        id: 2,
        environmentId: 1,
        name: "Research Workspace",
        description: "Data research and analysis",
        created: new Date("2024-01-02").toISOString(),
        lastModified: new Date("2024-01-02").toISOString(),
        status: WorkspaceStatus.Active,
        type: WorkspaceType.Personal,
        category: WorkspaceCategory.Research,
        subcategory: "Data Analysis",
        visibility: WorkspaceVisibility.Shared
    }
];

export const mockTabViews: TabView[] = [
];

export const mockTabs: Tab[] = [
];

export const mockChats: (DirectChat | GroupChat)[] = [
    {
        id: 1,
        environmentId: 1,
        type: ChatType.Direct,
        created: new Date('2024-01-01').toISOString(),
        lastActive: new Date('2024-01-01').toISOString(),
        status: ChatStatus.Active,
        name: 'Direct Chat 1',
        description: 'One-on-one chat with Alice',
        participants: ['user-1', 'user-2']
    },
    {
        id: 2,
        environmentId: 1,
        type: ChatType.Group,
        created: new Date('2024-01-02').toISOString(),
        lastActive: new Date('2024-01-02').toISOString(),
        status: ChatStatus.Active,
        name: 'Team Alpha',
        description: 'Team discussion group',
        participants: ['user-1', 'user-2', 'user-3']
    },
    {
        id: 3,
        environmentId: 1,
        type: ChatType.Direct,
        created: new Date('2024-01-03').toISOString(),
        lastActive: new Date('2024-01-03').toISOString(),
        status: ChatStatus.Active,
        name: 'Direct Chat 2',
        description: 'One-on-one chat with Bob',
        participants: ['user-1', 'user-4']
    },
    {
        id: 4,
        environmentId: 1,
        type: ChatType.Group,
        created: new Date('2024-01-04').toISOString(),
        lastActive: new Date('2024-01-04').toISOString(),
        status: ChatStatus.Archived,
        name: 'Project Beta',
        description: 'Archived project discussion',
        participants: ['user-1', 'user-2', 'user-4', 'user-5']
    }
];

export const mockFeatureIntegrations: FeatureIntegration[] = [
    {
        id: 1,
        integrationId: 3,
        integrationType: FeatureType.Chat,
        integrationIntoToId: 2,
        integrationIntoToType: IntegrableFeatures.Workspace,
        status: IntegrationStatus.Active
    },
    {
        id: 2,
        integrationId: 1,
        integrationType: FeatureType.Chat,
        integrationIntoToId: 1,
        integrationIntoToType: IntegrableFeatures.Workspace,
        status: IntegrationStatus.Disabled
    },
    {
        id: 3,
        integrationId: 2,
        integrationType: FeatureType.Chat,
        integrationIntoToId: 1,
        integrationIntoToType: IntegrableFeatures.Workspace,
        status: IntegrationStatus.Active
    },
];