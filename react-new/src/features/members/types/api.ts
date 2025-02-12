export interface Member {
    id: string;
    workspaceId: string;
    userId: string;
    role: 'owner' | 'manager' | 'member' | 'viewer';
    joinedAt: string;
    status: 'active' | 'inactive';
    permissions: string[];
}