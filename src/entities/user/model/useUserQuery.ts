"use client"

import {useQuery} from "@tanstack/react-query";
import {getUser} from "@/entities/user/api/getUser";

export const useUserQuery = (id: string) => {
    return useQuery({
        queryKey: ['user',id],
        queryFn: () => getUser(id),
        retry: false,
        select: (data) => {
            return data
        },
    })
}