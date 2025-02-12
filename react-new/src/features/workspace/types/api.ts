import { WorkspaceCategory, WorkspaceStatus, WorkspaceType, WorkspaceVisibility } from "../../../types/data-structure.types";

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

export interface Member {
    id: string;
    workspaceId: string;
    userId: string;
    role: 'owner' | 'manager' | 'member' | 'viewer';
    joinedAt: string;
    status: 'active' | 'inactive';
    permissions: string[];
}

export interface App {
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

export interface File {
    id: number;
    ownerId: string;
    name: string;
    type: string;
    size: number;
    created: string;
    lastModified: string;
    path: string;
    source: 'local' | 'cloud';
    provider: string;
    tags: string[];
}

export interface Chat {
    id: string;
    type: 'direct' | 'group';
    created: string;
    lastActive: string;
    status: 'active' | 'archived' | 'deleted';
    name: string;
    description: string;
}

export interface CreateWorkspaceDTO {
    environmentId: number;
    name: string;
    description?: string;
    type: WorkspaceType;
    category: WorkspaceCategory;
    subcategory?: string;
    visibility: WorkspaceVisibility;
}

export interface UpdateWorkspaceDTO {
    name?: string;
    description?: string;
    type?: WorkspaceType;
    category?: WorkspaceCategory;
    subcategory?: string;
    visibility?: WorkspaceVisibility;
    status?: WorkspaceStatus;
}