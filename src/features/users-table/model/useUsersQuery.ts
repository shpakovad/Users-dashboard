import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/shared/api/users";
import { mapUser } from "@/entities/user/model/mappers";

export function useUsersQuery() {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers(),
        select: (data) => {
            return {
                ...data,
                users: data.users.map(mapUser)
            }
        },
    })
}