import {
    OAuthProviders,
    Device,
    LocalAccount,
    OAuthAccount,
    BaseAccount,
    UserDetails,
    TokenDetails
} from './data.types'

export interface AccountState {
    localAccount: LocalAccount | null;
    oauthAccounts: OAuthAccount[];
    activeAccount: OAuthAccount | LocalAccount | null;

    // Local account actions
    createLocalAccount: (params: {
        device: Device;
        password: string;
        userDetails: UserDetails;
    }) => LocalAccount | null;
    updateLocalAccount: (updates: Partial<Omit<LocalAccount, 'security' | 'accountType'>> & { password?: string }) => void;
    deleteLocalAccount: () => void;

    // OAuth account actions
    addOAuthAccount: (params: {
        device: Device;
        provider: OAuthProviders;
        userDetails: UserDetails;
        tokenDetails: TokenDetails;
    }) => boolean;
    updateOAuthAccount: (accountId: string, updates: Partial<Omit<OAuthAccount, 'accountType'>>) => void;
    removeOAuthAccount: (accountId: string) => void;

    // General actions
    setActiveAccount: (accountId: OAuthAccount | LocalAccount | null) => void;
    getAccountById: (accountId: string) => BaseAccount | null;

    // Helper methods
    canAddMoreOAuthAccounts: () => boolean;
    getTotalAccounts: () => number;
}