export interface Plugin {
    id: string;
    workspaceId: string;
    appId: string;
    linkedAt: string;
    linkedBy: string;
    status: 'active' | 'revoked';
    config: {
        permissions: string[];
        settings: Record<string, unknown>;
        syncOptions: Record<string, unknown>;
    };
}