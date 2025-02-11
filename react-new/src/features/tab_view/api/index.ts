import { api } from '../../../api/client';
import { Tab } from '../types/data';

const API_BASE_URL = '/api/tabs'; // Replace with your actual API base URL

export const tabApi = {
    // Tab CRUD operations
    getTabs: async (accountId: string): Promise<Tab[]> => {
        const response = await api.get(`${API_BASE_URL}/${accountId}/tabs`);
        return response.data;
    },

    saveTab: async (accountId: string, tab: Omit<Tab, 'id' | 'createdAt'>): Promise<Tab> => {
        const response = await api.post(`${API_BASE_URL}/${accountId}/tabs`, tab);
        return response.data;
    },

    deleteTab: async (accountId: string, tabId: string): Promise<void> => {
        await api.delete(`${API_BASE_URL}/${accountId}/tabs/${tabId}`);
    }
};