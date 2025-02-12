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