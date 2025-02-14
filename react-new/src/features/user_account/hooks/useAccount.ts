import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAccountStore from '../store/index'; // Your existing Zustand store
import {
    initiateOAuthConnection,
    completeOAuthConnection,
    getOAuthAccounts,
    updateOAuthAccount,
    removeOAuthAccount,
    refreshOAuthToken
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
            // Redirect to OAuth provider
            window.location.href = authUrl;
        }
    });
};

export const useCompleteOAuth = () => {
    const queryClient = useQueryClient();
    const accountStore = useAccountStore();

    return useMutation({
        mutationFn: completeOAuthConnection,
        onSuccess: (newAccount) => {
            queryClient.invalidateQueries({ queryKey: accountKeys.oauth.lists() });
            // Add to local store for device-specific settings
            accountStore.addOAuthAccount({
                ...newAccount,
                device: accountStore.getAccountById(accountStore.activeAccountId!)?.device as Device
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
    const queryClient = useQueryClient();
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
            queryClient.invalidateQueries({
                queryKey: accountKeys.oauth.lists()
            });
            // Update local store
            accountStore.updateOAuthAccount(updatedAccount.id, updatedAccount);
        }
    });
};

export const useRemoveOAuthAccount = () => {
    const queryClient = useQueryClient();
    const accountStore = useAccountStore();

    return useMutation({
        mutationFn: removeOAuthAccount,
        onSuccess: (_, accountId) => {
            queryClient.invalidateQueries({
                queryKey: accountKeys.oauth.lists()
            });
            // Remove from local store
            accountStore.removeOAuthAccount(accountId);
        }
    });
};

export const useRefreshOAuthToken = () => {
    const accountStore = useAccountStore();

    return useMutation({
        mutationFn: refreshOAuthToken,
        onSuccess: (tokenData, accountId) => {
            // Update local store with new token data
            accountStore.updateOAuthAccount(accountId, tokenData);
        }
    });
};

// Local Account Hooks (using Zustand store directly)
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

// function OAuthConnectionButton({ provider }: { provider: OAuthProviders }) {
//     const initiateOAuth = useInitiateOAuth();
    
//     return (
//         <button 
//             onClick={() => initiateOAuth.mutate(provider)}
//             disabled={initiateOAuth.isPending}
//         >
//             Connect {provider}
//         </button>
//     );
// }

// // In your OAuth callback component
// function OAuthCallback() {
//     const completeOAuth = useCompleteOAuth();
//     const { code, state, provider } = useSearchParams();
    
//     useEffect(() => {
//         if (code && state && provider) {
//             completeOAuth.mutate({
//                 code,
//                 state,
//                 provider: provider as OAuthProviders
//             });
//         }
//     }, [code, state, provider]);
    
//     return <div>Completing OAuth connection...</div>;
// }

// // Using local account
// function LocalAccountSettings() {
//     const { localAccount, updateLocalAccount } = useLocalAccount();
    
//     const handleUpdateSettings = (newSettings: any) => {
//         updateLocalAccount({
//             ...newSettings,
//             updated: new Date().toISOString()
//         });
//     };
    
//     return (
//         // Your JSX here
//     );
// }