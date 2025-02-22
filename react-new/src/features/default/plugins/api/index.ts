import { api } from "../../../api/client";
import { Plugin } from "../types/api";

export const getPlugin = async (pluginId: number): Promise<Plugin> => {
    const response = await api.get<Plugin>(`/api/plugin/${pluginId}`);
    return response.data;
};