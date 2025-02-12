import { useQuery } from "@tanstack/react-query";
import { getChat } from "../api";

export const useChat = (chatId: number) => {
    return useQuery({
        queryKey: ['chat', chatId],
        queryFn: () => getChat(chatId)
    });
};