import { useQuery } from "@tanstack/react-query";
import { getFile } from "../api";

export const useFile = (fileId: number) => {
    return useQuery({
        queryKey: ['file', fileId],
        queryFn: () => getFile(fileId)
    });
};
