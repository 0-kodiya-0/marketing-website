import { api } from "../../../api/client";
import { Chat } from "../types/data";

export const getChat = async (chatId: number): Promise<Chat> => {
    const response = await api.get<Chat>(`/api/chat/${chatId}`);
    return response.data;
};