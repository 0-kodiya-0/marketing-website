import {
    OAuthProviders,
    Device,
    LocalAccount,
    OAuthAccount,
    BaseAccount
} from './data'

export interface AccountState {
    localAccount: LocalAccount | null;
    oauthAccounts: OAuthAccount[];
    activeAccountId: string | null;

    // Local account actions
    createLocalAccount: (device: Device, password: string) => LocalAccount | null;
    updateLocalAccount: (updates: Partial<Omit<LocalAccount, 'security' | 'accountType'>> & { password?: string }) => void;
    deleteLocalAccount: () => void;

    // OAuth account actions
    addOAuthAccount: (params: {
        device: Device;
        provider: OAuthProviders;
        providerId: string;
        email: string;
        accessToken: string;
        refreshToken?: string;
        expiresAt: string;
    }) => boolean;
    updateOAuthAccount: (accountId: string, updates: Partial<Omit<OAuthAccount, 'accountType'>>) => void;
    removeOAuthAccount: (accountId: string) => void;

    // General actions
    setActiveAccount: (accountId: string | null) => void;
    getAccountById: (accountId: string) => BaseAccount | null;

    // Helper methods
    canAddMoreOAuthAccounts: () => boolean;
    getTotalAccounts: () => number;
}