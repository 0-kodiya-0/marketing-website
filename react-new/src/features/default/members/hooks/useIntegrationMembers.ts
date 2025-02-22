import { useQuery } from "@tanstack/react-query";
import { getMember } from "../api";

export const useMember = (memberId: number) => {
    return useQuery({
        queryKey: ['member', memberId],
        queryFn: () => getMember(memberId)
    });
};