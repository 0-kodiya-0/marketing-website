import { api } from "../../../api/client";
import { File } from "../types/api";

export const getFile = async (fileId: number): Promise<File> => {
    const response = await api.get<File>(`/api/file/${fileId}`);
    return response.data;
};