import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ApiState, ApiStore, Tokens } from '../types/api-store'

const initialState: ApiState = {
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    error: null,
};

export const useApiStore = create<ApiStore>()(
    persist(
        (set, get) => ({
            ...initialState,

            // Token management
            setTokens: (tokens: Tokens) => {
                set({
                    accessToken: tokens.accessToken,
                    refreshToken: tokens.refreshToken,
                });
            },

            clearTokens: () => {
                set({
                    accessToken: null,
                    refreshToken: null,
                });
            },

            getTokens: () => {
                return {
                    accessToken: get().accessToken,
                    refreshToken: get().refreshToken
                }
            },

            // Status management
            setLoading: (isLoading: boolean) => {
                set({ isLoading });
            },

            setError: (error: string | null) => {
                set({ error });
            },

            clearError: () => {
                set({ error: null });
            },
        }),
        {
            name: 'api-storage',
            partialize: (state) => ({
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
            }),
        }
    )
);