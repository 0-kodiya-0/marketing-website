import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { EnvironmentStore } from '../types/store';
import { Environment, EnvironmentStatus } from '../../../types/data-structure.types';

// Default environment configuration
const defaultEnvironment: Environment = {
    id: 1,
    accountId: 'default-account',
    name: 'Default Environment',
    created: new Date().toISOString(),
    lastModified: new Date().toISOString(),
    status: EnvironmentStatus.Active
};

export const useEnvironmentStore = create<EnvironmentStore>()(
    persist(
        (set, get) => ({
            selectedEnvironment: defaultEnvironment,

            setEnvironment: (environment: Environment) => {
                set({ selectedEnvironment: environment });
            },

            getEnvironment: () => {
                return get().selectedEnvironment;
            }
        }),
        {
            name: 'environment-storage',
            // Initialize with default environment if no stored value exists
            onRehydrateStorage: () => (state) => {
                if (!state || !state.selectedEnvironment) {
                    state?.setEnvironment(defaultEnvironment);
                }
            }
        }
    )
);