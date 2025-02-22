import { api } from "../../../api/client";
import { Member } from "../types/api";

export const getMember = async (memberId: number): Promise<Member> => {
    const response = await api.get<Member>(`/api/member/${memberId}`);
    return response.data;
};