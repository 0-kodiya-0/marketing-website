import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { tabApi } from '../api';
import { Tab } from '../types/data';

export const useTabSystem = (accountId: string) => {
    const queryClient = useQueryClient();

    // Load tabs
    const useTabs = () => useQuery({
        queryKey: ['tabs', accountId],
        queryFn: () => tabApi.getTabs(accountId), 
    });

    const createTabMutation = useMutation({
        mutationFn: (newTab: Omit<Tab, 'id' | 'createdAt'>) =>
            tabApi.saveTab(accountId, newTab),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tabs', accountId] });
        },
    });

    const deleteTabMutation = useMutation({
        mutationFn: (tabId: string) => tabApi.deleteTab(accountId, tabId),
        onSuccess: (_) => {
            queryClient.invalidateQueries({ queryKey: ['tabs', accountId] });
        },
    });

    return {
        useTabs,
        createTab: createTabMutation.mutate,
        deleteTab: deleteTabMutation.mutate
    };
};