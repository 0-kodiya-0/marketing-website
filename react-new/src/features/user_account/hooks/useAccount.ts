import { useMutation, useQuery } from '@tanstack/react-query';
import useAccountStore from '../store';
import {
    initiateOAuthConnection,
    completeOAuthConnection,
    getOAuthAccounts,
    updateOAuthAccount,
    removeOAuthAccount,
    refreshOAuthToken,
    updateOAuthAccountSecurity,
    OAuthCallbackResponse
} from '../api';
import { Device } from '../types/data';

// Query keys
export const accountKeys = {
    all: ['accounts'] as const,
    oauth: {
        all: ['oauth'] as const,
        lists: () => [...accountKeys.oauth.all, 'list'] as const,
        details: (id: string) => [...accountKeys.oauth.all, 'detail', id] as const,
    }
};

// OAuth Connection Hooks
export const useInitiateOAuth = () => {
    return useMutation({
        mutationFn: initiateOAuthConnection,
        onSuccess: ({ authUrl }) => {
            window.location.href = authUrl;
        }
    });
};

export const useCompleteOAuth = () => {
    const accountStore = useAccountStore();

    return useMutation({
        mutationFn: completeOAuthConnection,
        onSuccess: (response: OAuthCallbackResponse, { provider }) => {
            const currentDevice = accountStore.getAccountById(
                accountStore.activeAccountId!
            )?.device as Device;

            accountStore.addOAuthAccount({
                device: currentDevice,
                provider,
                userDetails: response.userDetails,
                tokenDetails: response.tokenDetails
            });
        }
    });
};

// OAuth Account Management Hooks
export const useOAuthAccounts = () => {
    return useQuery({
        queryKey: accountKeys.oauth.lists(),
        queryFn: getOAuthAccounts
    });
};

export const useUpdateOAuthAccount = () => {
    const accountStore = useAccountStore();

    return useMutation({
        mutationFn: ({
            accountId,
            updates
        }: {
            accountId: string;
            updates: Parameters<typeof updateOAuthAccount>[1];
        }) => updateOAuthAccount(accountId, updates),
        onSuccess: (updatedAccount) => {
            accountStore.updateOAuthAccount(updatedAccount.id, updatedAccount);
        }
    });
};

export const useUpdateOAuthSecurity = () => {
    const accountStore = useAccountStore();

    return useMutation({
        mutationFn: ({
            accountId,
            updates
        }: {
            accountId: string;
            updates: Parameters<typeof updateOAuthAccountSecurity>[1];
        }) => updateOAuthAccountSecurity(accountId, updates),
        onSuccess: (updatedAccount) => {
            accountStore.updateOAuthAccount(updatedAccount.id, {
                security: updatedAccount.security
            });
        }
    });
};

export const useRemoveOAuthAccount = () => {
    const accountStore = useAccountStore();

    return useMutation({
        mutationFn: removeOAuthAccount,
        onSuccess: (_, accountId) => {
            accountStore.removeOAuthAccount(accountId);
        }
    });
};

export const useRefreshOAuthToken = () => {
    const accountStore = useAccountStore();

    return useMutation({
        mutationFn: refreshOAuthToken,
        onSuccess: (tokenDetails, accountId) => {
            accountStore.updateOAuthAccount(accountId, {
                tokenDetails
            });
        }
    });
};

// Local Account Hooks
export const useLocalAccount = () => {
    const accountStore = useAccountStore();
    return {
        localAccount: accountStore.localAccount,
        createLocalAccount: accountStore.createLocalAccount,
        updateLocalAccount: accountStore.updateLocalAccount,
        deleteLocalAccount: accountStore.deleteLocalAccount
    };
};

// Combined hook for getting all accounts
export const useAllAccounts = () => {
    const { data: oauthAccounts, isLoading: isLoadingOAuth } = useOAuthAccounts();
    const { localAccount } = useLocalAccount();

    return {
        accounts: {
            localAccount,
            oauthAccounts: oauthAccounts ?? []
        },
        isLoading: isLoadingOAuth
    };
};