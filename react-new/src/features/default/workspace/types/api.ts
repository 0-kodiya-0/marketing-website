import { WorkspaceCategory, WorkspaceStatus, WorkspaceType, WorkspaceVisibility } from "../../../types/d";

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