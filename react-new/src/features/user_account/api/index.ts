import { api } from '../../../api/client';
import { 
    OAuthAccount, 
    OAuthProviders,
    TokenDetails,
    UserDetails
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

export interface OAuthCallbackResponse {
    userDetails: UserDetails;
    tokenDetails: TokenDetails;
    provider: OAuthProviders;
}

export const completeOAuthConnection = async (
    params: {
        provider: OAuthProviders;
        code: string;
        state: string;
    }
): Promise<OAuthCallbackResponse> => {
    const response = await api.post<OAuthCallbackResponse>('/oauth/callback', params);
    return response.data;
};

// OAuth account management
export const getOAuthAccounts = async (): Promise<OAuthAccount[]> => {
    const response = await api.get<OAuthAccount[]>('/oauth/accounts');
    return response.data;
};

export const updateOAuthAccount = async (
    accountId: string,
    updates: Partial<Omit<OAuthAccount, 'accountType' | 'security' | 'tokenDetails'>>
): Promise<OAuthAccount> => {
    const response = await api.patch<OAuthAccount>(`/oauth/accounts/${accountId}`, updates);
    return response.data;
};

export const removeOAuthAccount = async (accountId: string): Promise<void> => {
    await api.delete(`/oauth/accounts/${accountId}`);
};

export const refreshOAuthToken = async (
    accountId: string
): Promise<TokenDetails> => {
    const response = await api.post<TokenDetails>(`/oauth/accounts/${accountId}/refresh`);
    return response.data;
};

export const updateOAuthAccountSecurity = async (
    accountId: string,
    updates: Partial<OAuthAccount['security']>
): Promise<OAuthAccount> => {
    const response = await api.patch<OAuthAccount>(
        `/oauth/accounts/${accountId}/security`,
        updates
    );
    return response.data;
};