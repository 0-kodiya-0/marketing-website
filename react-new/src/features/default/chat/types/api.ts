import { ChatStatus } from "./data.ts";

export interface CreateDirectChatDTO {
    participantId: string;
    environmentId: number;
    name?: string;
    description?: string;
}

export interface CreateGroupChatDTO {
    name: string;
    environmentId: number;
    description?: string;
    participantIds: string[];
}

export interface UpdateChatDTO {
    name?: string;
    description?: string;
    status?: ChatStatus;
}