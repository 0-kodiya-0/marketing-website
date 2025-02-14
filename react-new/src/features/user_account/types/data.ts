export enum AccountStatus {
    Active = 'active',
    Inactive = 'inactive'
}

export enum AccountType {
    Local = 'local',
    OAuth = 'oauth'
}

export enum OAuthProviders {
    Google = 'google',
    Microsoft = 'microsoft',
    Facebook = 'facebook'
}

export interface BaseSecuritySettings {
    twoFactorEnabled: boolean;
    sessionTimeout: number;
    autoLock: boolean;
}

export interface OAuthSecuritySettings extends BaseSecuritySettings { }

export interface LocalSecuritySettings {
    password: string;
}

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

export interface BaseAccount {
    id: string;
    created: string;
    updated: string;
    device: Device
    accountType: AccountType;
    status: AccountStatus;
}

export interface LocalAccount extends BaseAccount {
    accountType: AccountType.Local;
    security: LocalSecuritySettings;
}

export interface OAuthAccount extends BaseAccount {
    accountType: AccountType.OAuth;
    security: OAuthSecuritySettings;
    provider: OAuthProviders;
    providerId: string;
    email: string;
    accessToken: string;
    refreshToken?: string;
    expiresAt: string;
}