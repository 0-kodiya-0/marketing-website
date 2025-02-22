import { api } from "../../../../api/client.ts";
import { File } from "../types/api.ts";

export const getFile = async (fileId: number): Promise<File> => {
    const response = await api.get<File>(`/api/file/${fileId}`);
    return response.data;
};