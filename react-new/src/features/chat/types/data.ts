export enum ChatType {
    Direct = 'direct',
    Group = 'group'
}

export enum ChatStatus {
    Active = 'active',
    Archived = 'archived',
    Deleted = 'deleted',
    Ended = 'ended'
}

export enum MessageType {
    Text = 'text',
    File = 'file',
    System = 'system',
    Voice = 'voice',
    Video = 'video'
}

export enum MessageStatus {
    Sent = 'sent',
    Delivered = 'delivered',
    Read = 'read',
    Deleted = 'deleted'
}

export interface Message {
    id: string;
    chatId: string;
    senderId: string;
    type: MessageType;
    content: string;
    sentAt: string;
    editedAt: string;
    status: MessageStatus;
    replyTo: string;
}

export interface Chat {
    id: string;
    environmentId: string;
    type: ChatType;
    created: string;
    lastActive: string;
    status: ChatStatus;
    name: string;
    description: string;
}

export interface DirectChat extends Chat {
    type: ChatType.Direct;
    participants: [string, string];
}

export interface GroupChat extends Chat {
    type: ChatType.Group;
    participants: string[];
}

export interface Call extends Chat {
    duration: number;
    initiatedBy: string;
    quality: {
        resolution: string;
        bitrate: string;
        latency: string;
    };
    participants: string[];
}