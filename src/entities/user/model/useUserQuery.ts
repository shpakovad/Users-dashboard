"use client"

import {useQuery} from "@tanstack/react-query";
import {getUser} from "@/entities/user/api/getUser";

export const useUserQuery = (id: string) => {
    return useQuery({
        queryKey: ['user'],
        queryFn: () => getUser(id),
        select: (data) => {
            return data
        },
    })
}