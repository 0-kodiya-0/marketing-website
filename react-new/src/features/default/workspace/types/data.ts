export enum WorkspaceStatus {
    Active = 'active',
    Archived = 'archived',
    Deleted = 'deleted'
}

export enum WorkspaceType {
    Personal = 'personal',
    Organization = 'organization'
}

export enum WorkspaceCategory {
    Work = 'work',
    Education = 'education',
    Personal = 'personal',
    Research = 'research',
    Other = 'other'
}

export enum WorkspaceVisibility {
    Private = 'private',
    Shared = 'shared',
    Public = 'public'
}

export interface Workspace {
    id: number;
    environmentId: number;
    name: string;
    description: string;
    created: string;
    lastModified: string;
    status: WorkspaceStatus;
    type: WorkspaceType;
    category: WorkspaceCategory;
    subcategory: string;
    visibility: WorkspaceVisibility;
}