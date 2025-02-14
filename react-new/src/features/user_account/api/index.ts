import { api } from '../../../api/client';
import { 
    OAuthAccount, 
    OAuthProviders
} from '../types/data';

// OAuth flow endpoints
export const initiateOAuthConnection = async (
    provider: OAuthProviders
): Promise<{ authUrl: string }> => {
    const response = await api.post<{ authUrl: string }>('/oauth/connect', {
        provider
    });
    return response.data;
};

export const completeOAuthConnection = async (
    params: {
        provider: OAuthProviders;
        code: string;
        state: string;
    }
): Promise<OAuthAccount> => {
    const response = await api.post<OAuthAccount>('/oauth/callback', params);
    return response.data;
};

// OAuth account management
export const getOAuthAccounts = async (): Promise<OAuthAccount[]> => {
    const response = await api.get<OAuthAccount[]>('/oauth/accounts');
    return response.data;
};

export const updateOAuthAccount = async (
    accountId: string,
    updates: Partial<Omit<OAuthAccount, 'accountType' | 'security'>>
): Promise<OAuthAccount> => {
    const response = await api.patch<OAuthAccount>(`/oauth/accounts/${accountId}`, updates);
    return response.data;
};

export const removeOAuthAccount = async (accountId: string): Promise<void> => {
    await api.delete(`/oauth/accounts/${accountId}`);
};

export const refreshOAuthToken = async (accountId: string): Promise<{
    accessToken: string;
    refreshToken?: string;
    expiresAt: string;
}> => {
    const response = await api.post<{
        accessToken: string;
        refreshToken?: string;
        expiresAt: string;
    }>(`/oauth/accounts/${accountId}/refresh`);
    return response.data;
};