import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteUser} from "@/entities/user/api/deleteUser";
import {UserTableProps} from "@/features/users-table/model/types";

export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteUser(id),

        onSuccess: (_, id) => {
            queryClient.setQueriesData({queryKey: ['users']}, (old: UserTableProps) => {
                return {
                    ...old,
                    users: old.users.filter((user) => user.id !== id),
                }
            })
        }
    })
}