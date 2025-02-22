import { useQuery } from "@tanstack/react-query";
import { getPlugin } from "../api";

export const usePlugin = (pluginId: number) => {
    return useQuery({
        queryKey: ['plugin', pluginId],
        queryFn: () => getPlugin(pluginId),
    });
};