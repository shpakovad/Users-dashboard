"use client"

import {useQuery} from "@tanstack/react-query";
import {getUsers} from "@/shared/api/users";
import {mapUser} from "@/entities/user/model/mappers";
import {ParamsTableProps} from "@/features/users-table/model/types";

export const useUsersQuery = ({page, pageSize, sortOrder, sortBy, search}: ParamsTableProps) => {
    return useQuery({
        queryKey: ['users', page, pageSize, sortOrder, sortBy, search],
        queryFn: () => getUsers({page, pageSize, sortOrder, sortBy, search}),
        select: (data) => {
            return {
                ...data,
                users: data.users.map(mapUser)
            }
        },
    })
}