import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getEnvironments, getEnvironment, updateEnvironment, createEnvironment } from '../api';
import { Environment } from '../../../types/data-structure.types';

export const useEnvironments = () => {
    return useQuery({
        queryKey: ['environments'],
        queryFn: getEnvironments
    });
};

export const useEnvironment = (id: number) => {
    return useQuery({
        queryKey: ['environments', id],
        queryFn: () => getEnvironment(id),
        enabled: !!id
    });
};

export const useUpdateEnvironment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: Partial<Environment> }) =>
            updateEnvironment(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['environments'] });
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
}