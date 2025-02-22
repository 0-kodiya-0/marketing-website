import { api } from "../../../../api/client.ts";
import { Plugin } from "../types/api.ts";

export const getPlugin = async (pluginId: number): Promise<Plugin> => {
    const response = await api.get<Plugin>(`/api/plugin/${pluginId}`);
    return response.data;
};