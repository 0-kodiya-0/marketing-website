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