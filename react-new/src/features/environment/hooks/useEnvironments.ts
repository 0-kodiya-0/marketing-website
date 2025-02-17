// useEnvironments.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getEnvironments, getEnvironment, updateEnvironment, createEnvironment } from '../api';
import { Environment } from '../types/data';

export const useEnvironments = () => {
    return useQuery({
        queryKey: ['environments'],
        queryFn: () => getEnvironments()
    });
};

export const useEnvironment = (id: number | undefined) => {
    return useQuery({
        queryKey: ['environments', id],
        queryFn: () => {
            if (!id) throw new Error('Environment ID is required');
            return getEnvironment(id);
        },
        enabled: !!id
    });
};

export const useUpdateEnvironment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: Partial<Environment> }) => 
            updateEnvironment(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['environments'] });
            queryClient.invalidateQueries({ queryKey: ['environments', variables.id] });
        }
    });
};

export const useCreateEnvironment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createEnvironment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['environments'] });
        }
    });
};