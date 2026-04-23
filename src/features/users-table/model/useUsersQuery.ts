import {useQuery} from "@tanstack/react-query";
import {getUsers} from "@/shared/api/users";
import {mapUser} from "@/entities/user/model/mappers";

export const useUsersQuery = ({page, pageSize}: { page: number, pageSize: number }) => {
    return useQuery({
        queryKey: ['users', page, pageSize],
        queryFn: () => getUsers({page, pageSize}),
        select: (data) => {
            return {
                ...data,
                users: data.users.map(mapUser)
            }
        },
    })
}