export enum EnvironmentStatus {
    Active = 'active',
    Archived = 'archived',
    Deleted = 'deleted'
}

export interface Environment {
    id: number;
    accountId: string;
    name: string;
    created: string;
    lastModified: string;
    status: EnvironmentStatus;
}