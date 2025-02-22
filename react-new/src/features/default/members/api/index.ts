import { api } from "../../../../api/client.ts";
import { Member } from "../types/api.ts";

export const getMember = async (memberId: number): Promise<Member> => {
    const response = await api.get<Member>(`/api/member/${memberId}`);
    return response.data;
};