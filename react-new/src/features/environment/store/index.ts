import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { EnvironmentStore } from '../types/store';
import { Environment, EnvironmentPrivacy, EnvironmentStatus } from '../types/data';

// Default environment configuration

export const useEnvironmentStore = create<EnvironmentStore>()(
    persist(
        (set, get) => ({
            selectedEnvironment: null,

            setEnvironment: (environment: Environment) => {
                set({ selectedEnvironment: environment });
            },

            getEnvironment: () => {
                return get().selectedEnvironment;
            }
        }),
        {
            name: 'environment-storage',
        }
    )
);