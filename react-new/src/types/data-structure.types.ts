// Status Types
export enum AccountStatus {
    Active = 'active',
    Inactive = 'inactive'
}

export enum SessionStatus {
    Active = 'active',
    Terminated = 'terminated'
}

export enum ContactStatus {
    Active = 'active',
    Blocked = 'blocked',
    Removed = 'removed'
}

export enum ContactCategory {
    Work = 'work',
    Personal = 'personal',
    Other = 'other'
}

export enum EnvironmentStatus {
    Active = 'active',
    Archived = 'archived',
    Deleted = 'deleted'
}

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

export enum WorkspaceMemberRole {
    Owner = 'owner',
    Manager = 'manager',
    Member = 'member',
    Viewer = 'viewer'
}

export enum WorkspaceMemberStatus {
    Active = 'active',
    Inactive = 'inactive'
}

export enum ProjectMemberRole {
    Owner = 'owner',
    Manager = 'manager',
    Member = 'member',
    Viewer = 'viewer'
}

export enum ServiceStatus {
    Active = 'active',
    Disabled = 'disabled'
}

export enum ServiceFeatureType {
    Function = 'function',
    Tool = 'tool',
    Model = 'model'
}

export enum IntegrationTargetType {
    Project = 'project',
    Environment = 'environment',
    Global = 'global'
}

export enum IntegrationStatus {
    Active = 'active',
    Disabled = 'disabled'
}

export enum PluginStatus {
    Active = 'active',
    Disabled = 'disabled',
    Updating = 'updating'
}

export enum PluginType {
    Process = 'process',
    Integration = 'integration',
    Utility = 'utility'
}

export enum PluginCategory {
    AI = 'ai',
    Converter = 'converter',
    Analyzer = 'analyzer',
    Automation = 'automation',
    Security = 'security'
}

export enum FileSource {
    Local = 'local',
    Cloud = 'cloud'
}

export enum FileSharingTargetType {
    User = 'user',
    Project = 'project'
}

export enum FileSharingStatus {
    Active = 'active',
    Revoked = 'revoked'
}

export enum ChatType {
    Direct = 'direct',
    Group = 'group'
}

export enum ChatStatus {
    Active = 'active',
    Archived = 'archived',
    Deleted = 'deleted'
}

export enum ChatMemberRole {
    Admin = 'admin',
    Member = 'member'
}

export enum ChatMemberStatus {
    Active = 'active',
    Left = 'left',
    Removed = 'removed'
}

export enum MessageType {
    Text = 'text',
    File = 'file',
    System = 'system'
}

export enum MessageStatus {
    Sent = 'sent',
    Delivered = 'delivered',
    Read = 'read',
    Deleted = 'deleted'
}

export enum CallType {
    Voice = 'voice',
    Video = 'video'
}

export enum CallStatus {
    Active = 'active',
    Ended = 'ended'
}

export enum MeetingType {
    Scheduled = 'scheduled',
    Instant = 'instant'
}

export enum MeetingStatus {
    Scheduled = 'scheduled',
    Active = 'active',
    Ended = 'ended',
    Cancelled = 'cancelled'
}

export enum LogType {
    System = 'system',
    User = 'user'
}

export enum LogSeverity {
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
    Critical = 'critical'
}

export enum LogComponent {
    Environment = 'environment',
    Project = 'project',
    File = 'file',
    Service = 'service',
    Chat = 'chat',
    Call = 'call',
    Meeting = 'meeting'
}

export enum LogAction {
    Create = 'create',
    Update = 'update',
    Delete = 'delete',
    Restore = 'restore'
}

export enum TagCategory {
    Contact = 'contact',
    File = 'file',
    Project = 'project'
}

// Device and Account Types
export interface DevicePreferences {
    theme: string;
    language: string;
    notifications: boolean;
    notificationTypes: string[];
}

export interface Device {
    id: string;
    installationDate: string;
    name: string;
    os: string;
    version: string;
    uniqueIdentifier: string;
    preferences: DevicePreferences;
}

export interface PersonalProfile {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
}

export interface OrganizationProfile {
    name: string;
    role: string;
    department: string;
}

export interface SecuritySettings {
    twoFactorEnabled: boolean;
    sessionTimeout: number;
    autoLock: boolean;
}

export interface Account {
    id: string;
    created: string;
    deviceId: string;
    status: AccountStatus;
    security: SecuritySettings;
    profile: {
        personal: PersonalProfile;
        organization: OrganizationProfile;
    };
}

// Session Types
export interface Session {
    id: string;
    accountId: string;
    deviceId: string;
    startTime: string;
    lastActive: string;
    status: SessionStatus;
    activeServices: string[];
}

// Contact Types
export interface Contact {
    id: string;
    userId: string;
    created: string;
    status: ContactStatus;
    category: ContactCategory;
    tags: string[];
}

// Environment Types
export interface Environment {
    id: number;
    accountId: string;
    name: string;
    created: string;
    lastModified: string;
    status: EnvironmentStatus;
}

// Project Types
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

export interface WorkspaceMember {
    id: string;
    workspaceId: string;
    userId: string;
    role: WorkspaceMemberRole;
    joinedAt: string;
    status: WorkspaceMemberStatus;
    permissions: string[];
}

export interface WorkspaceAppLink {
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

export interface WorkspaceFile {
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

export interface WorkspaceChat {
    id: string;
    type: 'direct' | 'group';
    created: string;
    lastActive: string;
    status: 'active' | 'archived' | 'deleted';
    name: string;
    description: string;
}

// Service Types
export interface ServiceConfig {
    apiKey: string;
    endpoint: string;
}

export interface Service {
    id: string;
    name: string;
    provider: string;
    version: string;
    status: ServiceStatus;
    config: ServiceConfig;
}

export interface ServiceFeature {
    id: string;
    serviceId: string;
    name: string;
    type: ServiceFeatureType;
    config: {
        inputs: unknown[];
        outputs: unknown[];
        parameters: Record<string, unknown>;
    };
}

// Integration Types
export interface FeatureIntegration {
    id: string;
    featureId: string;
    targetType: IntegrationTargetType;
    targetId: string;
    status: IntegrationStatus;
    permissions: string[];
    config: {
        usage: {
            quota: number;
            used: number;
        };
        settings: Record<string, unknown>;
    };
}

// Plugin Types
export interface PluginRequirements {
    minVersion: string;
    dependencies: string[];
    permissions: string[];
}

export interface PluginConfig {
    apiKey: string;
    endpoint: string;
    settings: Record<string, unknown>;
    encryption: {
        enabled: boolean;
        type: string;
    };
}

export interface PluginMetrics {
    installDate: string;
    lastUsed: string;
    usageCount: number;
    performance: {
        averageResponse: number;
        errorRate: number;
    };
}

export interface Plugin {
    id: string;
    name: string;
    version: string;
    author: string;
    description: string;
    status: PluginStatus;
    type: PluginType;
    category: PluginCategory;
    requirements: PluginRequirements;
    config: PluginConfig;
    metrics: PluginMetrics;
}

// File Types
export interface File {
    id: number;
    ownerId: string;
    name: string;
    type: string;
    size: number;
    created: string;
    lastModified: string;
    path: string;
    source: FileSource;
    provider: string;
    tags: string[];
}

export interface FileVersion {
    id: string;
    fileId: string;
    version: number;
    hash: string;
    createdAt: string;
    createdBy: string;
}

export interface FileSharing {
    id: string;
    fileId: string;
    targetType: FileSharingTargetType;
    targetId: string;
    permissions: string[];
    sharedAt: string;
    sharedBy: string;
    status: FileSharingStatus;
}

// Chat Types
export interface Chat {
    id: string;
    type: ChatType;
    created: string;
    lastActive: string;
    status: ChatStatus;
    name: string;
    description: string;
}

export interface ChatMember {
    id: string;
    chatId: string;
    userId: string;
    role: ChatMemberRole;
    joinedAt: string;
    status: ChatMemberStatus;
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

// Call and Meeting Types
export interface Call {
    id: string;
    chatId: string;
    type: CallType;
    status: CallStatus;
    startedAt: string;
    endedAt: string;
    duration: number;
    initiatedBy: string;
    quality: {
        resolution: string;
        bitrate: string;
        latency: string;
    };
}

export interface Meeting {
    id: string;
    chatId: string;
    title: string;
    description: string;
    type: MeetingType;
    status: MeetingStatus;
    scheduledStart: string;
    scheduledEnd: string;
    actualStart: string;
    actualEnd: string;
    creator: string;
    settings: {
        allowRecording: boolean;
        waitingRoom: boolean;
        requirePassword: boolean;
        password: string;
        allowChat: boolean;
    };
}

// Activity and Logging Types
export interface ActivityLog {
    id: string;
    timestamp: string;
    type: LogType;
    severity: LogSeverity;
    component: LogComponent;
    componentId: string;
    action: LogAction;
    message: string;
    metadata: Record<string, unknown>;
}

export interface Tag {
    id: string;
    name: string;
    color: string;
    category: TagCategory;
    created: string;
    createdBy: string;
}